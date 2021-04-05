import { Link } from "react-router-dom";
export default function ParkDetail({ park }) {
    return (
        <div>
            <header>
                <h1>{park.name}</h1>
                <p>{park.description}</p>
            </header>
            <section>
                <div>
                    <h2>Address</h2>
                    <p>{park.addresses[0].line1}</p>
                </div>
                <div>
                    <h2>Directions</h2>
                    <p>{park.directionsInfo}</p>
                    <bnutton>Read More</bnutton>
                </div>
                <div>
                    <h2>Images</h2>
                    {park.images.map((image, i) => {
                        return (
                            <div key={i}>
                                <img src={image.url} alt={image.altText} />
                            </div>
                        )
                    })}
                </div>
                <Link to="/">Back to Park List</Link>
            </section>
        </div>
    )
}