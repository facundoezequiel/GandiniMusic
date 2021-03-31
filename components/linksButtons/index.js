import React from "react";
import { default as NextLink } from "next/link";
import { ImageLogo } from "./styled";

function LinkButton({
    link,
    logo,
    alt,
    platform,
    ...props
  }) {
    const buttonsStyle = {
        backgroundColor: "var(--black)",
        transition: "0.2s all",
        cursor: "pointer",
        display: "flex",
        margin: "2% 3% 1% 0%",
        padding: "0% 2.6% 0% 2.6%",
        borderRadius: "200px 200px 200px 200px",
        mozBorderRadius: "200px 200px 200px 200px",
        webkitBorderRadius: "200px 200px 200px 200px",
        border: "0px solid #000000",
    };
    return (
        <NextLink href={link}>
            <a target="blank" id="Button" style={buttonsStyle} id={platform}>
                <ImageLogo src={logo} alt={alt}/>
            </a>
        </NextLink>
    );
}

export default LinkButton;