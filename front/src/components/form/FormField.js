import React, { Component } from 'react';

export default class FormField extends Component {
    render() {
        return (
            <div>
                <div className="field">
                 <label className="label">{this.props.fieldLabel}:</label>
                 <div className="control">
                   <input
                     className="input"
                     name={this.props.fieldName}
                     type={this.props.fieldType}
                     value={this.props.fieldValue}
                     placeholder={this.props.fieldName}
                     onChange={() => this.props.change(name)}
                   />
                 </div>
               </div>
        )
    }
}
