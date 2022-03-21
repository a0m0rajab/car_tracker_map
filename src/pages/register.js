import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Layout from '../components/layout';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function profile() {
    return (
        <Layout>
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <Stack spacing={2}>
                        <Item>
                            <Stack spacing={2} justifyContent="center"
                                alignItems="center">                                    <TextField
                                    id="Name"
                                    label="Name"
                                    defaultValue=""
                                />
                                <TextField
                                    id="Email"
                                    label="Email"
                                    defaultValue=""
                                />
                                <TextField
                                    id="password"
                                    label="password"
                                    defaultValue=""
                                    type="password"
                                />
                                <TextField
                                    id="passwordRepeat"
                                    label="repeat password"
                                    defaultValue=""
                                    type="password"
                                />
                                <ButtonGroup disableElevation variant="contained">
                                    <Button>register</Button>
                                    <Button href="./login">login</Button>
                                </ButtonGroup>
                            </Stack>
                        </Item>

                    </Stack>      </Container>
            </React.Fragment>
        </Layout>
    );
}
