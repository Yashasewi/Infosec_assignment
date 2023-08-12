import { Link } from "react-router-dom";
import "./login.css";

export default function Login_Screen() {
    return (
        <div className="login">
            <h1>Signin to your</h1>
            <h1>PopX Account</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                aliquam. Culpa minima
            </p>
            <form
                className="Login_form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <span>
                    <label className="email">Email Address</label>
                    <input
                        className="input_element"
                        type="email"
                        placeholder="Email Address"
                    />
                </span>
                <span>
                    <label className="password">Password</label>
                    <input
                        className="input_element"
                        type="password"
                        placeholder="Password"
                    />
                </span>
                <button>
                    <Link to="/profile">Login</Link>
                </button>
            </form>
        </div>
    );
}
