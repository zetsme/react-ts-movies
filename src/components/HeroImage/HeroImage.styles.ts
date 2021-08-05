import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.65) 100%),
    url(${({ image }: { image: string }) => image}), #000;
  background-size: cover;
  background-position: center;
  height: 500px;
  position: relative;
  animation: animateHeroImage 1s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  background-color: #ccc;
  margin: 0 auto 20px;
  padding: 15px;
  border-radius: 20px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const Info = styled.div`
  max-width: 600px;
  color: #fff;

  h1 {
    margin-bottom: 10px;
  }
`;
