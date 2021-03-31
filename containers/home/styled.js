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

    /* Contacto Hover */
    #whatsapp:hover {
        color: var(--whatsappGreen)!important;
    }
    #mail:hover {
        color: var(--red)!important;
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
            font-size: 1.3em;
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

        #footerContainer p {
            font-size: 0.9em;
        }

        #biografia, #presskit {
            margin-right: 5%;
            font-size: 0.9em;
        }
    }
`;

export { HomeContainer };