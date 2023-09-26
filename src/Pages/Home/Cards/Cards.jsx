import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'


const Cards = ({value}) => {
    // const [cards, setCards] = useState([]);
    const[displayCards,setDisplayCards] = useState([])
    const cardsData = useLoaderData();

    useEffect(()=>{
        // setCards(cardsData)
        setDisplayCards(cardsData)

        if(value.toLowerCase() == 'health'){
          const healthCategory =   cardsData.filter(data => data.category =='Health')
          setDisplayCards(healthCategory)
          console.log(healthCategory)
        }
        else if (value.toLowerCase() == 'education'){
            const educationCategory = cardsData.filter(data => data.category == 'Education')
            setDisplayCards(educationCategory)
        }
        else if (value.toLowerCase() == 'food'){
            const foodCategory = cardsData.filter(data => data.category == 'Food')
            setDisplayCards(foodCategory)
        }
        else if (value.toLowerCase() == 'clothing') {
            const clothCategory = cardsData.filter(data => data.category == 'Clothing')
            setDisplayCards(clothCategory)
        }
    },[value,cardsData])
    return (
        <div>
            <div className="mt-24 grid grid-cols-1 gap-6 sm:h-20 lg:grid-cols-4 md:grid-cols-3">
                {
                    displayCards?.map(card => <Card card={card} key={card.id}> </Card>)
                }
            </div>
        </div>
    );
};
Cards.propTypes ={
    value: PropTypes.string
}

export default Cards;