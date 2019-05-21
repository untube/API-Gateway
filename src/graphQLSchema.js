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
	commentariesMutations,
	commentariesQueries,
	commentariesTypeDef,
}from './commentaries/typeDefs';

import {
	videosulMutations,
	videosulQueries,
	videosulTypeDef
} from './videosul/typeDefs';



import videosResolvers from './videos/resolvers';
import commentariesResolvers from './commentaries/resolvers';
import videosulResolvers from './videosul/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		videosTypeDef,
		commentariesTypeDef,
		videosulTypeDef
	],
	[
		videosQueries,
		commentariesQueries,
	],
	[
		videosMutations,
		commentariesMutations,
		videosulMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		videosResolvers,
		commentariesResolvers,videosulResolvers
	)
});
