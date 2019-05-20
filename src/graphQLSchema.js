import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	videosMutations,
	videosQueries,
	videosTypeDef
} from './videos/typeDefs';

import {
	commentariesMutations,
	commentariesQueries,
	commentariesTypeDef
} from './commentaries/typeDefs';

import videosResolvers from './videos/resolvers';
import commentariesResolvers from './commentaries/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		videosTypeDef,
		commentariesTypeDef
	],
	[
		videosMutations, 
		commentariesMutations
	],
	[
		videosQueries,
		commentariesQueries
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		videosResolvers,
		commentariesResolvers
	)
});
