import * as request from '../../src/api/requester'
const BASE_URL = 'http://localhost:3030/jsonstore/games';
// export const getAll = async () => {
//     await request.get(BASE_URL)
// }


export const getAll = async () => {
    const result = await request.get(BASE_URL)
    const games = Object.values(result)

    return games;

}

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)

// GETTER FUNCTION FOR TAKING DATA FROM DATABASE
// STUDY THIS FUNCTION
// IMPLEMENT THIS IN MY PROJECT --- SO much easier......

const gamesAPI = {
    getAll,
    getOne
};

export default gamesAPI;