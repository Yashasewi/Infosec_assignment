import "./App.css";
import { useState } from "react";
import Landing_Screen from "./components/Landing_Screen";
import Login_Screen from "./components/Login_Screen";
import Profile_Screen from "./components/Profile_Screen";
import SignIn_Screen from "./components/SignIn_Screen";
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
