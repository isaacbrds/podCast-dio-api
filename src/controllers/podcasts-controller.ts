import{ IncomingMessage, ServerResponse }  from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { httpStatusCode } from "../utils/http-status-code";
import { contentType } from "../utils/content-type";
import { ResponsePodcastModel } from "../models/response-podcast-model";
export const getListOfPodcasts = async (req: IncomingMessage,
  res: ServerResponse) => {
    const content = await serviceListEpisodes();
    res.writeHead(httpStatusCode.OK, {'Content-Type': contentType.JSON});
    res.end(JSON.stringify({
      content
    }))
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

const content: ResponsePodcastModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, {'Content-Type': contentType.JSON});
  res.end(JSON.stringify({
    content
  }))
}