import { Container, Box, Paper, Typography, Button } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Example1Page: NextPage<{}> = ({}) => {
  const [data, setData] = useState<Record<string, any> | null>(null);

  const fetchData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/9`
    );
    const json = await response.json();
    setData(json);
  };

  return (
    <Container maxWidth="md">
      <Head>
        <title>Example 5 | MSW Talk 2024</title>
      </Head>
      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography variant={'h1'}>MSW examples</Typography>
            <Typography variant={'h2'}>Example 5, changing status</Typography>
            <p>
              This will make a call to a placeholder backend
              (https://jsonplaceholder.typicode.com/), but msw will intercept
              and return a response with a specified status.
            </p>
            <Button onClick={fetchData} variant="contained">
              Fetch data
            </Button>
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
