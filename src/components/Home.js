import React from 'react';
import LoadingIcons from 'react-loading-icons'

const logout = () => {
    window.location.reload();
}

function Home() {
    return (
        <div className="small-form">
            <h1>Saugi internetinė svetainė</h1>
            <h3>Prisijungėte!</h3>
            <div className="loading-icon">
                <LoadingIcons.SpinningCircles strokeOpacity=".125"/>
			</div>
            <button onClick={logout}>Atsijungti</button>
        </div>
    )
}
export default Home;