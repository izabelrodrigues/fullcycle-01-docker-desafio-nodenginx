const express = require('express')
const app = express()
const port = 3000
const dbConn = require('./config-db.js')





app.get('/', (req,res) => {

    const useDb = `USE nodedb;`
    dbConn.query(useDb);
    
    const createTable  = `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);`
    dbConn.query(createTable);

    const truncateTable = `TRUNCATE TABLE people;`;
    dbConn.query(truncateTable);

    const sql = `INSERT INTO people(name) values('Izabel'),('Aluno 02')`
    dbConn.query(sql);

    const sqlSelect = `SELECT id, name FROM people`;  
    dbConn.query(sqlSelect, (error, dados) => {
      if (error) {
        throw error
      };
      
      let list = '<ul>';
      for(let people of dados) {      
        list += `<li>${people.id} - ${people.name}</li>`;
      }
  
      list += '</ul>';    
      res.send('<h1>Full Cycle Rocks!</h1>' + list);    
    });   
    dbConn.end();

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

