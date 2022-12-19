import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type Item = {
  name: string,
  id: number,
  guid: string,
}

type MainType = {
  city: Item,
  club: Item,
  zone: Item,
  qual: Item,
}

type choicenState = {
  main: MainType,
}

const initialState: choicenState = {
  main: {
    city: {name: 'Не выбрано', id: 0, guid: ''},
    club: {name: 'Не выбрано', id: 0, guid: ''},
    zone: {name: 'Любая', id: 0, guid: ''},
    qual: {name: 'Любая', id: 0, guid: ''},
  }
}

const choicenSlice = createSlice({
  name: 'choicen',
  initialState,
  reducers: {
    updateChoicenMain(state, action: PayloadAction<MainType>) {
      state.main = action.payload
    },
  }
})

export const {
  updateChoicenMain,
} = choicenSlice.actions
export default choicenSlice.reducer