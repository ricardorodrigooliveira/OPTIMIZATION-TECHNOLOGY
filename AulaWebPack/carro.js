function Carro(placa){
    this.placa = placa;
    this.ligar = function(){
      console.log("Ligando carro de placa " + this.placa);
    }
    this.desligar = function(){
      console.log("Desligando carro de placa " + this.placa);
    }
  }
  
  export default Carro;