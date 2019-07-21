import React from 'react';
import confLogo from '../images/logo-ag.png';

import '../components/styles/ProfileStyle.css';


class ProfileHeader extends React.Component{

    render(){

        return(

            <div className="Profile__header">
                <img className="Profile__logo" src={confLogo} alt="Hola" /> 
            </div>

        );

    }

}

export default ProfileHeader;