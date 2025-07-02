import fs from 'fs';
import path from 'path';
import { podCast } from '../models/podCast-model';

const podcastFilePath = path.join(__dirname, '../repositories/podcasts.json');

export const repositoryPodcast = async (): Promise<podCast[]> => {
  const data = fs.readFileSync(podcastFilePath, 'utf-8');
  return JSON.parse(data);
}