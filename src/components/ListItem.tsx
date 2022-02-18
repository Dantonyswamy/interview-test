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
  flex-direction: row;
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
      <ListTitle style={{ marginLeft: '100px' }}>Name
      <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">   
    <title>sort-arrows</title>
    <desc>Created with Sketch.</desc>
    <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="sort-arrows" transform="translate(-6.000000, -6.000000)">
            <g id="Group-14-Copy-2">
                <g id="Group-17-Copy-5">
                    <g id="Group-58">
                        <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                        <g id="Group-17" transform="translate(6.000000, 6.000000)" fill="#697B93">
                            <polygon id="Path-2" points="3.10862447e-15 7.5 12 7.5 6 12"></polygon>
                            <polygon id="Path-2-Copy-2" transform="translate(6.000000, 2.250000) scale(1, -1) translate(-6.000000, -2.250000) " points="3.10862447e-15 0 12 0 6 4.5"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
      </ListTitle>
      <ListTitle>
        Age
         <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">   
    <title>sort-arrows</title>
    <desc>Created with Sketch.</desc>
    <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="sort-arrows" transform="translate(-6.000000, -6.000000)">
            <g id="Group-14-Copy-2">
                <g id="Group-17-Copy-5">
                    <g id="Group-58">
                        <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                        <g id="Group-17" transform="translate(6.000000, 6.000000)" fill="#697B93">
                            <polygon id="Path-2" points="3.10862447e-15 7.5 12 7.5 6 12"></polygon>
                            <polygon id="Path-2-Copy-2" transform="translate(6.000000, 2.250000) scale(1, -1) translate(-6.000000, -2.250000) " points="3.10862447e-15 0 12 0 6 4.5"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
       </ListTitle>
    </HeaderRow>
  );
}

