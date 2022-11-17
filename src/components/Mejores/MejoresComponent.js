import './Css/Mejoresinput.css';

import React, { Component } from 'react';

class Calcula extends Component {
  constructor(props) { //El manda a llamar 

    super(props);
    this.state = { Num1: '' };

  }
  
  Add = () => {
    var n1 = (this.state.Num1.toLocaleUpperCase());
    alert('La conversion en mayuscula es:' + n1);
  }

  render() {
    return (
      <div>
        <h1 className='titleconversor'>Conversor a Mayusculas</h1>
        <input type="text" onChange={(e) => this.setState({ Num1: e.target.value })}
          value={this.state.Num1} />

        <button title="Add" onClick={this.Add} >Click convertir a mayuscula</button>
      </div>
    );

  }

}

export default Calcula;