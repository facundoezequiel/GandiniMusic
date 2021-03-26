import React from "react";
import { HomeContainer } from "./styled";
import { default as NextLink } from "next/link";

function Home() {
    return (
        <HomeContainer>
            <div className="leftDiv">
                <img src="Logos/LogoGandini.svg" alt="Logo Gandini"/>
            </div>
            <div className="rightDiv">
                <NextLink href="/">
                    <a>ESP</a>
                </NextLink>
                <NextLink href="/english">
                    <a>ENG</a>
                </NextLink>
            </div>
        </HomeContainer>
    );
}

export default Home;