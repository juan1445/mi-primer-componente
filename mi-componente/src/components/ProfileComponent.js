import React from 'react';
import confLogo from '../images/logo-ag.png';

import './styles/ProfileStyle.css';

class Profile extends React.Component{
    
    render(){
        return(
            //Contenedor de mi card
            <div className = "Profile">
                {/* Encabezado del perfil */}
                <div className = "Profile__header">
                    <img className="Profile__logo" src={confLogo} alt="Logo de la academia Geek"/>
                </div>
                {/* Nombre de usuario y su avatar */}
                <div className = "Profile__section-name">
                    <img className="Profile__avatar" src="https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png" alt="Avatar del usuario" />
                    <h1>Juan <br/>Zuleta</h1>
                </div>
                {/* Informacion profesional del usuario */}
                <div className="Profile__section-info">
                    <h2>Desarrollador FrontEnd</h2>
                    <h4>@juan1445</h4>
                </div>
                {/* Etiqueta que hace mencion a la Geek conferencia */}
                <div className="Profile__footer">
                    #geekconf
                </div>
            </div>
        );
    }

}

export default Profile;