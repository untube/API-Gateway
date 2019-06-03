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

type LoginResponse {
    id: Int!
    email: String!
    name: String!
    nickname: String!

}

input UserInput {
    email: String!
    name: String!
    nickname: String!
    password: String!
    password_confirmation: String!
    
}

input UserLogin {
    email: String!
    password: String!
}`;

export const usersQueries = `
    userById(id: String!): User
    userByEmail(email: String!): User 
    userByName(name: String!): User
    userByNickname(nickname: String!): User   
`;

export const usersMutations = `
    createUser(user: UserInput!): User
    deleteUser(id: Int!): User
    updateUser(id: Int!, user: UserInput!): User
    loginUser(id: Int!, user: UserLogin): LoginResponse

`;