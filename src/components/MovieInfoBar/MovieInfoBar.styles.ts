import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: #333;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;

  .column {
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc;
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;
    column-gap: 20px;
  }
`;
