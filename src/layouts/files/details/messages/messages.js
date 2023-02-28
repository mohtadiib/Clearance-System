// noinspection BadExpressionStatementJS,JSIgnoredPromiseFromCall

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import MessageItem from "./message-item/message-item";
import axios from "axios";
import urlServer from "../../../../config/const";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import SearchOffIcon from '@mui/icons-material/SearchOff';

export default function TimelineMessages() {
    const { id } = useParams()
    const [found,setFound] = useState({loading:false,data:[]})

    const getMessages = async () => {
        setFound({loading:true,data:[]})
        const body = {fileId: id};
        await axios.post(`${urlServer}customs/file/messages/`, body).then((res) => {
            console.log("messages data")
            console.log(res.data)
            setFound({loading:false,data:res.data})
        }).catch(err=>{
            setFound({loading:false,data:[]})
            console.log(err);
        });
    };

    useEffect(() => {
        getMessages()
    }, []);


    return (
        <div className="scrollable-messages">
            <div style={{direction:"rtl"}}>
                {
                    found.data.length?
                        <div>
                            <Timeline>
                                {found.data.map((message)=> <div key={message.id}><MessageItem message={message.name}/></div>)}
                            </Timeline>
                        </div>
                        :
                        <div className="center">
                            <SearchOffIcon fontSize="large"/>
                            <div>
                                لا يوجد تنبيهات
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}
