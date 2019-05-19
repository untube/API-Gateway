export const videosTypeDef = `
type Video {
    id: String!
    user_id: Int!
    title: String!
    url: String!
    description: String!
    duration: Float!
}
input VideoInput {
    user_id: Int!
    category_id: String
    title: String!
    url: String!
    description: String
    
}`;

export const videosQueries = `
    allVideos: [Video]!
    videoById(id: String!): Video!
`;

export const videosMutations = `
    createVideo(video: VideoInput!): Video!
    deleteVideo(id: String!): String
    updateVideo(id: String!, video: VideoInput!): Video!
`;

export const categoriesTypeDef = `
type Category {
    id: String!
    category: String!
    description: String!
}
input CategoryInput {
    user_id: Int!
    title: String!
}`;

export const categoryQueries = `
    allCategories: [Category]!
    categoryById(id: String!): Category!
`;

export const categoriesMutations = `
    createCategory(category: CategoryInput!): Category!
    deleteCategory(id: String!): String
    updateCategory(id: String!, category: CategoryInput!): Category!
`;
