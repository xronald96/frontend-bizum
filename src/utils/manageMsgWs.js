export const manageMsgWs = (msg, openToastFuc, updateList, list) =>{
    const dataToJson =  JSON.parse(msg.data);
    console.log(dataToJson)
    switch(dataToJson.type){
        case 'ONLINE_USER': {
            openToastFuc(`${dataToJson.user.name} ${dataToJson.user.surname} is connected`)
            let tmpList = [...list]
            console.log("prev", list)
            let tmpIndex =  tmpList.findIndex(it=>it.id===dataToJson.user.id)
            if(tmpIndex>=0) tmpList[tmpIndex].connected = 1
            console.log("current", tmpList)
            updateList(tmpList)
            return ;
        }
        default: 
            return;
    }
}