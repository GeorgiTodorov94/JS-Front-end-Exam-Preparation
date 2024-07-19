import { useEffect, useState } from "react";
import * as request from '../../api/requester'
import gamesAPI from '../../api/games-api'
import GameListItem from "./game-list-item/GameListItem";

export default function GameList() {
    const [games, setGames] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         // const gamesResult = await requester('GET', 'http://localhost:3030/jsonstore/games')

    //         const gamesResult = await request.get('http://localhost:3030/jsonstore/games')
    //         console.log(gamesResult)
    //     })();
    // }, []);

    // STUDY THIS FUNCTION!!!! STUDY THIS FUNCTION !!!
    // IMPLEMENT THIS IN MY PROJECT --- SO much easier......

    useEffect(() => {
        (
            async () => {
                const games = await gamesAPI.getAll();

                setGames(games)
            }
        )()
    }, [])


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameListItem key={game._id} {...game} />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}