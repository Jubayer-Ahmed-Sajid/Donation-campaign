import { Link } from "react-router-dom";
// import theme from '../../../../../public/categories.json'

const Card = ({ card }) => {
    // console.log(theme,'json')
    const {id,picture,title,category,category_bg_color,card_bg_color,button_bg_color,text_color}= card;
    return (
        <div>
           <Link to ={`/cards/${id}`}>
           <div className={`card ${card_bg_color} ${text_color} shadow-xl h-[280px]`}>
                <figure><img src={picture} className="w-full"/></figure>
                <div className={`card-body ml-4 {text_color}`}>
                    <h2 className={`text-sm font-medium mb-3 ${category_bg_color} w-14 py-2`}>
                        {category}
                       </h2>
                    <p className={`text-xl font-semibold`}>{title}</p>
                    
                    </div>
                </div>
           </Link>
            </div>
    );
};

export default Card;