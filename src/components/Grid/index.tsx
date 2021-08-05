import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
const Wrapper = styled.div`
  h1 {
    font-size: 2rem;
  }
`;

const Grid = ({ header, children }: { header: string; children: React.ReactNode }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Grid;
