import { useEffect } from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const Contact = ({ chatData }) => {

    const [chatInfo, setChatInfo] = useState(chatData);

    
    const [closeClass, setCloseClass] = useState(false) 
    const [closeClassViber, setCloseClassViber] = useState(false)
    const [closeClassEmail, setCloseClassEmail] = useState(false)
    const [closeClassPhone, setCloseClassPhone] = useState(false)
    const [openMessagePopup, setOpenMessagePopup] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [overlay, setOverlay] = useState(false)

    // Setting dynamic starting point and gap for mobile and desktop as mobile icons are larger and higher seperation is required 
    const [starting, setStarting] = useState(60)
    const [gap, setGap] = useState(40)

    // OpenPopup function open popup for the ones opened and closes other popup


    //Opener for main
    const openPopups = () => {
        setOpenMessagePopup(!openMessagePopup)
        setOverlay(true)
    }

    //Opener for whatsapp
    const openPopup = () => {
        setCloseClass(!closeClass)
        setCloseClassViber(false)
        setCloseClassEmail(false)
        setCloseClassPhone(false)
    }

    //Opener for Messenger
    const openPopupViber = () => {
        setCloseClassViber(!closeClassViber)
        setCloseClassEmail(false)
        setCloseClass(false)
        setCloseClassPhone(false)
    }

    //Opener for Email
    const openPopupEmail = () => {
        setCloseClassEmail(!closeClassEmail)
        setCloseClassViber(false)
        setCloseClass(false)
        setCloseClassPhone(false)
    }

    //Opener for Phone
    const openPopupPhone = () => {
        setCloseClassEmail(false)
        setCloseClassViber(false)
        setCloseClass(false)
        setCloseClassPhone(!closeClassPhone)
    }


    // Find screen width to set mobile or desktop
    useEffect(()=>{
        const screenWidth = window.innerWidth
        if(screenWidth < 825){
            setIsMobile(true)
            setStarting(65)
            setGap(50)
        }
    }, [])

    return ( 
        <>

        {/* Overlay  */}
        <div className={!overlay && "hideOverlay"} style={{position: "fixed", top: "0px", left: "0px", height: "100vh", width: "100vw", background: "transparent", zIndex: "1900"}} onClick={()=> {setOpenMessagePopup(false); setOverlay(false)}
        }>

        </div>

        {/* Message box opener  */}
        <div className="fixedChat" style={{position: "fixed", "bottom" : `40px`, "right": "22px", zIndex: "2147483647"}}>
            <div className="container">
                {/* Do not animate close button  */}
                <div className={openMessagePopup ? 'openerMessage' : 'openerMessage chatWithUsAnimation'} >
                    <span className="chatWithUs">Chat with us<span className="wave">👋</span></span>
                    <img onClick={openPopups} className= {openMessagePopup ? 'openerLogo' : 'openerLogo openerLogoAnimation  openLogoOpen'} src={openMessagePopup ? '/images/whatsappClose.svg' : '/images/message.svg'} alt="restrox viber contact" /></div>
            </div>
        </div>

        {/* For whatsapp  */}
        <div className={openMessagePopup ? 'fixedChat openWhatsAppAnimation' : 'fixedChat closeWhatsapp closeWhatsAppAnimation'} style={{position: "fixed", "bottom" : `${starting+gap}px`, "right": "30px", width: "250px", zIndex: "2000"}}>
            <div className="container">
                <div className= {closeClass ? 'excludeOpener' : 'excludeOpener close'}>
                    <div className="closer">
                        <div className="textAndCloser">
                            <span> Whatsapp  </span>
                        </div>
                        <div className="closeText">
                           Scan & chatss
                        </div>
                    </div>
                <div className="image">

                <QRCode
                size={120}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={chatInfo.whatsApp}
                viewBox={`0 0 256 256`}
                />

                </div>
                <div className="instruction">
                    <p>Scan the qr code to send message to restrox's whatsapp. </p>
                    <p><span style={{color: 'blue', cursor: 'pointer', marginTop: '-15px'}} onClick = { () => window.open(`https://wa.me/${chatInfo.whatsApp}`, "_blank")}>Open WhatsApp</span></p>
                </div>
                </div>
                <div className="openerContainer">
                {/* Directly open messenger if user is on mobile  */}
                <div className='opener'><img onClick={!isMobile ? openPopup : () => window.open(`https://wa.me/${chatInfo.whatsApp}`, "_blank")
                    } className= "whatsappLogo" src='/images/whatsapp.png' alt="restrox whatsapp contact" /></div>
                </div>
            
            </div>
        </div>

        {/* For messenger, please note there may be viber written in place of messenger in classNames  */}
        <div className={openMessagePopup ? 'fixedChat openWhatsAppAnimation' : 'fixedChat closeWhatsapp'} style={{position: "fixed", "bottom" : `${starting+2*gap}px`, "right": "30px", zIndex: "2000"}} >
            <div className="container" >
                <div className= {closeClassViber ? 'excludeOpenerViber' : 'excludeOpenerViber closeViber'} >
                    <div className="closerViber">
                        <div className="textAndCloser">
                            <span> Messenger  </span>
                        </div>
                        <div className="closeText">
                           Scan & chat
                        </div>
                    </div>
                <div className="image">
                <QRCode
                size={120}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={chatInfo.messenger}
                viewBox={`0 0 256 256`}
                />
                </div>
                <div className="instruction">
                    <p>Scan the qr code to send message to restrox's messenger. </p>
                    <p><span style={{color: 'blue', cursor: 'pointer', marginTop: '-15px'}} onClick = { () => window.open(`https://m.me/${chatInfo.messenger}`, "_blank")}>Open Messenger</span></p>
                </div>
                </div>
                <div className="openerContainer">
                {/* Directly open messenger if user is on mobile  */}
                <div className='openerViber' ><img onClick={!isMobile ? openPopupViber : () => window.open(`https://m.me/${chatInfo.messenger}`, "_blank")} className= "whatsappLogo" src='/images/messenger.png' alt="restrox viber contact" /></div>
                </div>
            
            </div>
        </div>


        {/* For Email  */}
        <div className={openMessagePopup ? 'fixedChat openWhatsAppAnimation' : 'fixedChat closeWhatsapp'} style={{position: "fixed", "bottom" : `${starting+3*gap}px`, "right": "30px", zIndex: "2000"}} >
            <div className="container">
            <div className= {closeClassEmail ? 'excludeOpenerEmail' : 'excludeOpenerEmail closeViber'} >
                    <div className="closerViber">
                        <div className="textAndCloser">
                            <span> Email </span>
                        </div>
                        <div className="closeText">
                           Send email to us
                        </div>
                    </div>
                <div className="instruction">
                    <p>Email <br /> <span><a  style={{color: '#2633AE', cursor: 'pointer'}} href={`mailto:${chatInfo.email}`}>{chatInfo.email}</a></span></p>
                </div>
                </div>
            <div className="openerContainer">
                <div className='openerEmail'><img onClick={openPopupEmail} className= "whatsappLogo" src='/images/emailLogo.png' alt="restrox phone contact" /></div>
            </div>
            </div>
        </div>

        {/* For phone  */}
        <div className={openMessagePopup ? 'fixedChat openWhatsAppAnimation' : 'fixedChat closeWhatsapp'} style={{position: "fixed", "bottom" : `${starting+4*gap}px`, "right": "30px", zIndex: "2000"}} >
            <div className="container">
            <div className= {closeClassPhone ? 'excludeOpenerEmail' : 'excludeOpenerEmail closeViber'} >
                    <div className="closerViber">
                        <div className="textAndCloser">
                            <span> Phone  </span>
                        </div>
                        <div className="closeText">
                           Call us
                        </div>
                    </div>
                <div className="instruction">
                    {(<>
                    <p> <br /> <span><a  style={{color: 'blue', cursor: 'pointer', marginTop: '-15px'}} href={`tel:${chatInfo.contactNo}`}>{chatInfo.contactNo}</a></span></p>
                    </>)}
                
                </div>
                </div>
            <div className="openerContainer">
                <div className='openerPhone' onClick={openPopupPhone}>
                <img className= "whatsappLogo" src='/images/phone.png' alt="restrox phone contact" />
                    </div>
            </div>
            </div>
        </div>


        </>
     );
}
 
export default Contact;