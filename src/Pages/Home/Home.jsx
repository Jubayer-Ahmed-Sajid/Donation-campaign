import { useState } from "react";
import Cards from "./Cards/Cards";
import Banner from "./Header/Banner/Banner";





const Home = () => {

    const [searchValue, setSearchValue] = useState('')
    const [value,setValue] = useState('');
    const handleSearch = e => {
        const getValue = e.target.value;
        setSearchValue(getValue);
    }
    const handleValue =()=>{
        setValue(searchValue)
    }
    console.log(value);

    return (
        <div>
            <Banner handleSearch= {(e)=> handleSearch (e)} handleValue={handleValue}></Banner>
            <Cards value={value}></Cards>
            
        </div>
    );
};

export default Home;