import "../styles/components/Card.css"


export default function Card({card}) {
    return (
        <div className="card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
    )
}