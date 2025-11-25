import { LuTv } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";
import { PiSealWarningBold } from "react-icons/pi";
import Card from "./Card";

export default function Cards() {

    const cardsData = [
        {
            title: "Live Games",
            description: "Real‑time simulations and user‑hosted matches with live stats, heat maps, and in‑game decisions you can influence.",
            icon: <LuTv color="#07326A" size={40} />
        },
        {
            title: "Community",
            description: "manager profiles, shared tactic libraries, match day discussion threads, co‑op leagues and challenges, and creator pages for publishing guides, scouting notes, and highlight reels.",
            icon: <MdGroups2 color="#07326A" size={40} />
        },
        {
            title: "Safety",
            description: "Default sign‑up flow separates adult and teen experiences so younger users get stricter defaults with parental control",
            icon: <PiSealWarningBold color="#07326A" size={40} />
        }
    ]

    return (
        <div className="cards">
            {cardsData.map(card => <Card card={card}/>)}
        </div>
    )
}
