import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
    Query: {

        commentaryById: (_, { id }) =>
            generalRequest(`${URL}/${id}`, 'GET'),
        commentariesByVideo: (_, { idVideo }) =>
            generalRequest(`${URL}/${idVideo}`, 'GET'),
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