import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const WATCH = `http://${url}:${port}/watch`;

const resolvers = {
	Query: {
		allVideos: (_) =>
			generalRequest(`${URL}`, 'GET'),
		videoById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		streamVideo: (_,{id}) =>
			generalRequest(`${WATCH}/${id}`,`GET`)

	},
	Mutation: {
		createVideo: (_, { video }) =>
			generalRequest(`${URL}`, 'POST', video),
		updateVideo: (_, { id, video }) =>
			generalRequest(`${URL}/${id}`, 'PUT', video),
		deleteVideo: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
	}
};

export default resolvers;
