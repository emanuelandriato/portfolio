//const data = require("./data.js")

class Pessoa {
    nome = "Emanuel Andriato"
    profissao = "Systems Analyst and Developer"
    mensagem = "Developing is an art! "    
}

const tecnologias = [
    'C','Pascal','Delphi','C#','HTML','CSS','JavaScript',
    'MQL5','Firebird','SqlServer','SqLite'
]

const prepareHead = [ 
    [rel="preconnect",href="https://fonts.googleapis.com"],
    [rel="preconnect",href="https://fonts.gstatic.com"],
    [rel="stylesheet",href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap"]  
]

class Head{
    AddLinks(array){
        array.forEach(element => {    
            var newLink = document.createElement('link');
            newLink.rel = element[0]
            newLink.href = element[1]     
            document.head.appendChild(newLink)
        });       
    }
}

class Profile {
    setName(value){
        const el = document.querySelector("#name")   
        if(el != null) el.textContent = value
    }    
    setWork(value){
        const el = document.querySelector("#work")          
        if(el != null) el.textContent = value
    } 
    setMessage(value){
        const el = document.querySelector("#message")   
        if(el != null) el.textContent = value
    } 
}

class Technologies {
    setTecnologies(array){
        const el = document.querySelector("#technologies")            
        if(el != null)
        {
        array.forEach(element => {            
            const item = document.createElement('item');
            item.innerText = element;
            item.setAttribute('class','sphere')
            el.insertBefore(item,el.nextElementSibling)
        });
        }
    }
}

const head = new Head();
head.AddLinks(prepareHead);

const pessoa = new Pessoa();
const profile = new Profile();
profile.setName(pessoa.nome)
profile.setWork(pessoa.profissao)
profile.setMessage(pessoa.mensagem)

const tec = new Technologies();
tec.setTecnologies(tecnologias);

