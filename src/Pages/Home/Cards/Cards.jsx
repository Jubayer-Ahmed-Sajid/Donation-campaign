import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const cardsData = useLoaderData();

    useEffect(()=>{
        setCards(cardsData)
    },[cardsData])
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
                {
                    cards?.map(card => <Card card={card} key={card.id}> </Card>)
                }
            </div>
        </div>
    );
};

export default Cards;