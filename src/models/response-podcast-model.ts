import { podCast } from "./podCast-model";

export interface ResponsePodcastModel {
  statusCode: number;
  body: podCast[];
}