import React from 'react';
import styled from 'styled-components';

interface ListItemProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string;
    age: number;
}

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #dadce0;
`;
export const HeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;  
    border-bottom: 1px solid #dadce0;
`;
export const ListTitle = styled.div`
    font-size: 20px;
  font-weight: bold;
  text-align: start;
  font-family: inherit;
 
`;
export const Content = styled.div`
font-size: 20px;
font-family: inherit;
margin-left: 15px;
`;


export const ListItem: React.FC<ListItemProps> = ({ name, age }) => {
  return (
      <Row>
          <CheckBox />
          <Content>{ name }</Content>
       <Content>{ age }</Content>
    </Row>
  );
}

export const ListHeader: React.FC = () => {
  return (
      <HeaderRow>        
          <ListTitle style={{marginLeft:'100px'}}>Name</ListTitle>
       <ListTitle>Age</ListTitle>
    </HeaderRow>
  );
}

