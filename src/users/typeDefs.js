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
    status: String
    data: User
}

type LoginResponse {
    data: User
}

input UserInput {
    name: String
    nickname: String
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
