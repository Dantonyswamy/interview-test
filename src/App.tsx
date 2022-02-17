import React, {useState, useEffect} from 'react';


import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { RootState } from './state';
import { User } from './types/users';
import { Button, Input } from './components';
import { BaseLayout } from './layouts';

// import styled from 'styled-components';

// const API_URL = 'http://localhost:8099'

export const App = () => {
  
  const [kids, setKids] = useState<User[]>([]);
//   const Button = styled.button`
//   color: white;
//   background-color: #52A27E;
//   font-size: 0.75em;
//   margin: 1em;
//   padding: 0.5em 1em;
//   cursor: pointer;
//   border: 2px solid;
//   border-radius: 20px;
// `;
  
//   const Wrapper = styled.section`
//   padding: 4em;
//   background: #F4F6F8;
//   height: 100vh;
// `;
  
//   const Input = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: black;
//   text-color: black;
//   background: white;
//   border: 2px solid #b0b4ba;
//   border-radius: 5px;
// `;

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
    <BaseLayout>
    <div className="App">
      <h1>Planned Test</h1>
      <div>
        <button type="button" onClick={()=>dispatch(requestKidsData())}>Retrieve Users</button>
      </div>
      <div>
        <h2>Users</h2>
        min: <input name="minAge" defaultValue={0} type="number" />
        max: <input name="maxAge" defaultValue={100} type="number" />
          <Button>Normal Button</Button>  
         <Input required type="text" label="First Name" id="first-name" defaultValue="Antony" />
      </div>
       {kidsList}
    </div>
    </BaseLayout>
  );
}


