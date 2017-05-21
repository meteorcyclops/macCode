import React from 'react';
import Calender from './src/Calender';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        time:['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
        isTravelStyleBgColored:false
      }
      this.travelEdit=this.travelEdit.bind(this)
  }
  travelEdit(e) {
    e.preventDefault();
    const travelTag=e.currentTarget;
    if (travelTag.style.backgroundColor=='white'){
      travelTag.style.backgroundColor='green'
    }else {
      travelTag.style.backgroundColor='white'
    }
  
  }
   render() {
      return (
        <div>
          <Calender 
          time={this.state.time}  
          travelEdit={this.travelEdit}
          isTravelStyleBgColored={this.state.isTravelStyleBgColored}
          />
        </div>
      );
   }
}

export default App