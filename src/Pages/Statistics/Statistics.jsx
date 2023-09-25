import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
    const [donatedNumber, setDonatedNumber] = useState([]);
    useEffect(() => {
        const totalDonation = JSON.parse(localStorage.getItem("donation"));
        setDonatedNumber(totalDonation);
    }, []);

    const totalDonationLength = donatedNumber ? donatedNumber.length : 0;
    const totalCards = 12;
    const myDonation =  ((totalDonationLength / totalCards) * 100).toFixed(2) ;
    const yourDonation = parseFloat(myDonation)
    const totalDonation = (100 - yourDonation);

    const data = [
        { name: "Your Donation", value: yourDonation, fill: "#0088FE" },
        { name: "Total Donation", value: totalDonation, fill: "#FFBB28" }
    ];
    const Value = data.map(values => values.value)
    console.log(Value);

    return (
        <div>
            <PieChart width={930} height={750}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                >

                </Pie>
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default Statistics;
