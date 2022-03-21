
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Layout from '../components/layout'

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
                                alignItems="center">
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>AA</Avatar>
                                <TextField
                                    disabled
                                    id="Name"
                                    label="Name"
                                    defaultValue="Ahmet"
                                />
                                <TextField
                                    disabled
                                    id="Surname"
                                    label="Surname"
                                    defaultValue="Ak"
                                />
                                <TextField
                                    disabled
                                    id="username"
                                    label="username"
                                    defaultValue="A.Random.username"
                                />

                            </Stack>
                        </Item>

                    </Stack>
                </Container>
            </React.Fragment>
        </Layout>
    );
}
