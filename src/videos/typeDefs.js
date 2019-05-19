export const videosTypeDef = `
type Video {
    id: String!
    user_id: Int!
    title: String!
    url: String!
    description: String!
}
input VideoInput {
    user_id: Int!
    title: String!
    url: String!
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
