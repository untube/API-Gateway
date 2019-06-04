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

type UserResponse {
    message: String
    content: User!
}

type LoginResponse {
    id: Int!
    provider: String!
    email: String!
    name: String!
    nickname: String!

}

input UserInput {
    email: String!
    password: String!
    password_confirmation: String!
    
}

input UserLogin {
    email: String!
    password: String!
}`;

export const usersQueries = `
    userById(id: String!): UserResponse!
    userByEmail(email: String!): UserResponse!
    userByName(name: String!): UserResponse!
    userByNickname(nickname: String!): UserResponse!
`;

export const usersMutations = `
    createUser(user: UserInput!): UserResponse!
    deleteUser(id: Int!): UserResponse!
    updateUser(id: Int!, user: UserInput!): UserResponse!
    loginUser( user: UserLogin): LoginResponse!

`;
