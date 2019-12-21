import React from "react";
import Request from "../Requests";
import "./Profile.css";
import LeftMenuElem from "../LeftMenuElem/LeftMenuElem";

class Profile extends React.Component{

    render() {
        return(
            <div className='main--box'>
                <div className='left--navbar'>
                    <LeftMenuElem context='My Profile' link='/profile/my_profile'/>
                    <LeftMenuElem context='Workers' link='/profile/workers'/>
                </div>
            </div>
        )
    }
}

export default Profile;