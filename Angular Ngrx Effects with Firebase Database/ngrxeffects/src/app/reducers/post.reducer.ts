import { Actions } from '@ngrx/effects';
import * as PostActions from '../actions/post.actions'
import { Post } from '../models/post.model';

export type Action = PostActions.All;

//Reducer Function
export function postReducer(state: Post, action: Action){
  switch(action.type){

    case PostActions.GET_POST:
      return{ ...state, loading: true};

    case PostActions.GET_POST_SUCCESS:
      return { ...state, ...action.payload }

    case PostActions.VOTE_UPDATE:
      return { ...state, ...action.payload, loading: true }

    case PostActions.VOTE_SUCCESS:
      return { ...state, loading: false };

    case PostActions.VOTE_FAIL:
      return { ...state, ...action.payload, loading: false }

    default:
      return state;

  }
}
