import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
import Layout from '../components/layout'

export default function profile() {
  return (
    <Layout>
      <React.Fragment>
        <CssBaseline />
        <Container >
          <Stack spacing={2}>
            <Item>
              <Stack spacing={2} justifyContent="center"
                alignItems="center">
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />

              </Stack>
            </Item>

          </Stack>      </Container>
      </React.Fragment>
    </Layout>
  );
}
