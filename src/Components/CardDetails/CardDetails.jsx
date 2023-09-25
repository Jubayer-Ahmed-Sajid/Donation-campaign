import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const CardDetails = () => {
    const details = useLoaderData();
    const detailId = useParams();
    const intId = parseInt(detailId.id)
    const [detail, setDetail] = useState({});
    useEffect(() => {

        const cardDetails = details.find(card => card.id === intId)
        setDetail(cardDetails)



    }, [details, intId])
    const { title, picture, description, price, button_bg_color } = detail;
    const saveDonationData = () => {
        const donationArray = []
        const donated = JSON.parse(localStorage.getItem('donation'));
        

        if (!donated) {
            donationArray.push(detail)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            swal("Good job!", "You Have Successfully Donated!", "success");

        }
        else {
            donationArray.push(...donated, detail)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            swal("Good job!", "You Have Successfully Donated!", "success");
        }

    }

    return (
        <div>
            <div>
                <div className="w-ful relative">
                    <img src={picture} className="w-full" alt="" />
                    <button style={{ background: button_bg_color }} className="absolute left:8 bottom-6 py-3 px-5  md:left-16 md:bottom-14 md:py-4 md:px-7 rounded-lg  md:text-xl font-semibold text-white"
                        onClick={saveDonationData}>Donate ${price}</button>
                </div>
                <h2 className="text-4xl font-bold mt-14 mb-6">{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default CardDetails;