import React from "react";
import { HomeContainer } from "./styled";
import LinkButton from "../../components/linksButtons/index";
import ReactTyped from "react-typed";

function Home() {
  return (
    <HomeContainer>
      {/* LEFT ZONE */}
      <section className="leftZone">
        <div
          id="backgroundSection"
          style={{
            backgroundImage: `url(${"/Images/BackgroundRight.jpg"})`,
          }}
        >
          {/* Logo Gandini Center 
          <img
            src="Logos/LogoGandini.svg"
            alt="Logo Gandini"
            id="gandiniLogo"
            className="animate__animated animate__fadeIn"
          /> */}
        </div>
        <div id="newsSection">
          <ReactTyped
            strings={[
              "ME ENCUENTRO TRABAJANDO EN LA PRODUCCION DE MI SEGUNDO ALBUM DE ESTUDIO",
              "I AM WORKING ON THE PRODUCTION OF MY SECOND STUDIO ALBUM",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={3500}
            showCursor={false}
            loop
            smartBackspace
          />
        </div>
      </section>
      {/* RIGHT ZONE */}
      <section className="rightZone">
        <div id="rightZoneContainer">
          {/* Title Section */}
          <div id="TitleSection">
            {/* Title */}
            <div id="Title" className="animate__animated animate__fadeIn">
              <h1>
                CRISTIAN GANDINI <span>AR</span>
              </h1>
              <p>
                DJ / Musicalizador / Productor / Editor / Remixer / Radio Host /
                Ableton Teacher
              </p>
            </div>
          </div>
          {/* Links Section */}
          <div id="LinksSection">
            {/* Links Title */}
            <h1>ENCONTRAME EN:</h1>
            {/* Links Buttons */}
            <div id="ButtonsContainer">
              {/* You Tube */}
              <LinkButton
                link="https://www.youtube.com/channel/UCQjLzPu5Q39JeC7gS9Fp73Q"
                logo="Logos/YouTube.svg"
                alt="You Tube"
                platform="youtube"
              />
              {/* Twitch */}
              <LinkButton
                link="https://www.twitch.tv/gandinimusic"
                logo="Logos/Twitch.svg"
                alt="Twitch"
                platform="twitch"
              />
              {/* Spotify */}
              <LinkButton
                link="https://open.spotify.com/artist/2RvVdnTAoUfupe0ZGxhcLh?si=lxhb2aFuTb-VrpV5QoBPeQ&nd=1"
                logo="Logos/Spotify.svg"
                alt="Spotify"
                platform="spotify"
              />
              {/* Bandcamp */}
              <LinkButton
                link="https://gandini.bandcamp.com/releases"
                logo="Logos/Bandcamp.svg"
                alt="Bandcamp"
                platform="bandcamp"
              />
              {/* Soundcloud */}
              <LinkButton
                link="https://soundcloud.com/gandinimusic"
                logo="Logos/Soundcloud.svg"
                alt="Soundcloud"
                platform="soundcloud"
              />
              {/* M-XCLOUD */}
              <LinkButton
                link="https://www.mixcloud.com/gandinimusic/"
                logo="Logos/Mixcloud.svg"
                alt="M-XCLOUD"
                platform="mixcloud"
              />
              {/* Beatport */}
              <LinkButton
                link="https://www.beatport.com/artist/gandini/32917"
                logo="Logos/Beatport.svg"
                alt="Beatport"
                platform="beatport"
              />
            </div>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}

export default Home;
