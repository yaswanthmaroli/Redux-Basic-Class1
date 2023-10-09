Redux Toolkit steps

## First step

1. npm install @reduxjs/toolkit
2. npm install react-redux

## Second Step

create Folder Redux

- on Inside Redux Create Store.js
  .... code is on store.js

## Third Step

- import store from store.js

* import provider from react redux

* wrap App by <Provide store = {store}> on index.js

## Fourth Step

- Create Folder Feature inside Here example is Counter Project so Create folder Counter if Its Login then Create folder Login

- import {createSlice} from '@reduxjs/toolkit

- First create a initial Value of the state.

* export const CounterSlice here is CounterSlice because example is counter here CounterSlice contain three parameter one is name: here name is 'counter , initialState, and last reducers.

  and last export increment and decrement export as const

  export CounterSlice.reducer as default

## Fifth Step

- import CounterSlice.reducer as CounterReducer from './features/counter/CounterSlice

  - inside store reducer store value counter:CounterReducer . here CounterReducer is stored in store therefore we can able to use CounterReducer everywhere on application.

  ## Sixth Step

  create a file counter.js for counter screen

  code is on counter.js ..
