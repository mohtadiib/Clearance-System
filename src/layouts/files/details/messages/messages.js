// noinspection BadExpressionStatementJS

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import MessageItem from "./message-item/message-item";
import axios from "axios";
import urlServer from "../../../../config/const";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function TimelineMessages() {
    const { id } = useParams()
    const [found,setFound] = useState({loading:false,data:[]})
    const [data,setData] = useState([])

    const getMessages = async () => {
        setFound({loading:true,data:[]})
        const body = {fileId: id};
        await axios.post(`${urlServer}customs/file/messages/`, body).then((res) => {
            console.log("messages data")
            console.log(res.data)
            setData(res.data)
        }).catch(err=>{
            setFound({loading:false,data:[]})
            console.log(err);
        });
    };

    useEffect(() => {
        getMessages()
    }, []);


    return (
        <Timeline>
            {data.map((message)=> <MessageItem message={message.name}/>)}
        </Timeline>
    );
}
