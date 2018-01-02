import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ArticleUserVote } from '../models/news/article-user-vote';
import { CommentUserVote } from '../models/news/comment-user-vote';
import { NewsArticle } from '../models/news/news-article';
import { ArticleComment } from '../models/news/article-comment';

@Injectable()
export class NewsService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private userService: UserService) { }

    getArticles(): Observable<NewsArticle[]> {
        return this.http.get<NewsArticle[]>(this.baseUrl + 'api/news/articles');
    }

    getComments(articleId: number): Observable<ArticleComment[]> {
        return this.http.get<ArticleComment[]>(this.baseUrl + 'api/comments/comments/' + articleId);
    }

    articleUpvoteClicked(articleId: number) {
        return this.http.post(this.baseUrl + 'api/news/upvotearticle', { articleId });
    }

    articleDownvoteClicked(articleId: number) {
        return this.http.post(this.baseUrl + 'api/news/downvotearticle', { articleId });
    }

    commentUpvoteClicked(commentId: number) {
        return this.http.post(this.baseUrl + 'api/comments/upvotecomment', { commentId });
    }

    commentDownvoteClicked(commentId: number) {
        return this.http.post(this.baseUrl + 'api/comments/downvotecomment', { commentId });
    }

    getCommentUserVotes(commentIds: number[]) {
        return this.http.post<CommentUserVote[]>(this.baseUrl + 'api/comments/commentuservotes', { commentIds });
    }

    newComment(articleId: number, comment: string) {
        return this.http.post(this.baseUrl + 'api/comments/savecomment', { articleId, comment });
    }

    getArticlesUserVotes(articleIds: number[]) {
        return this.http.post<ArticleUserVote[]>(this.baseUrl + 'api/news/articleuservotes', { articleIds } );
    }
}
