import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navbarElements = links.map((link, index) => {
    return <a key={index} href={link[index]}>{link}</a>
  })

  return (
    <nav>{navbarElements}</nav>
  );  
  }

export default NavBar;
