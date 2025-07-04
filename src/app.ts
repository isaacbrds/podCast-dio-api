 import * as http from 'http';
 import { getListOfPodcasts, getFilterEpisodes } from "./controllers/podcasts-controller";
 import { Routes } from './routes/routes';
 import { httpMethods } from './utils/http-methods';
 import { httpStatusCode } from './utils/http-status-code';
 import { contentType } from './utils/content-type';
 export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

  const url = request.url?.split('?')[0];


  if(request.method === httpMethods.GET && url === Routes.LIST_EPISODES) {
    await getListOfPodcasts(request, response);
  } else if(request.method === httpMethods.GET && url === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
  } else {
    response.writeHead(httpStatusCode.NOT_FOUND, {'Content-Type': contentType.JSON});
    response.end(JSON.stringify({ error: 'Not Found' }));
  }
}