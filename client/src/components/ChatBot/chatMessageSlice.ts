import { createSlice } from '@reduxjs/toolkit';

interface Message {
  origin: string;
  text: string;
}

interface DiscussionState {
  value: Message[];
}

const initialState: DiscussionState = {
  value: [{ origin: 'bot', text: 'Hello, I am Fred. How can I help you?' }],
};

const discussionSlice = createSlice({
  name: 'discussion',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    }
  },
});

export const { add } = discussionSlice.actions
export default discussionSlice.reducer;


