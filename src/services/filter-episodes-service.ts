import { ResponsePodcastModel } from "../models/response-podcast-model";
import { repositoryPodcast } from "../repositories/podCast-repository"
import { httpStatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (podCastName: string | undefined): Promise<ResponsePodcastModel> => {
  const queryParams = podCastName ? podCastName.split("?p=")[1] : undefined;
  const paramSearched = queryParams ? decodeURIComponent(queryParams) : undefined;
  let responsePodcastModel: ResponsePodcastModel = { statusCode: 0, body: [] };
  const data  = await repositoryPodcast(paramSearched);
  if(data.length > 0) {
    responsePodcastModel.statusCode = httpStatusCode.OK;
  } else {
    responsePodcastModel.statusCode = httpStatusCode.NO_CONTENT;
  }
  responsePodcastModel.body = data;
  return responsePodcastModel;
}