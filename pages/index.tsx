import { Container, Box, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <Container maxWidth="md">
      <Head>
        <title>MSW Talk 2024</title>
      </Head>
      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography variant={'h1'}>MSW examples</Typography>
            <ul>
              <li>
                <Link href="/example1">Example 1 – Real data</Link>
              </li>
              <li>
                <Link href="/example2">
                  Example 2 – Mock an entire response
                </Link>
              </li>
              <li>
                <Link href="/example3">
                  Example 3 – Mock an entire response, based on parameters
                </Link>
              </li>
              <li>
                <Link href="/example4">
                  Example 4 – Mock an entire response, and modify headers
                </Link>
              </li>
              <li>
                <Link href="/example5">Example 5 – Mock a non ok status</Link>
              </li>
              <li>
                <Link href="/example6">Example 6 – Mock a network error</Link>
              </li>
            </ul>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default IndexPage;
