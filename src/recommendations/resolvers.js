import { generalRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		recommendationsByUser: (_, { code }) =>
			generalRequest(`${URL}/${code}/recommend`, 'GET'),
	},
	Mutation: {
		feedUserDB: (_, { userPreferences }) =>
			//generalRequest(`${URL}/${user}/${category}/feedUser`, 'POST', userPreferences),
			generalRequest(`${URL}/feedUser`, 'POST', userPreferences),
		
		feedVideoDB: (_, { videosStatistics }) =>
			generalRequest(`${URL}/feedVideo`, 'POST', videosStatistics),

	}
};

export default resolvers;