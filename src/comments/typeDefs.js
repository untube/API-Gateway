export const commentsTypeDef = `
type Comment {
    video_id: String!
    user_id: Int!
    message: String!
}
input CommentInput {
    video_id: String!
    user_id: Int!
    message: String!
}`;

export const commentsQueries = `
    allComments: [Comment]!
    commentById(id: String!): Comment!
`;

export const commentsMutations = `
    createComment(comment: CommentInput!): Comment!
    deleteComment(id: String!): String
    updateComment(id: String!, comment: CommentInput!): Comment!
`;
