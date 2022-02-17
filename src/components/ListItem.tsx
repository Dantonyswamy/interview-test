import React from 'react';
import styled from 'styled-components';

interface ListItemProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string;
    age: number;
}

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #dadce0;
`;

const Content = styled.div`
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

