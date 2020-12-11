var Reader = require("./Controller/Reader");
var Processor = require("./Controller/Processor");
var Table = require("./Controller/Table");
var Writer = require("./Controller/Writer");

var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var reader = new Reader();
var writer = new Writer();

async function main(){
    var data = await reader.Read("./Resource/users.csv");
    var processedData = Processor.Process(data);

    var users = new Table(processedData);

    var html = await HtmlParser.Parse(users);
    
    writer.Write(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".PDF",html);
}

main();