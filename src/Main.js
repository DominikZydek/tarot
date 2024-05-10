import { useEffect, useState } from "react";
import TarotCard from "./components/TarotCard";
import Buttons from "./components/Buttons";

function Main() {

    const [cardOfTheDay, setCardOfTheDay] = useState({});

    async function fetchCardOfTheDay() {
        const result = await fetch("http://localhost:3001/todays-card")
            .then((response) => response.json());
        console.log(result);

        setCardOfTheDay(result);
    }

    useEffect(() => {
        fetchCardOfTheDay();
    }, []);

    return (
        <>
            <h2 className="text-3xl mb-10">Card of the day</h2>
            <TarotCard card={cardOfTheDay} />
            <h2 className="text-3xl mb-10">Get your reading</h2>
            <Buttons buttons={["Daily", "Weekly", "Advice"]} />
        </>

    );
}

export default Main;
