import { useEffect, useState } from "react";
import DonatedItem from "./DonatedItem/DonatedItem";

const Donation = () => {
    const [donatedItems, setDonatedItem] = useState([]);
    const [displayItems,setDisplayItems] = useState(4);
    const [notDonated,setNotDonated]=useState('');
    useEffect(() => {
        const donation = JSON.parse(localStorage.getItem('donation'))
        if(donation){
            setDonatedItem(donation)
        }
        else{
            setNotDonated("You have not Donated Yet")
        }

    }, [])
    //  const donatedItemsLength = donatedItems.length;
    return (
        <div>
            <div className="grid grid-cols-2 gap-8">
                {
                    notDonated ? <p className="text-4xl flex justify-center h-[80vh] items-center col-span-2"> {notDonated} </p> :


                        donatedItems.slice(0,displayItems).map((donatedItem, idx) => <DonatedItem key={idx} donatedItem={donatedItem}></DonatedItem>)



                }
            </div>
            <div className='flex justify-center my-8'>
                <button onClick={()=>setDisplayItems(donatedItems.length)} className={`${displayItems === donatedItems.length || donatedItems.length < 4 ? 'hidden' : ''} py-2 px-3 bg-green-500 text-white rounded-lg text-xl font-semibold`}>Show All</button>
            </div>
        </div>
    );
};

export default Donation;