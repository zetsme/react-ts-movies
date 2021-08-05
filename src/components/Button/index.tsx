import { Wrapper } from './Button.styles';

const Button = ({ callback, text }: { text: string; callback: () => void }) => {
  return (
    <Wrapper type='button' onClick={callback}>
      {text}
    </Wrapper>
  );
};

export default Button;
