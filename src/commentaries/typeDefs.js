export const commentariesTypeDef = `
type Commentary {
    id: Int!
    id_user: Int!
    subject: String!
    description: String!
    id_video: String!
    likes: Int!
    created_at: String!
    updated_at: String!
}
input CommentaryInput {
    subject: String!
    description: String!
}`;

export const commentariesQueries = `
    allCommentaries: [Commentary]!
    commentaryById(id: Int!): Commentary!
`;

export const commentariesMutations = `
    createCommentary(commentary: CommentaryInput!): Commentary!
    deleteCommentary(id: Int!): String
    updateCommentary(id: Int!, commentary: CommentaryInput!): Commentary!
`;
