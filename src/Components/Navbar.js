import React from 'react'
import './Navbar.css'
import logo from '../images/logo1.png'

class Navbar extends React.Component {
    render() {
        return (
            <div className="ContainerNavbar">
                <div className="Logo">
                    <img src={logo}/>
                </div>
            </div>
        )
    }
}

export default Navbar;