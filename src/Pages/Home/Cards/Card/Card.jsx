import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const Card = ({ card }) => {
    const { id, picture, title, category, category_bg_color, card_bg_color, text_color } = card;
    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div style={{ background: card_bg_color }} className="card shadow-xl md:h-[280px]">
                    <figure><img src={picture} className="md:w-full " /></figure>
                    <div style={{ color: text_color }} className={`card-body ml-4 {text_color}`}>
                        <h2 style={{ background: category_bg_color }} className="text-sm font-medium mb-3 w-16 py-2">
                            {category}
                        </h2>
                        <p className="text-lg md:text-xl font-semibold">{title}</p>

                    </div>
                </div>
            </Link >
        </div >
    );
};

Card.propTypes = {
    card: PropTypes.object
}



export default Card;