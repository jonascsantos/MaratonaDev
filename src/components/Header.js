import React from "react"

function Header(){
    const date = new Date();
    const hours = date.getHours();

    return (
        <header className="Headerbar">
            <h3>Hello! {hours}:{date.getMinutes()}! </h3>
        </header>
    );

}

export default Header