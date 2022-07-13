import produce, { Draft } from 'immer';
import { postsState, postActionTypes, postContants } from '../../types/post';
import { loadingStatus } from '../../types/trend';

const initialState: postsState = {
  posts: [],
  loading: loadingStatus.LOADING,
};

export const postReducer = produce((draft: Draft<postsState>, action: postActionTypes) => {
  switch (action.type) {
    case postContants.SET_POST:
      draft.posts = action.payload;
      draft.loading = loadingStatus.SUCCESS;
      break;

    case postContants.ERROR_POSTS:
      draft.loading = loadingStatus.ERROR;
      break;
    default:
      break;
  }
}, initialState);
