const fs = require('fs')

var alterandoArquivo = (nome,matricula,curso)=>{ 
fs.readFile('./dados.json',{encoding: 'utf-8'}, (erro,dados)=>{
    if(erro){
        console.log('ocorreu um erro')
    }else{ 
        console.log(dados)
        var conteudo = JSON.parse(dados); //converte texto para objeto javascript(Json)
        
        conteudo.matricula = matricula
        conteudo.nome = nome;
        conteudo.curso = curso;
        
        //vai alterar o arquivo com os dados do objeto 
        //JSON.stringify(conteudo) === converter de objeto para texto 
        fs.writeFile('./dados.json', JSON.stringify(conteudo) , (erro)=>{
            if(erro){
                console.log('Ocorreu um erro')
            }

            // vai mostrar novamente o arquivo depois da mudança 
            fs.readFile('./dados.json',{encoding: 'utf-8'}, (erro,dados)=>{
                if(erro){
                    console.log('ocorreu um erro')
                }else{ 
                    console.log(dados, 'novos dados')
                }
            })
        
        })
        
    }
})
}
//alterandoArquivo('Higor Costa','2020031600', 'Engenharia')

alterandoArquivo('Hugo Costa','202100910', 'Filosofia')
