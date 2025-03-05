import Button from "../components/Button";
import InputBox from "../components/InputBox";

export function SignIn() {
    function signinHandler() {
        console.log("sign in handler is called")
    }
    return(
        <div className="m-4 flex flex-col items-center justify-center gap-4 bg-gray-200">
            <InputBox placeholderValue="John" inputType="text"/>
            <InputBox placeholderValue="Doe" inputType="text"/>
            <InputBox placeholderValue="password" inputType="text"/>

            <Button buttonName="Sign In" buttonColor="black" onClick={signinHandler}/>
        </div>
    )
}