import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface todoSlice {
  todos: any[];
}

const initialState: todoSlice = {
  todos: [],
};

interface swapPayload {
  firstDivIndex: number;
  secondDivIndex: number;
}

// !! createAsyncThunk example:
export const fetchTodos = createAsyncThunk("todos/userId1", async () => {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then(({ data }) => data);

  return data;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    swapTodos: (state, action: PayloadAction<swapPayload>) => {
      const stateTemp = state.todos;
      const temp = stateTemp[action.payload.firstDivIndex];
      stateTemp[action.payload.firstDivIndex] =
        stateTemp[action.payload.secondDivIndex];
      stateTemp[action.payload.secondDivIndex] = temp;
      state.todos = stateTemp;
    },
  },

  // !! createAsyncThunk  example:
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state) => {
      console.log(state);
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { swapTodos } = todoSlice.actions;
export default todoSlice.reducer;
