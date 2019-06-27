import { generalRequest } from '../utilities';
import { url, port, entryPoint, urlv, portv, entryPointv } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URLv = `http://${urlv}:${portv}/${entryPointv}`;
const resolvers = {
	Query: {
		// recommendationsByUser: (_, { code }) =>
		// 	generalRequest(`${URL}/${code}/recommend`, 'GET'),
		
		recommendationsByUser: (_, { code }) =>{
            return new Promise((resolve, reject) => {
				generalRequest(`${URL}/${code}/recommend`, 'GET').then((response) => {
					var finalResponse = []
					
					var promisesnumber = response.length
					response.forEach(element => {
						// console.log(element.id)
						
						generalRequest(`${URLv}/${element.id}`, 'GET').then((response2) => {
							finalResponse.push(response2)
							// console.log("respuesta 2")
							// console.log(response2)
							// console.log("array")
							// console.log(finalResponse)
							promisesnumber -= 1
							if(promisesnumber == 0){
								console.log(finalResponse)
								return resolve(finalResponse)
							}
						})
						
					})

                })
					 
            })
        }
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