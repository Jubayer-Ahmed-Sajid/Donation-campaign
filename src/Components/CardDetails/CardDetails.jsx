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
                <div className="w-ful relative px-8">
                    <div>

                    <img src={picture} className="w-full" alt="" />
                <div className="hero-overlay bottom-0 w-[84.7%] md:w-[91.5%] lg:w-[95%] bg-black opacity-50 absolute h-20 md:h-40"></div>
                </div>

                    <button style={{ background: button_bg_color }} className="absolute left-16 bottom-5 py-2 md:left-16 md:bottom-9 md:py-4 md:px-7 rounded-lg  md:text-xl text-sm px-2 font-semibold text-white"
                        onClick={saveDonationData}>Donate ${price}</button>
                 
                </div>
                <h2 className=" text-xl md:text-4xl font-bold my-6 md:mt-14 md:mb-6 px-8">{title}</h2>
                <p className="px-8">{description}</p>
            </div>


        </div>
    );
};

export default CardDetails;