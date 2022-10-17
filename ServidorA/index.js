const express = require("express");
const app = express();
const route = express.Router();
const routes = require("./api/routes");
const port = process.env.PORT || 3000;

app.use(express.json());

route.use("/api", routes);
app.use(route);

app.listen(port, () => {
    console.log("localhost:" + port);
})