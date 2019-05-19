export const categoriesTypeDef = `
type Category {
    id: String!
    category: String!
    description: String!
}
input CategoryInput {
    category: String!
    description: String!
}`;

export const categoriesQueries = `
    allCategories: [Category]!
    categoryById(id: String!): Category!
`;

export const categoriesMutations = `
    createCategory(category: CategoryInput!): Category!
    deleteCategory(id: String!): String
    updateCategory(id: String!, category: CategoryInput!): Category!
`;
