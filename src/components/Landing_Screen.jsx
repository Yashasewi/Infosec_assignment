export default function Landing_Screen({ setLogin, setCreateAccount }) {
    const handleLoginClick = () => {
        setLogin(true);
        setCreateAccount(false);
    };

    const handleCreateAccountClick = () => {
        setLogin(false);
        setCreateAccount(true);
    };
    return (
        <div className="landing_screen">
            <h1>Welcome to PopX</h1>
            <p>
                PopX is a web application that allows you to search for movies
                and TV shows.
            </p>
            <button className="create_account" onClick={handleLoginClick}>
                Create Account
            </button>
            <button
                className="login_account"
                onClick={handleCreateAccountClick}
            >
                Already Registered? Login
            </button>
        </div>
    );
}
