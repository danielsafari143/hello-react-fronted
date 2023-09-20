import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('get/fetchGreetings', async () => {
  try {
    const greeting = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await greeting.json();
    return data;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: {
      value: 0,
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greeting.value = action.payload;
      });
  },
});

export default greetingSlice.reducer;
