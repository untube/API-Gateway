export const videosulTypeDef = `
type videoul {
    user_id: Int!,
    fieldname: String!,
    originalname:String!,
    encoding: String!,
    mimetype: String!,
    destination: String!,
    filename: String!,
    size: Int!,
    data:String!
}
input videoulInput {
    user_id: Int!,
    fieldname: String!,
    originalname:String!,
    encoding: String!,
    mimetype: String!,
    destination: String!,
    filename: String!,
    size: Int!,
    data:String!
}`;

export const videosulQueries = `
    allvideosul: [videoul]!
    videoulByCode(code: Int!): videoul!
`;

export const videosulMutations = `
    createvideoul(videoul: videoulInput!): videoul!
    deletevideoul(code: Int!): Int
    updatevideoul(code: Int!, videoul: videoulInput!): videoul!
`;
