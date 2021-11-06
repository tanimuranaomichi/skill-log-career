import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem } from '@mui/material';
import { auth } from "../firebase"

const getStringFromDate = (date) => {
    let year_str = date.getFullYear();
    let month_str = 1 + date.getMonth();
    let day_str = date.getDate();

    let format_str = 'YYYY-MM-DD';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);

    return format_str;
}

const grades = [
    {
        value: 'B1',
        label: '大学1年',
    },
    {
        value: 'B2',
        label: '大学2年',
    },
    {
        value: 'B3',
        label: '大学3年',
    },
    {
        value: 'B4',
        label: '大学4年'
    },
];

export default function SignUp() {
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [grade, setGrade] = React.useState('B1');
    const registrationDate = new Date();

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="姓"
                                name="lastName"
                                autoComplete="family-name"
                                autoFocus
                                onChange={(e) => setLastName((lastName) => (lastName = e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="名"
                                onChange={(e) => setFirstName((firstName) => (firstName = e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="メールアドレス"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail((email) => (email = e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="パスワード"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                onChange={(e) => setPassword((password) => (password = e.target.value))}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-select-currency"
                                select
                                label="Select"
                                value={grade}
                                onChange={(e) => setGrade((grade) => (grade = e.target.value))}
                            >
                                {grades.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={(e) => {
                            e.preventDefault();
                            auth.createUserWithEmailAndPassword(email, password)
                        }}
                    >
                        Sign Up
                    </Button>
                    <Box textAlign="right">
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Box>

                </Box>
            </Box>
        </Container >
    );
}