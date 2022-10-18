import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countriesSelected: [],
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
      addCountry: (state, action) => {
        state.countriesSelected.push(action.payload)
      },
      removeCountry: (state, action) => {
        const indexElement = state.countriesSelected.findIndex(x => x.id === action.payload)
        if(indexElement > -1){
          state.countriesSelected.splice(indexElement, 1);
        }
      },
    },
})

export const { addCountry, removeCountry } = countrySlice.actions

export default countrySlice.reducer