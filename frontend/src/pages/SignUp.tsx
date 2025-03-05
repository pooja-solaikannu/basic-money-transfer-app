import Button from "../components/Button";

export function SignUp() {
    function signupHandler() {
        console.log("sign up handler is called")
    }
    return(
        <div className="m-4">
            SignUp Page
            <Button buttonName="Sign Up" buttonColor="black" onClick={signupHandler}/>
        </div>
    )
}