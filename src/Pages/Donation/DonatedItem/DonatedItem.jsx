import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DonatedItem = ({ donatedItem }) => {

    const { id, picture, card_bg_color, text_color, category_bg_color, category, title, price } = donatedItem;
    return (
        <div>

            <div className="md:flex gap-6 items-center" style={{ background: card_bg_color }} >
                <div>
                    <figure><img src={picture} className='w-full h-32 md:w-[220px]  md:h-[200px]' /></figure>

                </div>
                <div className='text-center'>
                    <h2 style={{ color: text_color, background: category_bg_color }} className='py-1 bg-auto md:pl-8 pl-4 mt-4 md:mt-8'>{category}</h2>
                    <p className='mt-3 mb-2'>{title}</p>
                    <p style={{ color: text_color }} className='mb-2'>${price}</p>
                    <Link to={`/cards/${id}`}>
                        <button style={{ background: text_color }} className='py-2 md:py-3 px-2 mb-4 text-white font-semibold text-sm md:text-xl rounded-lg'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

DonatedItem.propTypes = {
    donatedItem: PropTypes.object

}

export default DonatedItem
