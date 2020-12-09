import React from 'react';
import './MagicButton.scss';

class MagicButton extends React.Component {
      constructor(props) {
         super(props);
         this.state = {render: true};
      }
      deleteMe() {
        this.setState({
          render: false
        });
      }
      
      render() {
        if(this.state.render){
          return (
            <button onClick={(e) => this.deleteMe(e)}>
              delete me! 
            </button>
          );
        }
        else{
          return null;
        }
      }
    }

    export default MagicButton;