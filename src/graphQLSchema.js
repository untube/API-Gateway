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

import {
	commentsMutations,
	commentsQueries,
	commentsTypeDef,
}from './comments/typeDefs';

import {
	coursesMutations,
	coursesQueries,
	coursesTypeDef,
}from './courses/typeDefs';

import videosResolvers from './videos/resolvers';
import categoriesResolvers from './categories/resolvers';
import commentsResolvers from './comments/resolvers';
import coursesResolvers from './courses/resolvers';  //Can be changed for any other microservice


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		videosTypeDef,
		categoriesTypeDef,
		commentsTypeDef,
		coursesTypeDef
	],
	[
		videosQueries,
		categoriesQueries,
		commentsQueries,
		coursesQueries
	],
	[
		videosMutations,
		categoriesMutations,
		commentsMutations,
		coursesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		videosResolvers,
		categoriesResolvers,
		commentsResolvers,
		coursesResolvers
	)
});
