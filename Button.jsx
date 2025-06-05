
const Button = ({text, onPress}) => {

    return(
        <button onClick={onPress} className="ring-1 ring-black w-24 h-24 float-left shadow-xl font-bold text-6xl bg-blue-300">
            {text}
        </button>
    );
}

export default Button;