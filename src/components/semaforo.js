import React, { Component } from "react";
import './semaforo.css';

class Semaforo extends Component{
  constructor(){
    super();
    this.state = {
      luzVermelha : "apagada",
      luzAmarela : "apagada",
      luzVerde: "apagada"
    };
  }
  render(){
    return(
      <section className="container">
        <div className="barra"></div>
        <ul className="semaforo">
          <li className="luz vermelho" id={this.state.luzVermelha} onClick = {() => this.setState({luzVermelha:"acesa", luzAmarela:"apagada", luzVerde:"apagada"})}></li>
          <li className="luz amarelo" id={this.state.luzAmarela} onClick = {() => this.setState({luzVermelha:"apagada", luzAmarela:"acesa", luzVerde:"apagada"})}></li>
          <li className="luz verde" id={this.state.luzVerde} onClick = {() => this.setState({luzVermelha:"apagada", luzAmarela:"apagada", luzVerde:"acesa"})}></li> 
        </ul>
      </section>
    );
  }
}

export default Semaforo;