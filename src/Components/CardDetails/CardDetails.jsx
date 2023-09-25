import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const details = useLoaderData();
    const detailId = useParams();
    const intId = parseInt(detailId.id)
    const [detail, setDetail] = useState({});
    useEffect(() => {

        const cardDetails = details.find(card => card.id === intId)
        setDetail(cardDetails)



    }, [details, intId])
    const {title,picture,description} = detail;

    return (
        <div>
            <div>
                <div className="w-ful">
                <img src={picture} className="w-full" alt=""  />

                </div>
                <h2 className="text-4xl font-bold mt-14 mb-6">{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
};

export default CardDetails;