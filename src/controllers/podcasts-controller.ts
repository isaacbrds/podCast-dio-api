import{IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from "../services/list-episodes-service";
export const getListOfPodcasts = async (req: IncomingMessage,
  res: ServerResponse) => {
    const data = await serviceListEpisodes();
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
      data
    }))
}