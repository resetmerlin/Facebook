const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { readdirSync } = require("fs");
// const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

//For the Route
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
// So this way is better and it's dynamic.

// app.use("/user", userRoutes);
// let allowed = ["http://localhost:3000", "some other link"];
//origin == localhost:3000 == frontend
// function options(req, res) {
//   let tmp;
//   let origin = req.header("origin");
//   if (allowed.indexOf(origin) > -1) {
//     tmp = {
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   } else {
//     tmp = {
//       origin: "stupid",
//     };
//   }
//   res(null, tmp);
// }
// app.use(cors(options));
// And this what it does this you have cors, but you allow every access to a server from anywhere.

//For the Database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("err connection occur", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is runnoing...${PORT}`);
});
