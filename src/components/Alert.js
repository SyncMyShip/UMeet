// src/components/Alert.js

import { Component } from 'react';


// * Class definition * //
class Alert extends Component {
   constructor(props) {
       super(props);
       this.colorn= null;
       this.bgColor = null;
   }

   getStyle = () => {
       return {
           color: this.color,
           backgroundColor: this.bgColor,
           borderWidth: "2px",
           borderStyle: "solid",
           fontWeight: "bolder",
           borderRadius: "7px",
           borderColor: this.color,
           textAlign: "center",
           fontSize: "12px",
           margin: "10px 0",
           padding: "10px"       
       };
   }

   render() {
       return (
           <div className="Alert">
               <p style={this.getStyle()}>{this.props.text}</p>
           </div>
       );
   }
}



// * Subclass Definition * //
// color = blue
// bgColor = light blue
class InfoAlert extends Alert {
   constructor(props) {
       super(props);
       this.color = 'rgb(0, 0, 225)';
       this.bgColor = 'rgb(220, 220, 255)'
   }
}


// color = red
// bgColor = light salmon
class ErrorAlert extends Alert {
   constructor(props) {
       super(props);
       this.color = 'rgb(230, 38, 0)'
       this.bgColor = 'rgb(255, 149, 128)'
   }
}


// color = gold
// bgColor = pastel yellow
class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(235, 212, 12)'
        this.bgColor = 'rgb(255, 255, 204)'
    }
 }


export { InfoAlert, ErrorAlert, WarningAlert }

