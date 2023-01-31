import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { HomeContainer } from "./styled";
import LinkButton from "../../components/linksButtons/index";
import MediaPlayer from "../../components/mediaPlayer/index";
{
  /* import ReactTyped from "react-typed"; */
}
import Ticker from "react-ticker";
import { default as NextLink } from "next/link";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <HomeContainer>
      <Helmet></Helmet>
      {/* LEFT ZONE */}
      <section className="leftZone">
        <div
          id="backgroundSection"
          style={{
            backgroundImage: `url(${"/Images/BackgroundLeftOutsiderColor.jpg"})`,
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
        {/*
        <div id="newsSection">
          <Ticker>
            {({ index }) => (
              <>
                <p>
                  A LA VENTA AHORA! EL NUEVO ALBUM DE GANDINI "OUTSIDER"
                  DISPONIBLE EN TODAS LAS PLATAFORMAS DIGITALES
                </p>
                <p>
                  OUT NOW! GANDINI'S NEW ALBUM "OUTSIDER" IN ALL DIGITAL STORES
                </p>
              </>
            )}
          </Ticker>
          <ReactTyped
            strings={[
              "ME ENCUENTRO TRABAJANDO EN LA PRODUCCIÓN DE MI SEGUNDO ÁLBUM DE ESTUDIO",
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
      */}
      </section>
      {/* RIGHT ZONE */}
      <section
        className="rightZone"
        style={{
          backgroundImage: `url(${"/Images/BackgroundRight.png"})`,
        }}
      >
        <div id="rightZoneContainer">
          {/* Title Section */}
          <div id="TitleSection">
            {/* Profile Image */}
            <div id="profileImage">
              <img src="Images/Profile.png" />
            </div>
            {/* Title */}
            <div id="Title" className="animate__animated animate__fadeIn">
              <h1>
                CRISTIAN GANDINI <span>AR</span>
              </h1>
              <p>DJ / Music Producer / Editor / Ableton Teacher</p>
              {/* Social Media Desktop*/}
              <div id="socialMediaContainer">
                {/* Instagram */}
                <NextLink href="https://www.instagram.com/gandinimusic/">
                  <a target="blank" id="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </NextLink>
                {/* Facebook */}
                <NextLink href="https://www.facebook.com/gandinimusic">
                  <a target="blank" id="facebook">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </NextLink>
                {/* Twitter */}
                <NextLink href="https://twitter.com/gandinimusic">
                  <a target="blank" id="twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </NextLink>
                {/* WhatsApp */}
                <NextLink href="https://api.whatsapp.com/send?phone=5491141787425">
                  <a target="blank" id="whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </NextLink>
                {/* Correo */}
                <NextLink href="mailto:gandinimusic@gmail.com">
                  <a target="_self" id="mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
          {/* Social Media Mobile*/}
          <div id="socialMediaMobileContainer">
            {/* Instagram */}
            <NextLink href="https://www.instagram.com/gandinimusic/">
              <a target="blank" id="instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </NextLink>
            {/* Facebook */}
            <NextLink href="https://www.facebook.com/gandinimusic">
              <a target="blank" id="facebook">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </NextLink>
            {/* Twitter */}
            <NextLink href="https://twitter.com/gandinimusic">
              <a target="blank" id="twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </NextLink>
            {/* WhatsApp */}
            <NextLink href="https://api.whatsapp.com/send?phone=5491141787425">
              <a target="blank" id="whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </NextLink>
            {/* Correo */}
            <NextLink href="mailto:gandinimusic@gmail.com">
              <a target="_self" id="mail">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </NextLink>
          </div>
          {/* Player & Flyer Section */}
          <div id="playerFlyerContainer">
            <div id="playerContainer">
              {/* YouTube Player */}
              <MediaPlayer link="https://youtu.be/KNkMdkgu76g" />
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
                link="https://gandini.bandcamp.com"
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
              {/* Apple Music */}
              <LinkButton
                link="https://music.apple.com/ar/artist/gandini/212330146"
                logo="Logos/AppleMusic.svg"
                alt="Apple Music"
                platform="applemusic"
              />
              {/* You Tube Music */}
              <LinkButton
                link="https://music.youtube.com/channel/UCEFYmqTkEBfXmPf1qb750xg"
                logo="Logos/YouTubeMusic.svg"
                alt="You Tube Music"
                platform="youtubemusic"
              />
              {/* Deezer */}
              <LinkButton
                link="https://www.deezer.com/us/artist/6293694?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=desktop&utm_content=artist-6293694&deferredFl=1"
                logo="Logos/Deezer.svg"
                alt="Deezer"
                platform="deezer"
              />
            </div>
          </div>
          {/* Footer */}
          <div id="footerContainer">
            {/* Descargar Biografia */}
            <NextLink href="https://www.dropbox.com/s/delz5kkav5j2vk6/Gandini%20Biograf%C3%ADa%202020.pdf?dl=0">
              <a target="_blank" id="biografia">
                BIOGRAFÍA
              </a>
            </NextLink>
            {/* Press Kit */}
            <NextLink href="https://www.dropbox.com/sh/o7p4m8lc9hfmkla/AAB6_xneyZ94DWHyi7gc100wa?dl=0">
              <a target="_blank" id="presskit">
                PRESS KIT
              </a>
            </NextLink>
            {/* Copyright */}
            <NextLink href="https://www.youtube.com/watch?v=pnPfgjTxIZU">
              <a target="_blank" id="copyright">
                GANDINI MUSIC 2023 ©
              </a>
            </NextLink>
          </div>
        </div>
      </section>
    </HomeContainer>
  );
}

export default Home;
