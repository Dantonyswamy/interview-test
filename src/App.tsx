import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';

import { requestKidsData } from './slice/kids';
import { RootState } from './state';
// import styled from 'styled-components';

// const API_URL = 'http://localhost:8099'

export const App = () => {
  
  const dispatch = useAppDispatch();
  const kidsData = useAppSelector((state: RootState) => state.kidsData);

  return (
    <div className="App">
      <h1>Planned Test</h1>
      <div>
        <button type="button" onClick={()=>dispatch(requestKidsData())}>Retrieve Users</button>
      </div>
      <div>
        <h2>Users</h2>
        min: <input name="minAge" value="0" type="number" />
        max: <input name="maxAge" value="100" type="number" />
        <button type="button">Filter by age</button>
        {kidsData}
      </div>
    </div>
  );
}


