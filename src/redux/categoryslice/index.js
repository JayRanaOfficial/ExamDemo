import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchCategory} from '../categoryAPI';

const categoryslice = createSlice({
  name: 'category',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      console.log('action.payload', action.payload);
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default categoryslice.reducer;
