import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This will take you back by one entry in the history stack
  };

  return (
    <button className='back' onClick={goBack}>Go Back</button>
  );
};

export default Back;
