import React from 'react';
import './MedicalField.css'

class MedicalField extends React.Component {
    render() {
        return (
            <div className="World-MedicalField Body2 Dark2">
                {this.props.medicalfield}
            </div>
        )
    }
}

export default MedicalField;