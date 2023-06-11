import { useEffect } from "react";
import Contact from "../components/contact-icons/contact-icons";
import useGetLinkDataById from "../hooks/useGetLinkDataById";
const Icon = () => {
    const lastSegment = window.location.pathname.split("/").pop();
    const chatInfo = useGetLinkDataById({id: lastSegment});
    return ( 
    <>
    {chatInfo && <Contact chatInfo={chatInfo}/>}
    </> );
}
 
export default Icon;