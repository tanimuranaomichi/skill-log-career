// アンケート画面
import React, {useState, Fragment} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, Paper } from '@mui/material';



export default function Questionnaire() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    
    <div>

    <Box textAlign="center"><h1>アンケート画面</h1></Box>
    <Container component="main" maxWidth="10px" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

      <h2>当てはまるものにチェックしてください。</h2>
      <br></br>
       <p1>Q1.ループや条件分岐を使ったプログラムを書いたことがありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q2.webサービス・アプリを開発したことがありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q3.自身が開発したwebサービス・アプリをインターネット上に公開したことがありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q4フレームワークを用いた開発経験がありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q5.GitHub にプログラムを公開したことがありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q6.Rubyなどのサーバーサイド言語を用いてwebサーバーを構築したことがありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q7.IT業界で長期インターンの参加経験はありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q8.web制作会社等での長期アルバイト経験はありますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q9.可読性、保守性を意識したコーディングを心がけていますか</p1>
       <Box textAlign="right"><Checkbox {...label} /></Box>
       <br></br>
       <p1>Q10.ハッカソン等のイベントに参加経験はありますか</p1><Box textAlign="right"><Checkbox {...label} /></Box>

        
       <Stack spacing={2} direction="row">
            <Button variant="contained">送信</Button>
          </Stack>

       </Paper>
    </Container >

    </div>

  );
}  



