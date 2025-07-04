import fs from 'fs';
import path from 'path';
import { podCast } from '../models/podCast-model';

const podcastFilePath = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (podCastName?: string): Promise<podCast[]> => {
  const language = 'utf-8';
  const data = fs.readFileSync(podcastFilePath, language);
  let jsonFile = JSON.parse(data);

  if (podCastName) {
    jsonFile = jsonFile.filter((p: podCast) => {
    return  p.podcastName === podCastName
    });
  };

  return jsonFile;
}