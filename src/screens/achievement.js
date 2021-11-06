// 実績入力画面
import React, { useState } from 'react';
import './achievement.css'
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import { pushAchievement } from "../firebase"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

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

const Achievement = () => {
    const [date, setDate] = useState(new Date())
    const [eventName, setEventName] = useState()
    const [result, setResult] = useState()

    const handleChange = (newValue) => {
        setDate(newValue);
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h6">
                    実績入力
                </Typography>
                <Box m={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker
                            label="開催日程"
                            inputFormat="yyyy/MM/dd"
                            value={date}
                            onChange={handleChange}
                            renderInput={
                                (params) =>
                                    <TextField
                                        {...params}
                                        required
                                        fullWidth
                                        variant="standard"
                                    />
                            }
                        />
                    </LocalizationProvider>
                    <TextField
                        required
                        label="イベント名"
                        fullWidth
                        variant="standard"
                        value={eventName}
                        onChange={(e) => setEventName((eventName) => (eventName = e.target.value))}
                    />
                    <TextField
                        required
                        label="成績"
                        fullWidth
                        variant="standard"
                        value={result}
                        onChange={(e) => setResult((result) => (result = e.target.value))}
                    />
                </Box>
                <Box textAlign="right">
                    <Button
                        variant="contained"
                        onClick={() => pushAchievement({ date: getStringFromDate(date), eventName: eventName, result: result })}
                    >
                        登録
                    </Button>
                </Box>
            </Paper >
        </Container >
    );
}
export default Achievement;