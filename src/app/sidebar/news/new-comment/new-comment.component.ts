import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { NewsArticle } from '../../../models/news/news-article';

@Component({
    selector: 'app-new-comment',
    templateUrl: './new-comment.component.html',
    styleUrls: ['./new-comment.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class NewCommentComponent {
    constructor(private newsService: NewsService) { }
    @Input() article: NewsArticle;
    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() newComment: EventEmitter<number> = new EventEmitter<number>();
    comment: string;
    private commentCount: number;
    submitNewComment() {
        this.newsService.newComment(this.article.id, this.comment).subscribe(() => {
            this.commentCount = this.article.comments.length + 1;
            this.newComment.emit(this.commentCount);
            this.close.emit();
        });

    }
}
