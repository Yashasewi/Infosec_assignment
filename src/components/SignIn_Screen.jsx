export default function SignIn_Screen() {
    return (
        <div className="signIn">
            <h1>Signin to your</h1>
            <h1>PopX Account</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                aliquam. Culpa minima
            </p>
            <form>
                <span>
                    <label
                        className="email"
                    >Email Address</label>
                    <input type="email" placeholder="Email Address" />
                </span>
                <span>
                    <label className="password">Password</label>
                    <input type="password" placeholder="Password" />
                </span>
                <button>Login</button>
            </form>
        </div>
    );
}
