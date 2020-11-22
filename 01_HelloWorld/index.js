const express = require("express")

app = express()

app.get("/", (req, rsp) => {
	rsp.send("Hello world").status(200)
})

app.listen(3000, () => console.log("Listening on port 3000"))
