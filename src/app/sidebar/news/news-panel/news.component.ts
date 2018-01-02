import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { UserService } from '../../../services/user.service';
import { ArticleUserVote } from '../../../models/news/article-user-vote';
import { NewsArticle } from '../../../models/news/news-article';


@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
    constructor(private newsService: NewsService, private userService: UserService) {}
    articles: NewsArticle[];
    userVotes: ArticleUserVote[];
    public loading = false;

    ngOnInit() {
        this.loading = true;
        this.newsService.getArticles().subscribe(articles => {
            const size = 10;
            this.articles = articles.slice(0, size);
            for (const article of this.articles) {
                const index = this.articles.indexOf(article);
                article.userVoted = false;
                this.articles[index] = article;
                this.loading = false;
            }
            if (this.userService.isLoggedIn()) {
                this.addUserVoteHistory();
            }
        });
    }

    addUserVoteHistory() {
        this.newsService.getArticlesUserVotes(this.articles.map(m => m.id)).subscribe(votes => {
            this.userVotes = votes;
            for (const vote of this.userVotes) {
                const articleFound = this.articles.filter(m => m.id === vote.articleId)[0];
                if (articleFound != null) {
                    const indexOf = this.articles.indexOf(articleFound);
                    articleFound.userVoted = true;

                    if (vote.isUpvote) {
                        articleFound.userUpvoted = true;
                    } else {
                        articleFound.userUpvoted = false;
                    }
                    this.articles[indexOf] = articleFound;
                }
            }
        });
    }
}
