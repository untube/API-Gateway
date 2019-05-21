import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	videosMutations,
	videosQueries,
	videosTypeDef,
} from './videos/typeDefs';

import {
	categoriesMutations,
	categoriesQueries,
	categoriesTypeDef,
}from './categories/typeDefs';


import {commentariesMutations,
	commentariesQueries,
	commentariesTypeDef,
}from './commentaries/typeDefs';

import videosResolvers from './videos/resolvers';
import categoriesResolvers from './categories/resolvers';
import commentariesResolvers from './commentaries/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		videosTypeDef,
		categoriesTypeDef,
		coursesTypeDef,
		commentariesTypeDef
	],
	[
		videosQueries,
		categoriesQueries,
		coursesQueries,
		commentariesQueries
	],
	[
		videosMutations,
		categoriesMutations,
		coursesMutations,
		commentariesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		videosResolvers,
		categoriesResolvers,
		commentariesResolvers
	)
});
