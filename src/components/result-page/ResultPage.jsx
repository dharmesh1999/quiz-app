import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';

const ResultPage = ({ name, score, handleLeaderboardButton }) => {
  return (
    <Container className='mt-4'>
      <Alert variant='success'>
        Congratulations, {name}! You scored {score} out of 10.
      </Alert>
      <div>
        <h3>Previous Quiz Results:</h3>
        <ul>
          {JSON.parse(localStorage.getItem('quizResults'))?.map(
            (result, index) =>
              result.name === name && (
                <li key={index}>
                  {result.name} - {result.score} out of 10 || (Date:{' '}
                  {result.date})
                </li>
              )
          )}
        </ul>
      </div>
      <Button onClick={handleLeaderboardButton}>Show LeaderBoard</Button>
    </Container>
  );
};

export default ResultPage;
