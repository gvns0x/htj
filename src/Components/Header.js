import React from 'react'
import '../Components/Header.css'
import './Header.css'

class Header extends React.Component {

    

    render() {


        return (
            <div class="ContainerHeader">
                <div className="Copy">
                    <h1 className="Dark1">{this.props.title}</h1>
                    <h2 className="Dark2">{this.props.subtitle}</h2>
                </div>
                <img src={this.props.image}/>
            </div>
        )
    }
}

export default Header
