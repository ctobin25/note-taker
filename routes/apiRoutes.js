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

}