import * as request from '../../src/api/requester'
const BASE_URL = 'http://localhost:3030/jsonstore/games';
// export const getAll = async () => {
//     await request.get(BASE_URL)
// }


export const getAll = () => request.get(BASE_URL)
// GETTER FUNCTION FOR TAKING DATA FROM DATABASE
// STUDY THIS FUNCTION
// IMPLEMENT THIS IN MY PROJECT --- SO much easier......