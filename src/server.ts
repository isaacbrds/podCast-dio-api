import * as http from 'http';
import { getListOfPodcasts } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

  if(req.method === 'GET' ) {
    await getListOfPodcasts(req, res);
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const port  = process.env.PORT || 3333;
server.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});