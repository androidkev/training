import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, mergeMap, catchError, delay } from 'rxjs/operators'

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import * as postActions from '../actions/post.actions';
export type Action = postActions.All;

@Injectable()
export class PostEffects {
  constructor(private actions: Actions, private db: AngularFireDatabase){}

  @Effect()
  getPost: Observable<Action> = this.actions.pipe(ofType(postActions.GET_POST),
                      map((action: postActions.GetPost) => action.payload),
                      mergeMap(payload => of(this.db.object(payload))),
                      map(Post => {
                        Post.pushKey = Post.$key;
                        return new postActions.GetPostSuccess(Post);
                      })
                      )

  @Effect()
  voteUpdate : Observable<Action> = this.actions.pipe(
    ofType(postActions.VOTE_UPDATE),
    map((action: postActions.VoteUpdate) => action.payload ),
    mergeMap(payload => of(this.db.object('posts/' + payload.post.pushKey).update({
      votes: payload.post.votes + payload.val
    }))),
    map(()=> new postActions.VoteSuccess()),
    catchError(err=> of (new postActions.VoteFail()));
  )


}
