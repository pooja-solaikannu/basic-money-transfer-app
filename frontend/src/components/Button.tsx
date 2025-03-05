import "./Button.css"

interface IButtonProp {
    buttonName: string
    buttonColor: string
    onClick: () => void
}

export default function Button(props: IButtonProp) {
    return(
        <div>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-600" onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}