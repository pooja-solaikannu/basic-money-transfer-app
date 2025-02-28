import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
