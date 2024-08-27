const server = require("./src/server");
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`App has launched successfully on port ${PORT}`);
});
