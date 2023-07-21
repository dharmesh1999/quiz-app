import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import fetchLeaderboard from '../../utils/FetchLeaderboard';

const Leaderboard = ({ handleRestartButton }) => {
  const leaderboardData = fetchLeaderboard();
  return (
    <Container className='mt-4'>
      <h2>Leaderboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant='warning' onClick={handleRestartButton}>
        Restart Quiz
      </Button>
    </Container>
  );
};

export default Leaderboard;
