import React, {useState, useEffect} from 'react';


import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { RootState } from './state';
import { User } from './types/users';
import { Button, Input, Card, Header, Heading, Container } from './components';
import { BaseLayout } from './layouts';

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
    
   <div className='App'>
      <BaseLayout> 
      <Container>
      <Card>
          <Header>
          <Heading>Users</Heading> 
          <Input required type="text" label="Min Age:" id="min-age" defaultValue="20" />
           <Input required type="text" id="max-age" placeholder='Search...' />
           <Button onClick={()=>dispatch(requestKidsData())}>Retrive Users</Button> 
          </Header>
        </Card>
        </Container>  
        <Container>
      <Card>
          <Header>
          <Heading>Users</Heading> 
          <Input required type="text" label="Min Age:" id="min-age" defaultValue="20" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
            <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
              <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
               <Input required type="text" label="Max Age:" id="max-age" defaultValue="50" />
           <Button onClick={()=>dispatch(requestKidsData())}>Retrive Users</Button> 
          </Header>
        </Card>
       </Container>  
        {kidsList}
        </BaseLayout> 
     </div>
   
  );
}


