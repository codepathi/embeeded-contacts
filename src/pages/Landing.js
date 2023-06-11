import Home from "../components/Home";
import Contact from "../components/contact-icons/contact-icons";
import Form from "../components/form/form";
import Navbar from "../components/navbar/Navbar";

const Landing = () => {
    const chatData = {
        name: "adf",
        whatsApp: 98123434,
        messenger: "asdfasd",
        email: "asdfasdf",
        contactNo: 12,
    }
    return ( 
    <>
    <Navbar/>
    <Home/>
    <Form/>
    <Contact chatData={chatData}/>
    </> );
}
 
export default Landing;<>
</>