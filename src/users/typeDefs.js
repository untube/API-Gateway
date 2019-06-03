export const usersTypeDef = `
type User {
    id: Int!
    provider: String!
    uid: String!
    allow_password_change: Boolean!
    name: String!
    nickname: String!
    image: String!
    email: String!
    created_at: String!
    updated_at: String!
}

input UserInput {
    email: String!
    password: String!
    password_confirmation: String!
    
}`;

export const usersQueries = `
    allUsers: [User]!
    usersById(id: String!): User!
    usersByEmail(email: String!): String! 
    usersByName(name: String!): String! 
    usersByNickname(nickname: String!): String!   
`;

export const usersMutations = `
    createUser(user: UserInput!): User!
    deleteUser(id: String!): String
    updateUser(id: String!, user: UserInput!): User!
`;
