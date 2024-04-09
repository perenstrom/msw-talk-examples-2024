import {
  Container,
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Example1Page: NextPage<{}> = ({}) => {
  const [data, setData] = useState<Record<string, any> | null>(null);

  const fetchDataDefaultDelay = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/1`
    );
    const json = await response.json();
    setData(json);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/2`
    );
    const json = await response.json();
    setData(json);
  };

  return (
    <Container maxWidth="md">
      <Head>
        <title>Example 8 | MSW Talk 2024</title>
      </Head>
      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography variant={'h1'}>MSW examples</Typography>
            <Typography variant={'h2'}>Example 8, adding delays</Typography>
            <p>
              This will make a call to a placeholder backend
              (https://jsonplaceholder.typicode.com/), but msw will intercept
              and return a mocked response after a simulated delay.
            </p>
            <Stack direction="row" spacing={2}>
              <Button onClick={fetchDataDefaultDelay} variant="contained">
                Fetch data with default delay
              </Button>
              <Button onClick={fetchData} variant="contained">
                Fetch data with custom delay of 3 seconds
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
      {data && (
        <Box mt={6}>
          <Paper>
            <Box p={2}>
              <Typography variant={'h3'}>Server response</Typography>
              <pre style={{ textWrap: 'wrap' }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            </Box>
          </Paper>
        </Box>
      )}
    </Container>
  );
};

export default Example1Page;
