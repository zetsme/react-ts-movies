import styled from 'styled-components';

export const Wrapper = styled.button`
  display: block;
  width: max(25%, 200px);
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  background-color: #000;
  height: 60px;
  margin: 20px auto;
  font-size: 1.5rem;
  transition: all 0.3s;
  :hover {
    box-shadow: 6px 6px 7px 2px grey;
  }
`;
