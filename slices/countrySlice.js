import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countriesSelected: [{id:1},{id:2}],
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
      increment: (state) => {
        console.log('state increment: ', state)
      },
      decrement: (state) => {
        console.log('state decrement: ', state)
      },
      incrementByAmount: (state, action) => {
        console.log('state incrementByAmount: ', state)
        console.log('action incrementByAmount: ', action)
      },
    },
})

export const { increment, decrement, incrementByAmount } = countrySlice.actions

export default countrySlice.reducer