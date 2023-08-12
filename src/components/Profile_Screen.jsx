export default function Profile_Screen() {
    return (
        <div className="profile">
            <h1>Account Settings</h1>
            <div className="profile__details">
                <img
                    className="profile_image"
                    src="https://picsum.photos/80/80"
                    alt="profile"
                />
                <div className="userData">
                    <h2>Marry Doe</h2>
                    <h3>Marry@Gmail.com</h3>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt porro pariatur minima doloremque suscipit natus est
                voluptatibus nisi quo sed facere fugit, sequi ullam.
            </p>
            <div className="dashed"></div>
        </div>
    );
}
