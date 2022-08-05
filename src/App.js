import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Friends } from './views/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import AutohideToast from "./components/AutohideToast";
import { useSelector, useDispatch } from "react-redux";
import { openToast, updateFriendList } from "./redux/actions";
import { useState } from "react";
import { manageMsgWs } from './utils/manageMsgWs'

function App() {
  const [clientWS , setClientWs] = useState(null)
  const currentUser = useSelector((state)=> state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    connect()
  }, []);
  const updateList = (list) => {
    dispatch(updateFriendList(list))
  }
  const connect = ()=> {
    const client = new W3CWebSocket('ws://127.0.0.1:8080');
    setClientWs(client)
    client.onopen = function () {
      console.log('WebSocket Client Connected');
      client.send(JSON.stringify({user: localStorage.getItem('currentUser')}))
    };
    client.onclose = function() {
      console.log('echo-protocol Client Closed');
      connect()
    };
    client.onmessage = function(message){
      console.log(currentUser)
      manageMsgWs(message, openNoti, updateList, currentUser.friends)
      //console.log(message);
    };
  }

  useEffect(()=>{
   if(clientWS) clientWS.onmessage = function(message){
      console.log(currentUser)
      manageMsgWs(message, openNoti, updateList, currentUser.friends)
      //console.log(message);
    };
  },[currentUser])
  useEffect(() => {
    if(currentUser && currentUser.id){
      clientWS.send(JSON.stringify({
        type:"INIT", user:{id: currentUser.id}
      }))}
  }, [currentUser.id])

  const openNoti = (data) => {
    console.log("entramos en open noti", data)
    dispatch(openToast(data))
  }
  
  return (
   <div>
     <AutohideToast/>
      <BrowserRouter>
    <Routes>
        <Route path="/friends/:id" element={<Friends />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
