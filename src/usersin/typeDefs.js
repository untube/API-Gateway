export const usersinTypeDef = `
type User {
    id: Int!
    email: String!
    provider: String!
    uid: String!
    allow_password_change: Boolean!
    name: String!
    nickname: String!
    image: String!
}

input UserInput {
    email: String!
    password: String!
    
}`;

export const usersinQueries = `
    allUsers: [User]!
    usersById(id: String!): User!
    usersByEmail(email: String!): String! 
    usersByName(name: String!): String! 
    usersByNickname(nickname: String!): String!   
`;

export const usersinMutations = `
    loginUser(user: UserInput!): User!
`;
