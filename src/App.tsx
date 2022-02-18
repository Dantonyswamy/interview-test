import React, {useState, useEffect, useMemo} from 'react';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { requestKidsData } from './slice/kids';
import { requestAdultsData } from './slice/adults';
import { requestSeniorsData } from './slice/seniors';
import { RootState } from './state';
import { User } from './types/users';
import { Button, Input, Card, Heading, ListItem, ListHeader  } from './components';
import { BaseLayout, Container } from './layouts';


export const App = () => {  
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(80);
  const [combinedUsersList, setCombinedUsersList] = useState<User[]>([]);

  const dispatch = useAppDispatch();
  const kidsDataFromApi = useAppSelector((state: RootState) => state.kidsData);
  const adultsDataFromApi = useAppSelector((state: RootState) => state.adultsData);
  const seniorsDataFromApi = useAppSelector((state: RootState) => state.seniorsData);

  useEffect(() => {
     setCombinedUsersList(kidsDataFromApi.kids.concat(adultsDataFromApi.adults, seniorsDataFromApi.seniors));
  }, [kidsDataFromApi, adultsDataFromApi, seniorsDataFromApi]);
  
  const filteredUsersList = useMemo(() => {
    return combinedUsersList.filter(user => user.age >= minAge && user.age <= maxAge);
  }, [combinedUsersList, minAge, maxAge]);

  const retriveUsers =  async() => { 
    dispatch(requestKidsData());
    dispatch(requestAdultsData());
    dispatch(requestSeniorsData());
   ;
  }

  const changeMinAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinAge(Number(event.target.value));
  }
    const changeMaxAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAge(Number(event.target.value));
  }
  
  const usersList = filteredUsersList.map((user,i) => {
    return (    
        <ListItem key={i} name={user.name} age={user.age} />      
      
    );
  });


  return (
    <BaseLayout> 
      <Container>
         <Heading>Users</Heading> 
      <Card>        
          <Input required type="text" label="Min Age:" id="min-age" value={minAge} onChange={changeMinAge}/>
          <Input required type="text" label="Max Age:" id="min-age" value={maxAge} onChange={changeMaxAge} />
           <Button onClick={()=>retriveUsers()}>Retrive Users</Button> 
          
        </Card>
        </Container>  
        <Container>
         
      <Card>         
          <Input required type="text" id="max-age" placeholder='Search...' /> 
          <ListHeader />
          {usersList.sort((a, b) => {
            if(a.props.name === b.props.name) return b.props.age - a.props.age;
            return a.props.name.localeCompare(b.props.name);
          })}                
        
        </Card>
       </Container>  
       
        </BaseLayout> 
    
   
  );
}


