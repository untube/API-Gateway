import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint} from './server';


const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		userById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		userByEmail: (_, { email }) =>
			generalRequest(`${URL}/email/${email}`, 'GET'),
		userByName: (_, { name }) =>
			generalRequest(`${URL}/name/${name}`, 'GET'),
		userByNickname: (_, { nickname }) =>
			generalRequest(`${URL}/nickname/${nickname}`, 'GET')

	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE'),
		loginUser: (_, { email, password }) =>
			generalRequest(`${URL}`, 'POST', user),
	}
};

export default resolvers;