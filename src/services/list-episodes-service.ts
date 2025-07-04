import { ResponsePodcastModel } from "../models/response-podcast-model";
import { repositoryPodcast } from "../repositories/podCast-repository";
import { httpStatusCode } from "../utils/http-status-code";

export const serviceListEpisodes = async (): Promise<ResponsePodcastModel> => {
    let responsePodcastModel: ResponsePodcastModel = { statusCode: 0, body: [] };
    const data = await repositoryPodcast();
    if (data.length > 0) {
        responsePodcastModel.statusCode = httpStatusCode.OK;
    } else {
        responsePodcastModel.statusCode = httpStatusCode.NO_CONTENT;
    }
    responsePodcastModel.body = data;

    return responsePodcastModel;
  }