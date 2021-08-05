import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';

const Thumb = ({
  image,
  movieId,
  clickable,
}: {
  image: string;
  movieId?: string;
  clickable: boolean;
}) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie thumb' />
        </Link>
      ) : (
        <Image src={image} alt='movie thumb' />
      )}
    </div>
  );
};

export default Thumb;
