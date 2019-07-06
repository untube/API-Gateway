export const commentariesTypeDef = `
type Commentary {
    id: Int!
    idUser: Int!
    subject: String!
    description: String!
    idVideo: String!
    likes: Int!
    createdAt: String!
    updatedAt: String!
}

input CommentaryInput {
    subject: String!
    description: String!
    idUser: Int!
    idVideo: String!
}`;

export const commentariesQueries = `
    commentaryById(id: Int!): Commentary!
    commentariesByVideo(idVideo: String!): [Commentary]!
`;

export const commentariesMutations = `
    createCommentary(commentary: CommentaryInput!): Commentary!
    deleteCommentary(id: Int!): String
    updateCommentary(id: Int!, commentary: CommentaryInput!): Commentary!
`;