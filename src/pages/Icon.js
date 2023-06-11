import { useEffect } from "react";
import Contact from "../components/contact-icons/contact-icons";
import useGetLinkDataById from "../hooks/useGetLinkDataById";
const Icon = () => {
    const lastSegment = window.location.pathname.split("/").pop();
    const chatData = useGetLinkDataById({id: lastSegment});
    return ( 
    <>
    {chatData && <Contact chatData={chatData}/>}
    </> );
}
 
export default Icon;