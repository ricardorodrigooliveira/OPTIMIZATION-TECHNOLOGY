function forma(nome){
    this.nome = nome;
    this.getArea = function(){
        return 0;
    }
}

function Circulo(nome, raio){
    forma.call(this, nome);
    this.raio = raio;
    this.getArea = function(){
        return Math.PI * pow(this.raio,2);
    }
}

var lista =[];

function renderiza(){
    var texto = "<ul>";
    
    for (item in lista){
      texto += " <li>" + lista[item].nome + " area: " +  lista[item].getArea().toFixed(2) + "</li>";
    }
    texto += "</ul>"
    var divLista = document.getElementById("lista");
    divLista.innerHTML = texto;
}

function insereCirculo(){
    caixaTexto = document.getElementById("txtRaio");
    valorRaio = parseFloat(caixaTexto.value);

    caixaTexto = document.getElementById("txtNome");
    valorNome = document.getElementById("txtNome");

    var circulo = new Circulo(valorNome, valorRaio);
    lista.push(circulo);
    renderiza();
}

/*function Forma(nome){
    this.nome = nome;
    this.getArea = function(){
        return 0;
    }
}

function Circulo(nome, raio){
    Forma.call(this, nome);
    this.raio = raio;
    this.getArea = function(){
        return Math.PI * this.raio * this.raio;
    }
}

var lista = [];

function renderiza(){
    var texto = "<ul>";
    
    for (item in lista){
      texto += " <li>" + lista[item].nome + " area: " +  lista[item].getArea().toFixed(2) + "</li>";
    }
    texto += "</ul>"
    var divLista = document.getElementById("lista");
    divLista.innerHTML = texto;
}

function insereCirculo(){
    caixaTexto = document.getElementById("txtRaio");
    valorRaio = parseFloat(caixaTexto.value);

    caixaTextoNome = document.getElementById("txtNome");
    valorNome = caixaTextoNome.value;

    var circulo = new Circulo(valorNome, valorRaio);
    lista.push(circulo);
    renderiza();
}*/