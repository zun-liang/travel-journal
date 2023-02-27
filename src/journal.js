import locationLogo from "./location-logo.png";

export default function Journal(props) {
    return (
        <section className="journal">
            <img src={props.item.imageUrl} className="journal--img"/>

            <div className="container--description">
                <div className="container--location">
                <img src={locationLogo} className="journal--location-img"/>
                <p className="journal--location">{props.item.location}</p>
                <a href={props.item.googleMapsUrl} className="journal--map">View on Google Maps</a>
                </div>
                <h2 className="journal--title">{props.item.title}</h2>
                <p className="journal--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="journal--description">{props.item.description}</p>
            </div>
        </section>
    )
}
