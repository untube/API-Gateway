import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://192.168.99.101:3001/uploadVideo`;

const resolvers = {
	
	Mutation: {
		createvideoul: (_, { videoul }) =>
			generalRequest(`${URL}`, 'POST', videoul),
	}
};

export default resolvers;
