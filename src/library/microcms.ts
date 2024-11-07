// SDK利用準備
import type { arrayOutputType } from "astro:schema";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// 型定義
export type ImageField = {
  url: string;
};

export type KeyVisual = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  content: string;
  image: ImageField;
  alt_text: string;
  order: string;
};
export type KeyVisualResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: KeyVisual[];
};

export type Voice = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  post: string;
  content: string;
  image: ImageField;
  alt_text: string;
  hp: string;
  twitter: string;
  facebook: string;
  instagram: string;
  excerpt: string;
  impression: string;
  point: string;
  recommendation: string;
  opposition: string;
  message: string;
  order: string;
};
export type VoiceResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Voice[];
};

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  sub_title: string;
  category: string;
  image: ImageField;
  alt_text: string;
  url: string;
  commitment: string;
  tools: string;
  director: string;
  writer: string;
  designer: string;
  coder: string;
  order: string;
};
export type WorkResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Work[];
};

// APIの呼び出し
export const getKeyVisuals = async (queries?: MicroCMSQueries) => {
  return await client.get<KeyVisualResponse>({ endpoint: "key-visual", queries });
};
export const getKeyVisualDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<KeyVisual>({
    endpoint: "key-visual",
    contentId,
    queries,
  });
};

export const getVoices = async (queries?: MicroCMSQueries) => {
  return await client.get<VoiceResponse>({ endpoint: "voice", queries });
};
export const getVoiceDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Voice>({
    endpoint: "voice",
    contentId,
    queries,
  });
};

export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorkResponse>({ endpoint: "works", queries });
};
export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Work>({
    endpoint: "works",
    contentId,
    queries,
  });
};
