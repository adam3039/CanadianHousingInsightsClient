export interface ArticleComment {
    id: number;
    articleId: number;
    article: any;
    parentCommentId: any;
    parentComment: any;
    userId: string;
    user: any;
    comment: string;
    publishedOn: Date;
    lastUpdatedOn: Date;
    upvotes: number;
    downvotes: number;
    userVoted: boolean;
    userUpvoted: boolean;
}
