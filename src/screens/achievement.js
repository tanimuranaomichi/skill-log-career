// 実績入力画面
import React from 'react';
import './achievement.css'
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';

const Achievement = () => {
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h6">
                    実績入力
                </Typography>
                <Box m={2}>
                    <TextField
                        required
                        label="イベント名"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        required
                        label="成績"
                        fullWidth
                        variant="standard"
                    />
                </Box>
                <Box textAlign="right">
                    <Button variant="contained">登録</Button>
                </Box>
            </Paper >
        </Container >
    );
}
export default Achievement;