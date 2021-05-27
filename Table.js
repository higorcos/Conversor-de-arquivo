class Table{
    constructor(arr){
        this.header = arr[0]; //a primeira linha(primeiro indice) da tabela (onde fica os dados)
        arr.shift(); //vai tirar o primeiro elemento 
        this.rows = arr; 
    }
    //get function()== campos virtuais
    // A função é chamada quando a propriedade é acessada.
    //esses valores podem mudar por isso não é passado no constructor
    
    get RowCount(){//quantidade de linhas
        return this.rows.length; 
    }
    get ColumnCount(){//quantidade de colunas
        return this.header.length;
    }
    
}

module.exports = Table;