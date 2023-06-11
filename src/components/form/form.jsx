
import usePostLinkData from "../../hooks/usePostLinkData";
import Popup from "../popup/popup";
import { useState } from "react";

const Form = () => {

    const [formData, setFormData] = useState({}) 
    const [iconId, setIconId] = useState("");
    
    const handleChange = (e)=>{
        setFormData((prev) => {
            return(
                {...prev, [e.target.name] : e.target.value}
            )
        })
    }

    const postData = usePostLinkData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const linkData = postData({formData});
        setIconId(linkData);
    }

    const [modalShow, setModalShow] = useState(false);
    return ( 
        <>
        <div className="form" id="form">
        <h1>Fill the form to get your link</h1> <br />
        <p>You are 1 step away from getting your own link. Just copy paste the link anywhere in your html file and get chat icon. Create as many as you like, no signup required. No card required, no payment required.</p>
        <form>
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" required onChange={handleChange}/>
        <label htmlFor="phone">Phone Number</label>
        <input type="phone" name="contactNo" required onChange={handleChange}/>
        <label htmlFor="messenger">Messenger</label>
        <input type="text" name="messenger" required onChange={handleChange}/>
        <label htmlFor="whatsapp">Whatsapp</label>
        <input type="text" name="whatsApp" required onChange={handleChange}/>
        <button onClick={(e)=>{setModalShow(true); handleSubmit(e);}} type="submit" className="learnMore">Create</button>

        </form>
        
        </div>
        <Popup show={modalShow}
        onHide={() => setModalShow(false)}
        iconId = {iconId}
        />
        </>
     );
}
 
export default Form;