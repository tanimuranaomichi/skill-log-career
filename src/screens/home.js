// グラフ画面
import React from 'react';
import './home.css'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import moment from 'moment';

const data = [
    { time: "2020-10-29T00:39:11.934Z", val: 7 },
    { time: "2020-10-29T00:32:39.686Z", val: 10 },
    { time: "2020-10-29T00:19:21.722Z", val: 14 },
    { time: "2020-10-29T00:59:30.532Z", val: 19 },
    { time: "2020-10-29T00:21:05.784Z", val: 23 },
    { time: "2020-10-29T00:27:09.031Z", val: 25 },
    { time: "2020-10-29T00:24:10.445Z", val: 15 },
    { time: "2020-10-29T00:52:54.226Z", val: 22 },
    { time: "2020-10-29T00:15:53.244Z", val: 9 },
    { time: "2020-10-29T00:35:21.302Z", val: 5 },
    { time: "2020-10-29T00:34:53.843Z", val: 23 },
    { time: "2020-10-29T00:41:40.703Z", val: 24 },
    { time: "2020-10-29T00:32:38.129Z", val: 19 },
    { time: "2020-10-29T00:58:48.600Z", val: 17 },
    { time: "2020-10-29T00:04:32.791Z", val: 11 },
    { time: "2020-10-29T00:25:51.704Z", val: 20 },
    { time: "2020-10-29T00:58:59.329Z", val: 24 },
    { time: "2020-10-29T00:05:34.037Z", val: 25 },
    { time: "2020-10-29T00:51:06.128Z", val: 13 },
    { time: "2020-10-29T00:37:17.627Z", val: 8 },
    { time: "2020-10-29T00:02:40.281Z", val: 9 },
    { time: "2020-10-29T00:32:17.279Z", val: 23 },
    { time: "2020-10-29T00:04:06.762Z", val: 7 },
    { time: "2020-10-29T00:22:15.742Z", val: 15 },
    { time: "2020-10-29T00:00:28.198Z", val: 12 },
    { time: "2020-10-29T00:47:42.282Z", val: 23 },
    { time: "2020-10-29T00:38:57.798Z", val: 19 },
    { time: "2020-10-29T00:07:01.130Z", val: 19 },
    { time: "2020-10-29T00:05:31.092Z", val: 8 },
    { time: "2020-10-29T00:47:26.021Z", val: 10 },
    { time: "2020-10-29T00:38:24.590Z", val: 25 },
    { time: "2020-10-29T00:13:53.737Z", val: 10 },
    { time: "2020-10-29T00:54:56.662Z", val: 7 },
    { time: "2020-10-29T00:56:27.843Z", val: 10 },
    { time: "2020-10-29T00:26:09.775Z", val: 18 },
    { time: "2020-10-29T00:03:32.874Z", val: 19 },
    { time: "2020-10-29T00:33:18.165Z", val: 24 },
    { time: "2020-10-29T00:12:22.762Z", val: 17 },
    { time: "2020-10-29T00:11:54.368Z", val: 18 },
    { time: "2020-10-29T00:01:57.869Z", val: 24 },
    { time: "2020-10-29T00:49:28.721Z", val: 24 },
    { time: "2020-10-29T00:36:31.733Z", val: 7 },
    { time: "2020-10-29T00:58:19.009Z", val: 18 },
    { time: "2020-10-29T00:00:55.483Z", val: 20 },
    { time: "2020-10-29T00:34:08.795Z", val: 16 },
    { time: "2020-10-29T00:30:27.200Z", val: 18 },
    { time: "2020-10-29T00:47:49.359Z", val: 16 },
    { time: "2020-10-29T00:43:31.766Z", val: 7 },
    { time: "2020-10-29T00:13:49.771Z", val: 12 },
    { time: "2020-10-29T00:53:27.715Z", val: 9 }
]

  const LineSample = () => {
    const convert = (data) => {
        const result = data.map((d) => {
            return {
                time: moment(d.time).format("YYYY-MM-DD HH:mm:ss"),
                val: d.val
            }
        })
        result.sort((a, b) => a.time < b.time ? -1 : 1)
        return result
    }
    return (
        <LineChart
            width={500}
            height={300}
            data={convert(data)}
            margin={{
                top: 30, right: 30, left: 20, bottom: 20,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="time"
                domain={["dataMin", "dataMax"]}
                tickFormatter={(t) => moment(t).format("HH:mm:ss")}
                label={{
                    value: "日時", offset: -5, position: "insideBottomRight"
                }}
            />
            < YAxis label={{ value: "スキル", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend verticalAlign="bottom" />
            <Line type="monotone" dataKey="val" name="ユーザ１" stroke="#8884d8" dot={false} />
        </LineChart>
    );
}
export default LineSample
