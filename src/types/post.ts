import { loadingStatus } from './trend';

export interface postT {
  id: number;
  likes: number;
  img: string;
  channelName: string;
  author: string;
  datePost: number;
  name: string;
  content: string[];
  comments: number;
}

export enum postContants {
  SET_POST = 'SET_POST',
  FETCH_POST = 'FETCH_POST',
  ERROR_POSTS = 'ERROR_POST',
}

export interface postsState {
  posts: postT[];
  loading: loadingStatus;
}

interface setPostsType {
  type: postContants.SET_POST;
  payload: postT[];
}

interface errorPostsType {
  type: postContants.ERROR_POSTS;
}

interface fetchPost {
  type: postContants.FETCH_POST;
}

export type postActionTypes = setPostsType | fetchPost | errorPostsType;
