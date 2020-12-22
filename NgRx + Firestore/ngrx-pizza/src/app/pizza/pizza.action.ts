import { Action, UPDATE } from '@ngrx/store';
import { Pizza } from './pizza.reducer';

export const QUERY = '[Pizzas] query pizzas'

export const ADDED = '[Pizzas] added'
export const MODIFIED = '[Pizzas] modified'
export const REMOVED = '[Pizzas] removed'


export class Query implements Action {
  readonly type = QUERY;
  constructor(){}
}

export class Added implements Action{
  readonly type = ADDED;
  constructor(public payload: Pizza){}
}

export class Modified implements Action {
  readonly type = MODIFIED;
  constructor(public payload: Pizza) {}
}

export class Removed implements Action {
  readonly type = REMOVED;
  constructor(public payload: Pizza){}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    
  )
}



export class Create implements Action{
   readonly type = CREATE;
   constructor(public pizza: Pizza) {

   }
 }

 export class Update implements Action
 {
   readonly type = UPDATE;
   constructor(public id: string, public changes: Partial<Pizza>) {

   }
 }

 export class Delete implements Action {
   readonly type = DELETE;
   constructor(public id: string){}
 }

 export type PizzaActions
 = Create
 | Update
 | Delete;
