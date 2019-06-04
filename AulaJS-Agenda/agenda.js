function Campo(id){
    this.obj = document.getElementById(id);
    var funcaoPai = this;

    this.set = function (valor){
        funcaoPai.obj.value = valor;
    }
    this.get = function (){
        return funcaoPai.obj.value;
    }
    this.clear = function(){
        this.set("");
    }
    return this;
}

function Botao(id, func){
    this.obj = document.getElementById(id);
    this.obj.addEventListener("click", function(){
        func();
    })
}

function trataCadastro(){
    //alert("Teste de adição de cadastro");
    agenda.adicionar(
        new Contato(
            display.nome.get(),
            display.telefone.get(),
            display.email.get()
        )
    );
}

var agenda = {
    lista: [],
    total: 0,
    atual: -1,
    adicionar: function(novoContato){
        this.lista.push(novoContato);
        this.total++;
        display.nome.clear();
        display.telefone.clear();
        display.email.clear();
        console.dir(this);
    },
    exibe: function(){
        var contatoAtual = this.lista[this.atual];
        display.nome.set(contatoAtual.nome);
        display.telefone.set(contatoAtual.telefone);
        display.email.set(contatoAtual.email);
    },
    proximo: function(){
        if(this.atual < this.lista.length-1){
            this.atual++;
            this.exibe();
        }
    },
    anterior: function(){
        if(this.atual > 0){
            this.atual--;
            this.exibe();
        }
    }

}

function trataAnterior(){
    agenda.anterior();
}

function trataProximo(){
    agenda.proximo();
}

//criando objeto literal
var display = {
    nome: new Campo("txtNome"),
    telefone: new Campo("txtTelefone"),
    email: new Campo("txtEmail"),
    adicionar: new Botao("btnCadastrar", trataCadastro),
    anterior: new Botao("btnAnterior", trataAnterior),
    proximo: new Botao("btnProximo", trataProximo)
};

//console.dir(display); //lista o objeto com todos os metodos

/*display.nome.set("Ricardo");
var x = display.nome.get();
console.log(x);*/

//Função construtora
/*function Display(){
    this.nome = document.getElementById("txtNome");
    this.telefone = document.getElementById("txtTelefone");
    this.email = document.getElementById("txtEmail");
}

var Display = new Display();*/

function Contato(nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    return this;
}

