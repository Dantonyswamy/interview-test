import React, {useState, useEffect} from 'react';


import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { RootState } from './state';
import { User } from './types/users';
import { Button, Input, Card, Header, Heading, ListItem } from './components';
import { BaseLayout, Container } from './layouts';

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
        <ListItem key={i} name={kid.name} age={kid.age} />       
      
    );
  });


  return (  

      <BaseLayout> 
      <Container>
         <Heading>Users</Heading> 
      <Card>          
         
          <Input required type="text" label="Min Age:" id="min-age" defaultValue="20" />
           <Input required type="text" id="max-age" placeholder='Search...' />
           <Button onClick={()=>dispatch(requestKidsData())}>Retrive Users</Button> 
          
        </Card>
        </Container>  
        <Container>
         
      <Card>         
          <Input required type="text" id="max-age" placeholder='Search...' />          
            {kidsList}          
        
        </Card>
       </Container>  
       
        </BaseLayout> 
    
   
  );
}


