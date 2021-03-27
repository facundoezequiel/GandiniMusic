import React from "react";
import { HomeContainer } from "./styled";
import LinkButton from "../../components/linksButtons/index";
import { default as NextLink } from "next/link";

function Home() {
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
                            <p>DJ / Musicalizador / Productor / Editor / Remixer / Radio Host / Ableton Teacher</p>
                        </div>
                        {/* Lenguaje Buttons */}
                        <div id="Lenguaje" className="animate__animated animate__fadeIn">
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
                    {/* Links Section */}
                    <div id="LinksSection">
                        {/* Links Buttons */}
                        {/* Spotify */}
                        <LinkButton 
                            link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1" 
                            logo="Logos/Spotify.svg"
                            alt="Spotify"
                        />
                        {/* You Tube */}
                        <LinkButton 
                            link="https://www.youtube.com/channel/UCQjLzPu5Q39JeC7gS9Fp73Q" 
                            logo="Logos/Spotify.svg"
                            alt="You Tube"
                        />
                        {/* Twitch */}
                        <LinkButton 
                            link="https://www.twitch.tv/gandinimusic" 
                            logo="Logos/Spotify.svg"
                            alt="Twitch"
                        />
                        {/* Soundcloud */}
                        <LinkButton 
                            link="https://soundcloud.com/gandinimusic" 
                            logo="Logos/Spotify.svg"
                            alt="Soundcloud"
                        />
                        {/* M-XCLOUD */}
                        <LinkButton 
                            link="https://www.mixcloud.com/gandinimusic/" 
                            logo="Logos/Spotify.svg"
                            alt="M-XCLOUD"
                        />
                        {/* Bandcamp */}
                        <LinkButton 
                            link="https://gandini.bandcamp.com/releases" 
                            logo="Logos/Spotify.svg"
                            alt="Bandcamp"
                        />
                        {/* Beatport */}
                        <LinkButton 
                            link="https://www.beatport.com/artist/gandini/32917" 
                            logo="Logos/Spotify.svg"
                            alt="Beatport"
                        />
                    </div>
                </div>
            </section>
        </HomeContainer>
    );
}

export default Home;