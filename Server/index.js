const express = require("express");
const app = express();
const cors = require("cors");
const airouting = require("./Src/Routing/ai.rotes");


app.use(cors());
app.use(express.json());
app.use("/ai", airouting );

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`);
})