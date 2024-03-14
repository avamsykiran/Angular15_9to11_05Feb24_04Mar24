import { createReducer, on } from '@ngrx/store';
import { TxnsActions } from './txns.actions';

export const txnsFeatureKey = 'txns';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

