export const videosTypeDef = `
type Video {
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
input VideoInput {
    user_id: Int!
    category_id: String
    title: String!
    description: String!
    
}`;

export const videosQueries = `
    allVideos: [Video]!
    videoById(id: String!): Video!
    streamVideo(id: String!): String 
    videosByName(name: String!): [Video]!
    videosByUser(id: Int!): [Video] !   
`;

export const videosMutations = `
    createVideo(video: VideoInput!): Video!
    deleteVideo(id: String!): String
    updateVideo(id: String!, video: VideoInput!): Video!
`;