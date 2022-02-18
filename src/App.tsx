import React, {useState, useEffect} from 'react';


import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { requestAdultsData } from './slice/adults';
import { RootState } from './state';
import { User } from './types/users';
import { Button, Input, Card, Heading, ListItem } from './components';
import { BaseLayout, Container } from './layouts';


export const App = () => {
  
  const [kids, setKids] = useState<User[]>([]);
  const [adults, setAdults] = useState<User[]>([]);

  const dispatch = useAppDispatch();
  const kidsDataFromApi = useAppSelector((state: RootState) => state.kidsData);
  const adultsDataFromApi = useAppSelector((state: RootState) => state.adultsData);
  useEffect(() => { 
    setKids(kidsDataFromApi.kids);
    setAdults(adultsDataFromApi.adults);
  }, [kidsDataFromApi, adultsDataFromApi]);
  


  const kidsList = kids.map((kid,i) => {
    return (    
        <ListItem key={i} name={kid.name} age={kid.age} />       
      
    );
  });
  
  const adultsList = adults.map((adult,i) => {
    return (    
        <ListItem key={i} name={adult.name} age={adult.age} />       
      
    );
  });


  return (  

      <BaseLayout> 
      <Container>
         <Heading>Users</Heading> 
      <Card>          
         
          <Input required type="text" label="Min Age:" id="min-age" defaultValue="20" />
          <Input required type="text" label="Max Age:" id="min-age" defaultValue="40" />
           <Button onClick={()=>dispatch(requestAdultsData())}>Retrive Users</Button> 
          
        </Card>
        </Container>  
        <Container>
         
      <Card>         
          <Input required type="text" id="max-age" placeholder='Search...' />          
          {adultsList.sort((a, b) => {
            if(a.props.name === b.props.name) return b.props.age - a.props.age;
            return a.props.name.localeCompare(b.props.name);
          })}
                
        
        </Card>
       </Container>  
       
        </BaseLayout> 
    
   
  );
}


