import requester from "./requester"

const BASE_URL = ('http://localhost:3030/jsonstore/games/')
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`
const create = async (gameId, username, text) => {
    const result = await requester.post(buildUrl(gameId), { username, text })

    const gameComments = Object.values(result)

    return gameComments;
};

export default {
    create,
};