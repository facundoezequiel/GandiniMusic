import React from "react";
import { HomeContainer } from "./styled";
import { default as NextLink } from "next/link";

function Home() {
    return (
        <HomeContainer>
            {/* LEFT ZONE */}
            <section className="leftZone" style={{
                backgroundImage: `url(${'/Images/Background.jpg'})`
            }}>
                {/* Logo Gandini Center */}
                <img src="Logos/LogoGandini.svg" alt="Logo Gandini" id="gandiniLogo" />
            </section>
            {/* RIGHT ZONE */}
            <section className="rightZone">
                {/* CirclesDecoration 
                <img id="CirclesDecoration" src="Decoration/Circles.svg" /> */}
                {/* Right Zone Container */}
                <div id="rightZoneContainer">
                    {/* Title Section */}
                    <div id="TitleSection">
                        {/* Title */}
                        <div id="Title">
                            <h1>CRISTIAN GANDINI <span>AR</span></h1>
                            <p>DJ / Musicalizador / Productor / Editor / Remixer / Radio Host / Ableton Teacher</p>
                        </div>
                        {/* Lenguaje Buttons */}
                        <div id="Lenguaje">
                            <NextLink href="/">
                                <a style={{
                                    fontWeight: `800`, color: `red`
                                }}>ESP</a>
                            </NextLink>
                            <NextLink href="/english">
                                <a style={{
                                    fontWeight: `400`, color: `#FFFFFF`
                                }}>ENG</a>
                            </NextLink>
                        </div>
                    </div>
                </div>
            </section>
        </HomeContainer>
    );
}

export default Home;