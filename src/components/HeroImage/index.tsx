import { Wrapper, Content, Info } from './HeroImage.styles';
type Props = {
  image: string;
  title: string;
  text: string;
};
const HeroImage: React.FC<Props> = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Info>
          <h1>{title}</h1>
          <p>{text}</p>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default HeroImage;
