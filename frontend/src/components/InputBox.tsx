import "./InputBox.css"

interface IInputBoxProp {
    placeholderValue: string
    inputType: string
    lableName: string
}

export default function InputBox(props: IInputBoxProp){
    return(
        <div>
            <div className="font-semibold mb-2">{props.lableName}</div>
            <input className="border-2 border-gray-500 py-2 px-2 rounded" placeholder={props.placeholderValue} type={props.inputType}></input>
        </div>
    )

}