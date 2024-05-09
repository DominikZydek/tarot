import { useEffect, useState } from "react";
import TarotCard from "./components/TarotCard";

function Reading({ type }) {

    const [cards, setCards] = useState([]);

    async function fetchCards() {
        let quantity;
        if (type === "daily") {
            quantity = 3;
        } else if (type === "weekly") {
            quantity = 5;
        } else if (type === "advice") {
            quantity = 3;
        }
        const result = await fetch(`http://localhost:3001/random-cards?number=${quantity}`)
            .then((response) => response.json());
        console.log(result);

        setCards(result);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div>
            <h2 className="text-3xl mb-10">Your {type} reading</h2>
            <div className="flex justify-evenly items-start">
            {cards.map((card) => (
                <TarotCard key={card.name} card={card} isMeaningVisible={false} isReversed={Math.random() < 0.25} />
            ))}
            </div>
            <p>
                Placeholder for chatgpt interpretation:<br /><br />
                Proin eros magna, dignissim non vulputate eget, lacinia et orci. In at dui sollicitudin, posuere mauris in, iaculis diam. Sed suscipit imperdiet erat fermentum euismod. Morbi in massa tellus. Donec pretium eget mi quis vulputate. Quisque ante turpis, viverra non facilisis vel, porttitor congue nibh. Duis commodo augue ligula, sit amet semper elit fermentum sed. Vestibulum porta lorem vitae eros blandit sodales. Ut augue justo, condimentum sit amet nunc condimentum, tristique pellentesque libero. Vivamus dapibus, mi sed dignissim vehicula, risus ex egestas lectus, a ultrices nisi felis sed dolor. Vestibulum interdum tristique eros, nec sodales odio malesuada vel. Donec a mollis neque.
            </p>
        </div>
    );
}

export default Reading;