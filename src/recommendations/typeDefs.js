export const userPreferencesTypeDef = `
type userPreferences {
    id_user: Int!
    id_category: Int!
    counter: Int!
}
input userPreferencesInput {
    id_user: Int!
    id_category: Int!
}`;


export const videosStatisticsTypeDef = `
type videosStatistics {
    id_video: Int!
    id_category: Int!
    calification: Int!
    num_views: Int!
}
input videosStatisticsInput {
    id_video: Int!
    id_category: Int!
    calification: Int!
}`;


export const recommendationsQueries = `
    recommendationsByUser(code: Int!): videosStatistics
`;

export const recommendationsMutations = `
    feedUserDB(userPreferences: userPreferencesInput!): String
    feedVideoDB(input: videosStatisticsInput!): videosStatistics
`;