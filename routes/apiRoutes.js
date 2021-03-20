const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {
    console.log("hit")
    app.get("/api/notes", function (req, res) {
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


    app.post("/api/notes", function (req, res) {

        const uuid = uuidv4();
        // console.log(uuid)

        const newNote = req.body;
        

        newNote.id = uuid;
         console.log(newNote)

        fs.readFile('db/db.json', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            var dbNotes = JSON.parse(data);
            console.log(dbNotes)

            dbNotes.push(newNote)
            console.log(dbNotes)
            var myJSON = JSON.stringify(dbNotes);

            fs.writeFile("db/db.json", myJSON, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");

                res.json(dbNotes);
            }); 



            
        })

        // let db = readDb;

        // db.push(newNote);


        // writeDb(db);


        // res.json(db);
    });


    // app.delete("/api/notes/:id", function (req, res) {

    //     const db = readDb;

    //     const deleteId = req.params.id;

    //     for (let i = 0; i < db.length; i += 1) {
    //         if (db[i].id === deleteId) {

    //             db.splice(i, 1);

    //             break;
    //         }






        }