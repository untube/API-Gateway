import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Query: {

        commentaryById: (_, { id }) =>
            generalRequest(`${URL}/${id}`, 'GET'),
        commentariesByVideo: (_, { id_video }) =>
            generalRequest(`${URL}/video/${id_video}`, 'GET'),
    },
    Mutation: {
        createCommentary: (_, { commentary }) =>
            generalRequest(`${URL}`, 'POST', commentary),
        updateCommentary: (_, { id, commentary }) =>
            generalRequest(`${URL}/${id}`, 'PUT', commentary),
        deleteCommentary: (_, { id }) =>
            generalRequest(`${URL}/${id}`, 'DELETE')
    }
};

export default resolvers;