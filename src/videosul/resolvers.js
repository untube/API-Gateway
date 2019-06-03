import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://34.73.94.91:3001/uploadVideo`;

const resolvers = {
	
	Mutation: {
		createvideoul: (_, { videoul }) =>
			generalRequest(`${URL}`, 'POST', videoul),
	}
};

export default resolvers;
