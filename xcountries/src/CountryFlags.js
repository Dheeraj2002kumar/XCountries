import { useEffect, useState } from "react";

const CountryCard = ({name, flag}) => {
    return (
        <div className="country-card">
            <img src={flag} alt={`Flag of ${name}`} className="flag-img" />
            <h3>{name}</h3>
        </div>
    );
}


function CountryFlags() {
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    const [flagData, setFlagData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(API_ENDPOINT);
                const jsonData = await data.json();
                setFlagData(jsonData);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="country-flag-container">
            {flagData.map((country) => (
                <CountryCard key={country.abbr} name={country.name} flag={country.flag} />
            ))}
        </div>
    );
}


export default CountryFlags;
