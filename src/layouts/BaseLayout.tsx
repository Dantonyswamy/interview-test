import styled from 'styled-components';

export const BaseLayout = styled.div`
  display:grid; 
  height:full; 
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `;