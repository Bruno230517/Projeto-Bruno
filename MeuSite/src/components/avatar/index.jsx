import React, { useState, useEffect } from "react";
import AvatarImageLight from "../../assets/avatar-light.png"
import AvatarImageDark from "../../assets/avatar.png"
import "./avatar.css"

export const Avatar = () => {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };


    return (
        <div id="profile">
            <img  src={isDarkMode ? AvatarImageDark : AvatarImageLight }
                alt="foto de bruno correia, sorrindo com a esposa de camisa azul na praia"/>
            <p>@BrunoCorreia</p>
        </div>
    )
}