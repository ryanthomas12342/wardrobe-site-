const app = require("./app");
const dbConnect = require("./config/db");

require("dotenv").config();

dbConnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
