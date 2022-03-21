import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
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
                  id="uesrname"
                  label="User Name"
                  defaultValue=""
                />
                <TextField
                  id="password"
                  label="Password"
                  defaultValue=""
                  type="password"
                />

              </Stack>
              <br />
              <ButtonGroup disableElevation variant="contained">
                <Button>Login</Button>
                <Button href="./register">Register</Button>
              </ButtonGroup>
            </Item>

          </Stack>      </Container>
      </React.Fragment>
    </Layout>
  );
}
