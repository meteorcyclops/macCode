import React, { Component } from 'react';
import CalenderVary from './CalenderVary'
class Calender extends Component {

    render() {
        return (
          <table className="table_solid">
            <thead>
              <tr>
                <th></th>
                <th>5/16</th>
              </tr>
            </thead>
            <tbody>
                {this.props.time.map((time,key)=>{
                    return <CalenderVary time={time} key={key} 
                    travelEdit={this.props.travelEdit} 
                    isTravelStyleBgColored={this.props.isTravelStyleBgColored}
                    />
                })}
            </tbody>
          </table>
        );
    }
}

export default Calender;