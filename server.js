const express = require('express');


const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});