import { PORT, HOST, PROTO } from "./config";
import server from "./server"

server.listen(PORT, HOST, () => {
  console.log(`Server listening on ${PROTO}://${HOST}:${PORT}`);
})