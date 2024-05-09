import { useEffect, useState } from "react";
import TarotCard from "./components/TarotCard";
import Buttons from "./components/Buttons";

function App() {

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
    <div className="App text-center h-screen bg-zinc-700 text-neutral-200 p-5">
      <h1 className="text-5xl mb-10">Virtual Witch</h1>
      <h2 className="text-3xl mb-2">Card of the day</h2>
      <TarotCard card={cardOfTheDay}/>
      <h2 className="text-3xl mb-2">Get your reading</h2>
      <Buttons buttons={["Daily", "Weekly", "Advice"]}/>
    </div>
  );
}

export default App;
