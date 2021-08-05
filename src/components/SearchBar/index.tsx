import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { Wrapper, Form } from './SearchBar.styles';
const SearchBar = ({
  setSearchTerm,
}: {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 1000);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Form>
        <img src='./img/search.svg' alt='search icon' />
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type='text'
          placeholder='Search Movie'
        />
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
