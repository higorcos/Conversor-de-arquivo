class Processor{
   static Process(data){
       var a = data.split('\n');// \r // vai dividir cada linha 
       var rows = [];

        //vai percorrer o array e vai dividir cada item da tabela
       a.forEach(row => {
           var arr = row.split(',')
           rows.push(arr);
       })
       return rows;
   } 
}

module.exports = Processor