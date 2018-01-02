export class NewsArticle {

    id: number;
    title: string;
    publishedOn: Date;
    url: string;
    author: string;
    description: string;
    geographicScopeId: number;
    cityId: number;
    city: string;
    provinceId: number;
    province: string;
    keywordsFound: string[];
    upvote: number;
    downvote: number;
    comments: string[];
    userUpvoted: boolean;
    userVoted: boolean;
}
