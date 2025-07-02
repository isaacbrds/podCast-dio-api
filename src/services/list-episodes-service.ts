import { repositoryPodcast } from "../repositories/podCast-repository";

export const serviceListEpisodes = async () => {

    const data = await repositoryPodcast();

    return data;
  }