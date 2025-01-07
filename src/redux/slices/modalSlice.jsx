import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("modals")) || [];

const saveToLocalStorage = (state) => {
  localStorage.setItem("modals", JSON.stringify(state));
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    addModal: (state, action) => {
      const exists = state.find((modal) => modal.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
      saveToLocalStorage(state);
    },
    minimizeModal: (state, action) => {
      const modal = state.find((modal) => modal.id === action.payload);
      if (modal) {
        modal.isMinimized = true;
      }
      saveToLocalStorage(state);
    },
    restoreModal: (state, action) => {
      const modal = state.find((modal) => modal.id === action.payload);
      if (modal) {
        modal.isMinimized = false;
      }
      saveToLocalStorage(state);
    },
    closeModal: (state, action) => {
      const updatedState = state.filter((modal) => modal.id !== action.payload);
      saveToLocalStorage(updatedState);
      return updatedState;
    },
    expandModal: (state, action) => {
      const modal = state.find((modal) => modal.id === action.payload);
      if (modal) {
        modal.isFullscreen = !modal.isFullscreen;
      }
      saveToLocalStorage(state);
    },
    updatePosition: (state, action) => {
      const { id, position } = action.payload;
      const modal = state.find((modal) => modal.id === id);
      if (modal) {
        modal.position = position;
      }
      saveToLocalStorage(state);
    },
  },
});

export const {
  addModal,
  minimizeModal,
  restoreModal,
  closeModal,
  expandModal,
  updatePosition,
} = modalSlice.actions;

export default modalSlice.reducer;
