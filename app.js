const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PDFWriter');

var leitor = new Reader();
var writer = new Writer();

async function main(){
    var dados = await leitor.reade('./users.csv');// classe de leitura do arquivo.csv(tabela)
    var dadosOrganizados = Processor.Process(dados); // classe estática, para divisão dos dados da tabela

    var users = new Table(dadosOrganizados);
    
    var htmlData = await HtmlParser.Parse(users) // vai tansformar os dados em html 
    
    writer.Write('./save.html',htmlData)  // vai salvar o dados em um arquivo externo 
    //obs pode salvar com nomes aleatorios ou dinamicos

    PDFWriter.WritePDF('./save.pdf',htmlData) // vai gerar um pdf
}

main();

