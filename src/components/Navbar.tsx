import React from 'react';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: "80px"
  background-color: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  font-family: Quicksand, arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const NavBar: React.FC = () => {
  return (
      <NavbarContainer> 
        <NavbarInnerContainer>             
               <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Logo</title>
    <desc>Created with Sketch.</desc>
    <g id="Admin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Logo" transform="translate(1.000000, 0.000000)">
            <rect id="Rectangle" fill="#0B223C" x="-1" y="0" width="60" height="60"></rect>
            <g id="Group" transform="translate(15.000000, 14.000000)">
                <path d="M18.7016589,12.5554222 C18.7016589,9.15805513 16.0662581,6.54879354 12.6846382,6.54879354 C10.2478605,6.54879354 8.05948735,7.87757033 7.01508222,9.60114668 L7.01508222,15.5096978 C8.05948735,17.282064 10.1975762,18.562051 12.6846382,18.562051 C16.0662581,18.562051 18.7016589,16.0020771 18.7016589,12.5554222 M25.5639587,12.5554222 C25.5639587,19.5468095 20.5918461,25.1596343 14.2263552,25.1596343 C11.1429213,25.1596343 8.20883175,23.781072 7.01508222,21.8115549 L7.01508222,32.6443966 L0.00293510116,32.6443966 L0.00293510116,0.492379262 L7.01508222,0.492379262 L7.01508222,3.34807941 C8.20883175,1.37856236 11.1429213,3.55271368e-15 14.2263552,3.55271368e-15 C20.5918461,3.55271368e-15 25.5639587,5.56403501 25.5639587,12.5554222" id="Fill-6" fill="#FFFFFF"></path>
                <ellipse id="Oval" fill="#FE7B6C" cx="30.455691" cy="20.6386598" rx="4.47834646" ry="4.46712795"></ellipse>
            </g>
        </g>
                  </g>
              </svg>
              <span style= {{marginLeft:'20px'}}>
                  Planned Test
                  </span>
          </NavbarInnerContainer>          
        </NavbarContainer>
  );
}



