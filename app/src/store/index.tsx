import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {uiReducer} from './slices/ui/ui.slice';

export type Store = typeof store;
export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<typeof appReducer>;

export const appReducer = combineReducers({
  ui: uiReducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});


export const resetAppAction = () => (dispatch: AppDispatch) => {
  dispatch({ type: 'RESET_APP' });
};