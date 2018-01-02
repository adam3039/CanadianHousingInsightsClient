import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { AuthGuard } from '../../../auth.guard';
import { ActivatedRoute } from '@angular/router';
import { ArticleComment } from '../../../models/news/article-comment';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class CommentsComponent {
    constructor(private newsService: NewsService, private authGuard: AuthGuard, private route: ActivatedRoute) { }
    @Input() comment: ArticleComment;

    private upvoteBlocked = false;
    private downvoteBlocked = false;
    private upvoteClicked: boolean;
    private downvoteClicked: boolean;


    upvoteClick(comment: ArticleComment): void {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.upvoteBlocked) {
                this.upvoteBlocked = true;
                console.log(comment.id + ' upvote button clicked.');
                if (this.comment.userVoted) {
                    if (this.comment.userUpvoted !== undefined) {
                        if (this.comment.userUpvoted) {
                            this.comment.upvotes--;
                            this.comment.userUpvoted = false;
                            this.comment.userVoted = false;
                            this.newsService.commentUpvoteClicked(this.comment.id).subscribe(() => {
                                this.upvoteBlocked = false;
                            });
                        } else {
                            this.comment.downvotes--;
                            this.comment.upvotes++;
                            this.comment.userUpvoted = true;
                            this.newsService.commentUpvoteClicked(this.comment.id).subscribe(() => {
                                this.upvoteBlocked = false;
                            });
                        }
                    } else if (!this.comment.userVoted) {
                        this.comment.upvotes++;
                        this.comment.userUpvoted = true;
                        this.comment.userVoted = true;
                        this.newsService.commentUpvoteClicked(this.comment.id).subscribe(() => {
                            this.upvoteBlocked = false;
                        });
                    }
                }
            }
        }
    }

    downvoteClick(comment: ArticleComment): void {
        if (this.authGuard.canActivate(this.route.snapshot)) {
            if (!this.downvoteBlocked) {
                this.downvoteBlocked = true;
                if (this.comment.userVoted) {
                    if (this.comment.userUpvoted !== undefined) {
                        if (this.comment.userUpvoted) {
                            this.comment.downvotes++;
                            this.comment.upvotes--;
                            this.comment.userUpvoted = false;
                            this.newsService.commentDownvoteClicked(comment.id).subscribe(() => {
                                this.downvoteBlocked = false;
                            });
                        } else {
                            this.comment.downvotes--;
                            this.comment.userUpvoted = false;
                            this.comment.userVoted = false;
                            this.newsService.commentDownvoteClicked(comment.id).subscribe(() => {
                                this.downvoteBlocked = false;
                            });
                        }
                    }
                } else if (!this.comment.userVoted) {
                    this.comment.downvotes++;
                    this.comment.userUpvoted = false;
                    this.comment.userVoted = true;
                    this.newsService.commentDownvoteClicked(comment.id).subscribe(() => {
                        this.downvoteBlocked = false;
                    });
                }
            }
        }
    }
}
