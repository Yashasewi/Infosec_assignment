import "./App.css";
import { useState } from "react";
import SignIn_Screen from "./Pages/SignIn/SignIn_Screen";
import Login_Screen from "./Pages/Login/Login_Screen";
import Profile_Screen from "./Pages/Profile/Profile_Screen";
import Landing_Screen from "./Pages/Landing/Landing_Screen";
export default function App() {
    const [Login, setLogin] = useState(false);
    const [CreateAccount, setCreateAccount] = useState(false);

    return (
        <div className="app">
            <Landing_Screen
                setLogin={setLogin}
                setCreateAccount={setCreateAccount}
            />
            <SignIn_Screen
                setLogin={setLogin}
                setCreateAccount={setCreateAccount}
            />
            <Login_Screen
                setLogin={setLogin}
                setCreateAccount={setCreateAccount}
            />
            <Profile_Screen
                setLogin={setLogin}
                setCreateAccount={setCreateAccount}
            />
        </div>
    );
}
