export const userPreferencesTypeDef = `
type userPreferences {
    id_user: Int!
    id_category: Int!
    counter: Int!
}
type response {
    id: String
}
type RecommendedVideo {
    id: String!
    user_id: Int!
    category_id: String!
    video_id: String!
    title: String!
    description: String!
    originalname : String!
    views: Int!
    filename: String!
    image: String!
}
input userPreferencesInput {
    id_user: Int!
    id_category: Int!
}`;


export const videosStatisticsTypeDef = `
type videosStatistics {
    id_video: String!
    id_category: Int!
    calification: Int!
    num_views: Int!
}
input videosStatisticsInput {
    id_video: String!
    id_category: Int!
    calification: Int
}`;


export const recommendationsQueries = `
    recommendationsByUser(code: Int!): [RecommendedVideo]
`;

export const recommendationsMutations = `
    feedUserDB(userPreferences: userPreferencesInput!): String
    feedVideoDB(videosStatistics: videosStatisticsInput!): String
`;