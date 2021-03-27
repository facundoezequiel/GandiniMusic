import React from "react";
import { HomeContainer } from "./styled";
import LinkButton from "../../components/linksButtons/index";
import { default as NextLink } from "next/link";

function HomeEN() {
    return (
        <HomeContainer>
            {/* LEFT ZONE */}
            <section className="leftZone" style={{
                backgroundImage: `url(${'/Images/Background.jpg'})`
            }}>
                {/* Logo Gandini Center */}
                <img src="Logos/LogoGandini.svg" alt="Logo Gandini" id="gandiniLogo" className="animate__animated animate__fadeIn" />
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
                        <div id="Title" className="animate__animated animate__fadeIn">
                            <h1>CRISTIAN GANDINI <span>AR</span></h1>
                            <p>DJ / Musicalizer / Producer / Editor / Remixer / Radio Host / Ableton Teacher</p>
                        </div>
                        {/* Lenguaje Buttons */}
                        <div id="Lenguaje" className="animate__animated animate__fadeIn">
                            <NextLink href="/">
                                <a style={{
                                    fontWeight: `400`, color: `#FFFFFF`
                                }}>ESP</a>
                            </NextLink>
                            <NextLink href="/english">
                                <a style={{
                                    fontWeight: `800`, color: `red`
                                }}>ENG</a>
                            </NextLink>
                        </div>
                    </div>
                    {/* Links Section */}
                    <div id="LinksSection">
                        {/* Links Buttons */}
                        <LinkButton link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" />
                        <LinkButton link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" />
                        <LinkButton link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" />
                        <LinkButton link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" />
                        <LinkButton link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" />
                    </div>
                </div>
            </section>
        </HomeContainer>
    );
}

export default HomeEN;