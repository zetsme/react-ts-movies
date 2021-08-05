import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #000;
  height: 80px;
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  padding: 0 10px;
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: #fff;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
