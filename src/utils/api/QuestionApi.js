import axios from 'axios';

const fetchQuestion = async () => {
  const headers = {
    'Content-Type': 'application/json'
  };
  const res = await axios.get(
    'https://gist.githubusercontent.com/cmota/f7919cd962a061126effb2d7118bec72/raw/questions.json',
    { headers }
  );

  return res.data.slice(0, 3);
};

export default fetchQuestion;
