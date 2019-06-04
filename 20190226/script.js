/* tipos de declaração de objetos


function CriaCarro(plac, marca){
    this.placa = placa;
    this.marca = marca;
    return this;
}

var novoCarro - new CriaCarro("ABC-1234","volks");
novoCarro.

var x {

}

var x = new Objeto()
x.abc = "123";
x.def = "abc";
*/

var svg = "http://www.w3.org/2000/svg";
var tela = document.getElementById("tela");

function Circulo(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
    var novoCirculo = document.createElementNS(svg, "circle");
    novoCirculo.setAttribute("cx", "400");
    novoCirculo.setAttribute("cy", "400");
    novoCirculo.setAttribute("r", "100");
    /* quando clica no circulo exibe mensagem
    novoCirculo.addEventListener("click", function(){
        alert("Clicou no circulo!");
    })*/
    var self = this;
    this.click = undefined;

    novoCirculo.addEventListener("click", function(){
        if(self.click != undefined && self.click != null)
            self.click();
    });

    /*novoCirculo.addEventListener("click", function(){
        alert(self.x +" "+ self.y); 
    })*/

    novoCirculo.addEventListener("mousedown", function(){
        self.movendo = true;
    });

    novoCirculo.addEventListener("mousemove", function(ev){
        if(self.movendo){
            self.setPos(ev.x, ev.y);
        }
    });

    novoCirculo.addEventListener("mouseup", function(){
        self.movendo = false;
    });

    this.elemente = novoCirculo;
    tela.appendChild(this.elemente);
    this.setPos = function(x, y){
        this.elemente.setAttribute("cx", x);
        this.elemente.setAttribute("cy", y);
        this.x = x;
        this.y = y;
    }
}

for(var i = 0; i < 10; i++){
    var c1 = new Circulo(200, 100, 150);

c1.click = function(){
    alert("Gerado novo circulo");
}
}

/* quando carrega a pagina chama o alert e depois exibe o circulo
window.addEventListener("load", function(event){
    alert("carregou a pagina!");
})*/ 

