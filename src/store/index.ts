import { configureStore } from '@reduxjs/toolkit'
// import choicenReducer from './choicenSlice'

const store = configureStore({
  reducer: {
    // choicen: choicenReducer,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch