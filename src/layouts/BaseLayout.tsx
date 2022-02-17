import styled from 'styled-components';

export const BaseLayout = styled.body`
  display:grid;
  background: #F4F6F8;
  height: 100%; 
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `;