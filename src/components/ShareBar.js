import React, {useState, useEffect} from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import {
  isMobile
} from "react-device-detect";

import './ShareBar.css'

const ShareBar = () => {

    const [animation, setanimation] = useState("animated fadeIn slow delay-3s")

    useEffect(() => {
        console.log("check");
        if(isMobile){
            setanimation("");
        }
    }, [])

    return (
        <div className={`shareBar `+animation}>
            <div className="socialItem" >
                <OutboundLink href={`https://www.facebook.com/sharer.php?u=`+window.document.location.href} target="_new">
                    <i class="fab fa-facebook-f" style={{color: '#4064ad'}}/>
                </OutboundLink>
            </div>
            <div className="socialItem">
                <OutboundLink href={`https://www.linkedin.com/shareArticle?mini=true&url=`+window.document.location.href+`&title=`+window.document.title} target="_new">
               <i className="fab fa-linkedin"  style={{color: '#0077b5'}}/>
            </OutboundLink>
            </div>
            <div className="socialItem">
            <OutboundLink href={`https://twitter.com/intent/tweet?url=`+window.document.location.href+`&text=Check this out!&hashtags=strategica`} target="_new">
                <i className="fab fa-twitter" style={{color: '#1DA1F2'}}/>
            </OutboundLink>
            </div>
        </div>
    )
}

export default ShareBar
