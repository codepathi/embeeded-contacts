import axios from "axios";
import { useEffect, useState } from "react";
const useGetLinkDataById = ({id}) => {
    const [chatInfo, setChatInfo] = useState();
    useEffect(()=>{
        axios.get(`/${id}`)
        .then((res)=>{
            setChatInfo(res.data);
        })
        .catch((err)=>console.log(err))
    }, [])
    
    return chatInfo;
}
 
export default useGetLinkDataById;