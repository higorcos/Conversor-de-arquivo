const fs = require('fs');
const util = require('util')

//fs usa callback
// o util tranforma a função callback em promise/await

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile); 
    }
     reade = async (filepath) =>{
        try{
            return await this.reader(filepath,'utf-8')
        }catch(err){
            return  undefined;
        }
    }
}

module.exports = Reader;