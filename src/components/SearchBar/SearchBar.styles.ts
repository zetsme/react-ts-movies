import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #3e3e3e;
  padding: 20px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fff;
  border-radius: 20px;
  padding-right: 20px;
  margin: 0 auto;
  width: max(50%, 250px);
  transition: all 0.3s;
  :focus-within {
    box-shadow: 0px 0px 4px 4px darkgrey;
  }
  input {
    overflow: hidden;
    flex: 1;
    border: none;
    font-size: 1.2rem;
    :focus {
      outline: none;
    }
  }
  img {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
`;
