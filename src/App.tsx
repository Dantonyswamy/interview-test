import React, {useState, useEffect} from 'react';


import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { RootState } from './state';
import { User } from './types/users';
// import styled from 'styled-components';

// const API_URL = 'http://localhost:8099'

export const App = () => {
  
  const [kids, setKids] = useState<User[]>([]);


  const dispatch = useAppDispatch();
  const kidsDataFromApi = useAppSelector((state: RootState) => state.kidsData);
  
  useEffect(() => { 
    setKids(kidsDataFromApi.kids);
  }, [kidsDataFromApi]);
  
  const kidsList = kids.map((kid,i) => {
    return (
      <div key={i}>
        <h1>{kid.name}</h1>
        <h2>{kid.age}</h2>
      </div>
    );
  });


  return (
    <div className="App">
      <h1>Planned Test</h1>
      <div>
        <button type="button" onClick={()=>dispatch(requestKidsData())}>Retrieve Users</button>
      </div>
      <div>
        <h2>Users</h2>
        min: <input name="minAge" defaultValue={0} type="number" />
        max: <input name="maxAge" defaultValue={100} type="number" />
        <button type="button">Filter by age</button>      
      </div>
       {kidsList}
    </div>
  );
}


