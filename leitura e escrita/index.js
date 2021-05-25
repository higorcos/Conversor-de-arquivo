const fs = require('fs');// file system


//escrita no arquivo 
fs.writeFile('./arquivo.txt', 'Escrevendo esses texto no arquivo',(erro)=>{
    if(erro){
     console.log('ocorreu uma erro');
    }
    //abra o arquivo manualmente se não tiver a parte de leitura do arquivo 
})


// leitura de arquivo 
fs.readFile('./arquivo.txt',{encoding: 'utf-8'},(erro,dados)=>{ //enconding = tradução do arquivo para utf-8 //erro === callback
 //tratamento callback
 if(erro){
     console.log('ocorreu uma erro');
 }else{
     console.log(dados);
     
 }
})