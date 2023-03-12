import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '~/src/store';
import {DroppableAreas, isDragging, IUiSlice} from './ui.models';

const UI_DEFAULT_STATE: IUiSlice = {
	isDragging: {
		dragging: false,
		droppableAreasIds: [],
	},
	isOver: undefined,
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState: UI_DEFAULT_STATE,
	reducers: {
		setIsDragging(state, action: PayloadAction<isDragging>) {
			state.isDragging = action.payload;
		},
		resetIsDragging(state) {
			state.isDragging = UI_DEFAULT_STATE.isDragging;
		},
		setIsOver(state, action: PayloadAction<DroppableAreas>) {
			state.isOver = action.payload;
		},
		resetIsOver(state) {
			state.isOver = UI_DEFAULT_STATE.isOver;
		},
	},
});

export const uiReducer = uiSlice.reducer;

const uiState = (state: RootState) => state.ui;

export const selectIsDragging = createSelector(uiState, ({isDragging}) => ({
	isDragging,
}));

export const selectIsOver = createSelector(uiState, ({isOver}) => ({
	isOver,
}));

export const {setIsDragging, resetIsDragging, setIsOver, resetIsOver} =
	uiSlice.actions;
