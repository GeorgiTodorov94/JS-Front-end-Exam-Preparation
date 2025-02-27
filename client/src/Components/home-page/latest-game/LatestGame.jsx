import { Link } from "react-router-dom"
export default function LatestGames({
    _id,
    title,
    imageURL,
}) {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={imageURL} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={`/games/${_id}/details`} className="btn details-btn">Details</Link>
            </div>
        </div>
    )
}