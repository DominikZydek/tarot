
function Buttons({ buttons }) {

    return (
        <div className="flex justify-center gap-28">
            {buttons.map((button, index) => {
                return <button className="bg-gray-900 px-6 py-2 rounded-lg" onClick={() => window.location.href = `/${button}`} key={index}>{button}</button>
            })}
        </div>
    )
}

export default Buttons;