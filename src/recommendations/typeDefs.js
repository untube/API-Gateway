export const userPreferencesTypeDef = `
type userPreferences {
    id_user: Int!
    id_category: Int!
    counter: Int!
}
type response {
    ids: [String]
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
    recommendationsByUser(code: Int!): response
`;

export const recommendationsMutations = `
    feedUserDB(userPreferences: userPreferencesInput!): String
    feedVideoDB(videosStatistics: videosStatisticsInput!): String
`;