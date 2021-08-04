import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';
import './LastUpdate.css'


const lol = () => {
    console.log(moment().format('dddd'))
}

lol();

class LastUpdate extends React.Component {
    render() {
        return (
            <div class="World-LastUpdate">
                <h4 className="LastUpdate-Title">Last updated:</h4>
                <h4><Moment fromNow>{this.props.lastUpdate}</Moment></h4>
            </div>
        )
    }
}

export default LastUpdate;