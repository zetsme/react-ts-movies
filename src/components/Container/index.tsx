import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;
const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
