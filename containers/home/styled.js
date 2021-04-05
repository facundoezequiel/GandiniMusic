import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;

    /* LEFT ZONE */
    .leftZone {
        width: 50%;
        background-color: gray;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
    }

    #backgroundSection {
        width: 100%;
        height: 93%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
    }

    /* Logo Gandini Center 
    #gandiniLogo {
        width: 55%;
        padding-top: 8%;
        display: block;
        margin: 0 auto;
    } */

    #newsSection {
        width: 100%;
        background-color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center; 
        height: 7%;
    }

    /* News */
    #newsSection span {
        font-weight: 800;
        font-family: var(--poppins);
        font-size: 1em;
        letter-spacing: 0.5px;
        color: var(--white);
        text-align: center;
    }

    /* RIGHT ZONE */
    .rightZone {
        width: 50%; 	
        background-color: gray;
        display: flex;
        justify-content: flex-start;
        position: relative;
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #rightZoneContainer {
        width: 76%;
        padding: 13% 0% 13% 0%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    /* Title */
    #TitleSection {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    /* Profile Image */
    #profileImage {
        display: none;
    }

    #Title h1 {
        color: var(--black);
        font-weight: 800;
        font-family: var(--poppins);
        font-size: 2em;
        letter-spacing: 1.3px;
        text-align: left;
    }

    #Title h1 span {
        font-weight: 400;
        font-size: 0.7em !important; 
    }

    #Title p {
        color: var(--black);
        font-family: var(--poppins);
        padding-top: 2%;
        text-align: left;
    }

    #socialMediaContainer {
        margin-top: 3%;
    }

    #socialMediaContainer a {
        margin-right: 7%;
        font-size: 2.3em;
        transition: 0.2s all;
        color: var(--black);
    }

    #instagram:hover {
        color: var(--instagramPink)!important;
    }
    #facebook:hover {
        color: var(--facebookBlue)!important;
    }
    #twitter:hover {
        color: var(--twitterBlue)!important;
    }
    #whatsapp:hover {
        color: var(--whatsappGreen)!important;
    }
    #mail:hover {
        color: var(--red)!important;
    }

    /* Player & Flyer Section */
    #playerFlyerContainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }

    #playerContainer {
        position: relative;
        padding-top: 39.40%;
        width: 70%;
    }

    #reactPlayer {
        position: absolute;
        top: 0;
        left: 0;
    }

    /* Links Buttons */
    #LinksSection {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    #LinksSection h1 {
        width: 100%;
        color: var(--black);
        font-family: var(--poppins);
        text-align: left;
    }

    #ButtonsContainer {
        margin-top: 3%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    #ButtonsContainer a {
        min-height: 44.2px;
        justify-content: center;
    }

    #ButtonsContainer a:hover {
        transform: scale(1.1);
    }

    /* Buttons Hover */
    #youtube:hover {
        background-color: var(--youTubeRed)!important;
    }
    #twitch:hover {
        background-color: var(--twitchPurple)!important;
    }
    #spotify:hover {
        background-color: var(--spotifyGreen)!important;
    }
    #bandcamp:hover {
        background-color: var(--bandcampBlue)!important;
    }
    #soundcloud:hover {
        background-color: var(--soundcloudOrange)!important;
    }
    #mixcloud:hover {
        background-color: var(--mixcloudBlue)!important;
    }
    #beatport:hover {
        background-color: var(--beatportGreen)!important;
    }

    /* Footer */
    #footerContainer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
    }

    #footerContainer a {
        color: var(--black);
        font-family: var(--poppins);
        text-align: left;
    }

    #biografia, #presskit, #copyright {
        margin-right: 8%;
        transition: 0.2s all;
    }

    #biografia:hover, #presskit:hover, #copyright:hover {
        color: var(--red);
    }

    /* RESPONSIVE */

    /* ---- 2560px UltraWide ---- */
    @media (max-width: ${breakpoints.monitorUltraWide}) {
        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 5% 0% 5% 0%;
        }
        
        /* Player & Flyer Section */
        #playerContainer {
            padding-top: 34.875%;
            width: 62%;
        }

        /* Links Buttons */
        #LinksSection {
            justify-content: flex-start;
        }

        #ButtonsContainer {
            width: 70%;
        }
    }

     /* ---- 1920px Full HD ---- */
     @media (max-width: ${breakpoints.monitorFullHD}) {
        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 12% 0% 12% 0%;
        }

        /* Player & Flyer Section */
        #playerContainer {
            padding-top: 39.40%;
            width: 70%;
        }
    }

    /* ---- 1860px Window ---- */
    @media (max-width: ${breakpoints.window1860}) {
        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 10% 0% 10% 0%;
        }

        /* Links Buttons */
        #LinksSection {
            justify-content: flex-start;
        }

        #LinksSection h1 {
            font-size: 1.3em;
            letter-spacing: 0.5px;
        }

        #ButtonsContainer {
            width: 80%;
        }

        #ButtonsContainer a {
            min-height: 45.2px!important;
            justify-content: center;
        }

        #ButtonsContainer a img{
            width: 90%;
            display: block;
        }
    }

    /* ---- 1710px Window ---- */
    @media (max-width: ${breakpoints.window1710}) {
        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 10% 0% 10% 0%;
        }

        /* Title */
        #Title h1 {
            font-size: 1.7em;
            letter-spacing: 0.5px;
        }

        #Title p {
            font-size: 0.9em;
            padding-top: 1.5%;
        }

        #socialMediaContainer a {
            font-size: 1.7em;
            margin-right: 6%;
        }
        
        /* Player & Flyer Section */
        #playerContainer {
            padding-top: 39.40%;
            width: 70%;
        }

        /* Links Buttons */
        #LinksSection {
            justify-content: flex-start;
        }

        #LinksSection h1 {
            font-size: 1.3em;
            letter-spacing: 0.5px;
        }

        #ButtonsContainer {
            width: 80%;
        }

        #ButtonsContainer a {
            min-height: 38.2px!important;
            justify-content: center;
        }

        #ButtonsContainer a img{
            width: 80%;
            display: block;
        }

        #biografia, #presskit, #copyright {
            margin-right: 5%;
            font-size: 0.9em;
        }
    }

    /* ---- 1624px Window ---- */
    @media (max-width: ${breakpoints.window1624}) {
        /* LEFT ZONE */
        #backgroundSection {
            height: 94%;
        }

        /* News */
        #newsSection {
            height: 6%;
        }

        #newsSection span {
            font-size: 0.85em;
        }
        
        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 9% 0% 9% 0%;
        }

        /* Title */
        #Title h1 {
            font-size: 1.5em;
        }

        #Title p {
            font-size: 0.8em;
            padding-top: 3%;
        }

        #socialMediaContainer a {
            font-size: 1.5em;
        }

        /* Links Buttons */
        #LinksSection {
            justify-content: flex-start;
        }

        #LinksSection h1 {
            font-size: 1.2em;
            letter-spacing: 0.5px;
        }

        #ButtonsContainer {
            width: 80%;
        }

        #ButtonsContainer a {
            min-height: 34.2px!important;
            justify-content: center;
            padding: 0% 1.1% 0% 1.1%!important;
            margin-right: 2%!important;
        }

        #ButtonsContainer a img{
            width: 77%;
            display: block;
        }

        #biografia, #presskit, #copyright {
            margin-right: 5%;
            font-size: 0.8em;
        }
    }

    /* ---- 1366px Monitor Estandar ---- */
    @media (max-width: ${breakpoints.monitorEstandar}) {
        /* News */
        #newsSection span {
            font-size: 0.85em;
            letter-spacing: 0.3px;
        }

        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 11% 0% 11% 0%;
        }

        /* Title */
        #Title h1 {
            font-size: 1.5em;
            letter-spacing: 0.3px;
        }

        #Title p {
            font-size: 0.72em;
            padding-top: 2%;
        }

        #socialMediaContainer a {
            margin-right: 6%;
        }

        /* Player & Flyer Section */
        #playerContainer {
            padding-top: 39.40%;
            width: 70%;
        }

        /* Links Buttons */
        #LinksSection h1 {
            font-size: 1.1em;
            letter-spacing: 0.3px;
        }

        #ButtonsContainer {
            width: 90%;
        }

        #ButtonsContainer a {
            min-height: 32.2px!important;
            justify-content: center;
            padding: 0% 1.4% 0% 1.4%!important;
            margin-right: 2%!important;
        }

        #ButtonsContainer a img{
            width: 70%;
            display: block;
        }

        #biografia, #presskit, #copyright {
            margin-right: 10%;
            font-size: 0.72em;
        }
    }

    /* ---- 1202px Monitor Estandar Small ---- */
    @media (max-width: ${breakpoints.monitorEstandarSmall}) {
        /* LEFT ZONE */
        #backgroundSection {
            height: 94.5%;
        }

        /* News */
        #newsSection {
            height: 5.5%;
        }

        #newsSection span {
            font-size: 0.75em;
        }

        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 12% 0% 12% 0%;
        }

        /* Title */
        #Title h1 {
            font-size: 1.2em;
            letter-spacing: 0.3px;
        }

        #Title p {
            font-size: 0.6em;
            padding-top: 2%;
        }

        #socialMediaContainer a {
            font-size: 1.2em;
            margin-right: 6%;
        }

        /* Links Buttons */
        #LinksSection h1 {
            font-size: 1em;
            letter-spacing: 0.3px;
        }

        /* Links Buttons */
        #ButtonsContainer {
            width: 85%;
        }

        #ButtonsContainer a {
            min-height: 28.2px!important;
            justify-content: center;
            padding: 0% 0.3% 0% 0.3%!important;
            margin-right: 2%!important;
        }

        #ButtonsContainer a img{
            width: 60%;
            display: block;
        }

        #biografia, #presskit, #copyright {
            margin-right: 10%;
            font-size: 0.6em;
        }
    }

    /* ---- 1024px Monitor Small ---- */
    @media (max-width: ${breakpoints.monitorSmall}) {
        /* LEFT ZONE */
        #backgroundSection {
            height: 94%;
        }

        /* News */
        #newsSection {
            height: 6%;
        }

        #newsSection span {
            font-size: 0.75em;
        }

        /* RIGHT ZONE */
        #rightZoneContainer {
            padding: 12% 0% 12% 0%;
        }
    }
`;

export { HomeContainer };