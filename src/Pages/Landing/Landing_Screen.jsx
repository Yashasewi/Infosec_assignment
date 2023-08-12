import "./landing.css";
import { Link } from "react-router-dom";

export default function LandingScreen() {
    return (
        <div className="landing-screen">
            <h1>Welcome to PopX</h1>
            <p>
                PopX is a web application that allows you to search for movies
                and TV shows.
            </p>
            <button className="landing-button create-account">
                <Link to="/SignIn">Create Account</Link>
            </button>
            <button className="landing-button login-account">
                <Link to="/Login">Already Registered? Login</Link>
            </button>
        </div>
    );
}
