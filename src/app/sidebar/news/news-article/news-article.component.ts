import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { UserService } from '../../../services/user.service';
import { AuthGuard } from '../../../auth.guard';
import { ActivatedRoute } from '@angular/router';
import { CommentUserVote } from '../../../models/news/comment-user-vote';
import { NewsArticle } from '../../../models/news/news-article';
import { ArticleComment } from '../../../models/news/article-comment';

@Component({
    selector: 'app-news-article',
    templateUrl: './news-article.component.html',
    styleUrls: ['./news-article.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class NewsArticleComponent {
    constructor(private newsService: NewsService,
        private userService: UserService,
        private authGuard: AuthGuard,
        private route: ActivatedRoute) { }

    @Input() article: NewsArticle;
    @Output() onVoted = new EventEmitter<boolean>();

    upvoteBlocked = false;
    downvoteBlocked = false;
    private upvoteClicked: boolean;
    private downvoteClicked: boolean;
    private allCommentsClicked: boolean;
    private newCommentClicked: boolean;
    private comments: ArticleComment[];
    private userVotes: CommentUserVote[];
    public loading = false;

    upvoteClick(article: NewsArticle): void {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.upvoteBlocked) {
                this.upvoteBlocked = true;
                if (this.article.userVoted) {
                    if (this.article.userUpvoted !== undefined) {
                        if (this.article.userUpvoted) {
                            this.article.upvote--;
                            this.article.userUpvoted = false;
                            this.article.userVoted = false;
                            this.newsService.articleUpvoteClicked(article.id).subscribe(() => {
                                this.upvoteBlocked = false;
                            });
                        } else {
                            this.article.downvote--;
                            this.article.upvote++;
                            this.article.userUpvoted = true;
                            this.newsService.articleUpvoteClicked(article.id).subscribe(() => {
                                this.upvoteBlocked = false;
                            });
                        }
                    }
                } else if (!this.article.userVoted) {
                    this.article.upvote++;
                    this.article.userUpvoted = true;
                    this.article.userVoted = true;
                    this.newsService.articleUpvoteClicked(article.id).subscribe(() => {
                        this.upvoteBlocked = false;
                    });
                }
            }
        }
    }

    downvoteClick(article: NewsArticle): void {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.downvoteBlocked) {
                this.downvoteBlocked = true;
                if (this.article.userVoted) {
                    if (this.article.userUpvoted !== undefined) {
                        if (this.article.userUpvoted) {
                            this.article.downvote++;
                            this.article.upvote--;
                            this.article.userUpvoted = false;
                            this.newsService.articleDownvoteClicked(article.id).subscribe(() => {
                                this.downvoteBlocked = false;
                            });
                        } else {
                            this.article.downvote--;
                            this.article.userUpvoted = false;
                            this.article.userVoted = false;
                            this.newsService.articleDownvoteClicked(article.id).subscribe(() => {
                                this.downvoteBlocked = false;
                            });
                        }
                    }
                } else if (!this.article.userVoted) {
                    this.article.downvote++;
                    this.article.userUpvoted = false;
                    this.article.userVoted = true;
                    this.newsService.articleDownvoteClicked(article.id).subscribe(() => {
                        this.downvoteBlocked = false;
                    });
                }
            }
        }
    }

    allCommentsClick(article: NewsArticle): void {
        if (!this.allCommentsClicked) {
            this.allCommentsClicked = true;
            this.loading = true;
            this.newsService.getComments(article.id).subscribe(comments => {
                this.comments = comments;
                for (const comment of this.comments) {
                    const index = this.comments.indexOf(comment);
                    comment.userVoted = false;
                    this.comments[index] = comment;
                    this.loading = false;
                }
                if (this.userService.isLoggedIn()) {
                    this.addUserVoteHistory();
                }
            });
        } else {
            this.comments = new Array<ArticleComment>();
            this.allCommentsClicked = false;
        }
    }

    addUserVoteHistory() {
        this.newsService.getCommentUserVotes(this.comments.map(m => m.id)).subscribe(votes => {
            this.userVotes = votes;
            for (const vote of this.userVotes) {
                const commentFound = this.comments.filter(m => m.id === vote.commentId)[0];

                if (commentFound != null) {
                    const index = this.comments.indexOf(commentFound);
                    commentFound.userVoted = true;

                    if (vote.isUpvote) {
                        commentFound.userUpvoted = true;
                    } else {
                        commentFound.userUpvoted = false;
                    }
                    this.comments[index] = commentFound;
                }
            }
        });
    }

    newCommentClick(article: NewsArticle) {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            console.log(article.title + ' new comment button clicked');
            if (!this.newCommentClicked) {
                this.newCommentClicked = true;
            } else {
                this.newCommentClicked = false;
            }
        }
    }

    closeNewComment() {
        this.newCommentClicked = false;
    }

    incrementComment(event) {
        this.article.comments.length = event;
    }
}
