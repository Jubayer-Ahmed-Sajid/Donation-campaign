import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
    const [donatedNumber, setDonatedNumber] = useState([]);
    useEffect(() => {
        const storedDonation = JSON.parse(localStorage.getItem("donation"));
        if (Array.isArray(storedDonation)) {
            setDonatedNumber(storedDonation);
        }
    }, []);

    const totalDonationLength = donatedNumber.length;
    const totalCards = 12;
    const myDonation = ((totalDonationLength / totalCards) * 100).toFixed(2);
    const yourDonation = parseFloat(myDonation);
    const totalDonation = 100 - yourDonation;

    const data = [
        ["Category", "Amount"],
        ["Your Donation", yourDonation],
        ["Total Donation", totalDonation]
    ];
    const chartColors = ["#00C49F","#FF444A"];

    const options = {
        // title: "Donation Statistics",
        colors: chartColors
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"800px"}
        />
    );
};

export default Statistics;
