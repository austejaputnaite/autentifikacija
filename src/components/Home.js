import React from 'react';
import LoadingIcons from 'react-loading-icons'

const logout = () => {
    window.location.reload();
}

function Home() {
    return (
        <div>
            <h1>Saugi internetinė svetainė</h1>
            <h1>Prisijungėte!</h1>
            <div className="loading-icon">
                <LoadingIcons.SpinningCircles strokeOpacity=".125" height="110" width="110"/>
			</div>
            <button onClick={logout}>Atsijungti</button>
        </div>
    )
}
export default Home;