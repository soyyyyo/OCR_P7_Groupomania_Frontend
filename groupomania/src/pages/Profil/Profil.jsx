import React, { useContext } from "react";
import Log from "../../components/Log/Log";
import { UidContext } from "../../components/AppContext/AppContext";


const Profil = () => {

    const uid = useContext(UidContext)

    return (
        <div className="profil-page">
            {uid ? (
                <h1>UPDATE PAGE</h1>
            ) : (
                <div className="log-container">
                    <Log signin={false} signup={true} />
                </div>
            )}
        </div>
    );
};

export default Profil;