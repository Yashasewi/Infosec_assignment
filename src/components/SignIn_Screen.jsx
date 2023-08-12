export default function SignIn_Screen() {
    return (
        <div className="signIn">
            <h1>Create your</h1>
            <h1>PopX Account</h1>

            {/* create a form with full name , phone number 
            , email addrees  , password , company name and 
            radio button of agency yes and no */}
            <form>
                <span>
                    <label className="fullName">Full Name</label>
                    <input type="text" placeholder="Full Name" />
                </span>

                <span>
                    <label className="phoneNumber">Phone Number</label>
                    <input type="text" placeholder="Phone Number" />
                </span>

                <span>
                    <label className="email">Email Address</label>
                    <input type="email" placeholder="Email Address" />
                </span>
                <span>
                    <label className="password">Password</label>
                    <input type="password" placeholder="Password" />
                </span>
                <span>
                    <label className="companyName">Company Name</label>
                    <input type="text" placeholder="Company Name" />
                </span>
                <span>
                    <label className="agency">Are you an agency?</label>
                    <span className="radio_btn">
                        <span>
                            <input type="radio" name="agency" value="yes" />
                            <label>Yes</label>
                        </span>
                        <span>
                            <input type="radio" name="agency" value="no" />
                            <label>No</label>
                        </span>
                    </span>
                </span>

                <button>Create Account</button>
            </form>
        </div>
    );
}
