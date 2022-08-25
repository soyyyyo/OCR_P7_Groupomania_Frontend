import React, { useContext } from "react";
import Log from "../../components/Log/Log";
import { UidContext } from "../../components/AppContext/AppContext";
import Profile from "../../components/Log/Profile";


const Profil = () => {

    const uid = useContext(UidContext)

    return (
        <div className="profil-page">
            {uid ? (
                <Profile />
            ) : (
                <div className="log-container">
                    <Log signin={false} signup={true} />
                </div>
            )}
        </div>
    );
};

export default Profil;