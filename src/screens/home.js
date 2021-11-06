// グラフ画面
import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select, Button } from '@mui/material';
import './home.css'
import { database } from '../firebase';

const Home = () => {
    const [enterPrise, setEnterPrise] = useState([])
    const [select, setSelect] = useState([])
    const [searchResult, setSearchResult] = useState([])

    const search = () => {
        const searchword = "Enterprise/" + select;
        console.log(searchword);
        database.ref(searchword).orderByKey().limitToLast(10).on("value", (snapshot) => {
            const result = snapshot.val()
            if (result === null) return
            const entries = Object.entries(result)
            const newResult = entries.map((data) => {
                const [key, message] = data
                return { key, ...message }
            })
            console.log(newResult)
            setSearchResult(newResult)
        })
    }

    useEffect(() => {
        database.ref("Enterprise").orderByKey().limitToLast(10).on("value", (snapshot) => {
            const EnterPrise = snapshot.val()
            if (EnterPrise === null) return
            const entries = Object.entries(EnterPrise)
            const newEnterPrise = entries.map((data) => {
                const [key, message] = data
                return { key, ...message }
            })
            console.log(newEnterPrise)
            setEnterPrise(newEnterPrise)
        })
    }, [])

    const handleChange = (event) => {
        setSelect(event.target.value);
        console.log(select)
    };


    return (
        <div>
            <h1>グラフ</h1>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">select enterPrise</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={select}
                    onChange={handleChange}
                    autoWidth
                    label="select enterprise"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {enterPrise.map((e) => (
                        <MenuItem value={e.key} key={e.key}>{e.key}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="outlined" onClick={() => { search() }}>button</Button>
            {searchResult.map((s) => (
                <div key={s.key}>{s.name}</div>
            ))}
        </div>
    );
}

export default Home;