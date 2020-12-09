import React from 'react';

class CurrencyInput extends React.Component{
    constructor(props){
      super(props);           //??
      this.handleChange = this.handleChange.bind(this);  //Handle change: Änderungen verarbeiten
    }
    handleChange(e) {
      this.props.onCurrencyChange(e.target.value);
    }
    render(){
      const currency = this.props.currency ;
      const value = this.props.value;
      return (
        <fieldset>
          <legend>Gib die Menge in {currency} an:</legend>
          <input value={value} onChange={this.handleChange}/> 
        </fieldset>
      ) //jedes mal, wo der currency calculator im div ein Currencyinput rendert, werden die props weitergegeben und für jeden currency wird ein FEld mit input gezeichnet
    }
  }
  
  export default CurrencyInput;