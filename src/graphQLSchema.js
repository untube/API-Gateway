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

import{
	recommendationsMutations,
	recommendationsQueries,
	userPreferencesTypeDef,
	videosStatisticsTypeDef,
}from './recommendations/typeDefs'

import {
	videosulMutations,
	videosulQueries,
	videosulTypeDef,
} from './videosul/typeDefs';

import {
	usersMutations,
	usersQueries,
	usersTypeDef,
} from './users/typeDefs';



import videosResolvers from './videos/resolvers';
import categoriesResolvers from './categories/resolvers';
import commentariesResolvers from './commentaries/resolvers';
import videosulResolvers from './videosul/resolvers';
import recommendationsResolvers from './recommendations/resolvers';
import usersResolvers from './users/resolvers'


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		videosTypeDef,
		commentariesTypeDef,
		videosulTypeDef,
		categoriesTypeDef,
		userPreferencesTypeDef,
		videosStatisticsTypeDef,
		usersTypeDef
	],
	[
		videosQueries,
		categoriesQueries,
		commentariesQueries,
		videosulQueries,
		recommendationsQueries,
		usersQueries
	],
	[
		videosMutations,
		commentariesMutations,
		videosulMutations,
		categoriesMutations,
		recommendationsMutations,
		usersMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		videosResolvers,
		commentariesResolvers,
		videosulResolvers,
		categoriesResolvers,
		recommendationsResolvers,
		usersResolvers
	)
});
