import React from "react";
import '../Components/Row.css'

class Row extends React.Component {
    render() {

        return (<a className="ContainerRow" target="_blank" href={this.props.link}>
            <div className="Left" >
                <img className="Thumbnail" src={this.props.logo}/>
                <div className="Content">
                    <h3>{this.props.jobtitle}</h3>
                    <div className="ContentCompany">
                        <p className="Body2 Dark2 CompanyName">{this.props.companyname}</p> • 
                        <p className="Body2 Dark2 Location">{this.props.location}</p> 
                        <p className="Body2 Dark2">{this.props.remotestatus}</p>
                    </div>
                </div>
            </div>
        </a>
            
        );
    }
}



export default Row;