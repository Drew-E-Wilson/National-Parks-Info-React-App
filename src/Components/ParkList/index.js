import { Link } from 'react-router-dom'
export default function ParkList({ parkData }) {
    return (
        <div>
            {parkData.map((park, i) => {
                return (
                    <div>
                        <Link to={`/park/${park.id}`}>
                            <img src={park.images[0].url} alt={park.images[0].altText} width="100px" />
                            <h2>{park.name}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}