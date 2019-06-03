import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint, entryPonint} from './server';

const URL = `http://192.168.99.101:4000/auth/sign_in`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			generalRequest(`${URL}`, 'GET'),
		usersById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		usersByEmail: (_, { email }) =>
			generalRequest(`${URL}/email/${email}`, 'GET'),
		usersByName: (_, { name }) =>
			generalRequest(`${URL}/name/${name}`, 'GET'),
		usersByNickname: (_, { nickname }) =>
			generalRequest(`${URL}/nickname/${nickname}`, 'GET')

	},
	Mutation: {
		loginUser: (_, { user }) =>
			generalRequest(`${URL}`, 'POST', user),
	}
};

export default resolvers;
