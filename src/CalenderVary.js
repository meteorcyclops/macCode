import React, { Component } from 'react';

class CalenderVary extends Component {


    render() {
            let travelStyle;
            if (this.props.isTravelStyleBgColored){
                travelStyle={
                backgroundColor:'green'
                }
            }else{
                travelStyle={
                backgroundColor:'white'
            }
            }
        return (
                <tr>
                    <td>{this.props.time}</td>
                    <td>
                        <div className="travel" 
                        onClick={this.props.travelEdit}
                        style={travelStyle}
                        >
                        </div>
                    </td>
                </tr>
        );
    }
}

export default CalenderVary;