const fs = require('fs');

module.exports = function(app) {
    console.log("hit")
    app.get("/api/notes", function(req, res) {
        fs.readFile('db/db.json', (err, data) => {
            if (err) {
              console.error(err)
              return
            }
           // console.log(data)
            var obj = JSON.parse(data);
            console.log(obj)

            res.json(obj);
        })
     
      });

     
  app.post("/api/notes", function(req, res) {

    const uuid = uuidv1();
   
    const newNote = req.body;
 
    newNote.id = uuid;

   
    let db = readDb;

    db.push(newNote); 

 
    writeDb(db);

   
    res.json(db);
  });


  app.delete("/api/notes/:id", function(req, res) {
    
    const db = readDb;
    
    const deleteId = req.params.id;

    for (let i=0; i<db.length; i+=1 ) {
      if (db[i].id === deleteId) {
        
        db.splice(i,1);
       
        break;
      }






}