import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const HomeContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;

    * {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    *, input, select, textarea, option, button {
        outline: none !important;
    }

    ::-moz-selection {
        /* Code for Firefox */
        color: white;
        background: red;
    }

    ::selection {
        color: white;
        background: red;
    }

    /* LEFT ZONE */
    .leftZone {
        width: 50%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
    }

    #backgroundSection {
        width: 100%;
        height: 94%;
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
        height: 6%;
        background-color: black;
    }

    /* News */
    .ticker {
        width: 100%;
        height: 100% !important;
        position: relative;
        overflow: hidden;
        background-color: black;
    }
    
    .ticker__element {
        height: 100% !important;
        max-width: 1440px;
        min-width: 1440px;
        display: flex;
        align-content: center;
        align-items: center;
    }

    .ticker__element p {
        display: inline;
        font-weight: 800;
        font-size: 1em;
        letter-spacing: 0.5px;
        color: white;
        text-align: center;
        margin-right: 70px;
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
        color: black;
        font-weight: 800;
        font-size: 2em;
        letter-spacing: 1.3px;
        text-align: left;
    }

    #Title h1 span {
        font-weight: 400;
        font-size: 0.7em !important; 
    }

    #Title p {
        color: black;
        padding-top: 2%;
        text-align: left;
    }

    #socialMediaContainer {
        margin-top: 3%;
    }

    #socialMediaContainer a, #socialMediaMobileContainer a {
        margin-right: 7%;
        font-size: 2.3em;
        transition: 0.2s all;
        color: black;
    }

    #socialMediaMobileContainer {
        display: none;
    }

    #instagram:hover {
        color: #E1306C!important;
    }
    #facebook:hover {
        color: #3b5998!important;
    }
    #twitter:hover {
        color: #00acee!important;
    }
    #whatsapp:hover {
        color: #075e54!important;
    }
    #mail:hover {
        color: red!important;
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
        color: black;
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
        background-color: #ff0000!important;
    }
    #twitch:hover {
        background-color: #6441a5!important;
    }
    #spotify:hover {
        background-color: #1DB954!important;
    }
    #bandcamp:hover {
        background-color: #1ea0c4!important;
    }
    #soundcloud:hover {
        background-color: #ff5500!important;
    }
    #mixcloud:hover {
        background-color: #5000ff!important;
    }
    #beatport:hover {
        background-color: #94cf1a!important;
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
        color: black;
        text-align: left;
    }

    #biografia, #presskit, #copyright {
        margin-right: 8%;
        transition: 0.2s all;
    }

    #biografia:hover, #presskit:hover, #copyright:hover {
        color: red;
    }

    /* DESKTOP RESPONSIVE */

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
            padding: 8% 0% 8% 0%;
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

        .ticker__element p {
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
        .ticker__element {
            max-width: 1230px;
            min-width: 1230px;
        }

        .ticker__element p {
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

    /* ---- MOBILE RESPONSIVE ---- */

    /* ---- 1024px iPad Pro ---- */
    @media (max-width: ${breakpoints.iPadPro}) {
        width: 100%;
        display: block;

        /* LEFT ZONE (TOP ZONE) */
        .leftZone {
            width: 100%;
            display: block;
        }

        #backgroundSection {
            padding-bottom: 47%;
        }

        #newsSection {
            width: 100%;
            margin: 0 auto;
            height: 81.03px!important;
        }

        /* News */
        .ticker__element {
            max-width: 1540px;
            min-width: 1540px;
        }

        .ticker__element p {
            font-size: 1.1em;
            letter-spacing: 0.3px;
        }

        /* RIGHT ZONE */
        .rightZone {
            width: 100%; 	
            background-position: center;
        }

        #rightZoneContainer {
            width: 80%;
            padding: 9% 0% 9% 0%;
            margin: 0 auto;
            display: block;
        }

        /* Title */
        #TitleSection {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 9%;
        }

        /* Profile Image */
        #profileImage {
            display: block;
            margin-right: 5%;
        }

        #Title h1 {
            font-size: 3em;
            letter-spacing: 1.3px;
            text-align: left;
        }

        #Title h1 span {
            font-size: 0.7em !important; 
        }

        #Title p {
            padding-top: 2%;
            text-align: left;
            font-size: 1em !important; 
        }

        #socialMediaContainer {
            display: none;
        }

        #socialMediaMobileContainer {
            display: flex;
            margin: 2% 0% 9% 0%;
            justify-content: center;
        }

        #socialMediaMobileContainer a {
            margin: 0% 3.5% 0% 3.5%;
            font-size: 3.5em;
        }

        #socialMediaMobileContainer a:hover {
            color: black!important;
        }

        #playerFlyerContainer {
            width: 100%;
            display: flex;
            justify-content: flex-start;
        }

        #playerContainer {
            padding-top: 56.25%;
            width: 100%;
        }

        #LinksSection {
            margin-top: 9%;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        #LinksSection h1 {
            font-size: 2em;
            text-align: center;
        }

        #ButtonsContainer {
            margin-top: 3%;
            width: 100%;
            justify-content: center;
        }

        #ButtonsContainer a {
            justify-content: center;
            padding: 2% 4% 2% 4%!important;
            min-height: 49.14px!important;
            margin: 5% 5% 0% 5%!important;
            transform: scale(1.3);
        }

        #ButtonsContainer a img{
            width: 200%!important;
            display: block;
        }

        #ButtonsContainer a:hover {
            transform: scale(1.3);
        }

        #youtube:hover {
            background-color: black!important;
        }
        #twitch:hover {
            background-color: black!important;
        }
        #spotify:hover {
            background-color: black!important;
        }
        #bandcamp:hover {
            background-color: black!important;
        }
        #soundcloud:hover {
            background-color: black!important;
        }
        #mixcloud:hover {
            background-color: black!important;
        }
        #beatport:hover {
            background-color: black!important;
        }

        #footerContainer {
            justify-content: center;
            margin-top: 13%;
        }

        #footerContainer a {
            text-align: center;
            font-size: 1.2em;
        }

        #biografia, #presskit, #copyright {
            margin: 0% 4% 0% 4%;
        }
    }

    /* ---- 768px iPad ---- */
    @media (max-width: ${breakpoints.iPad}) {
        #Title h1 {
            font-size: 2.2em;
        }

        #Title p {
            font-size: 1em !important; 
        }

        #socialMediaMobileContainer a {
            margin: 0% 5% 0% 5%;
            font-size: 3em;
        }

        #ButtonsContainer a {
            margin: 7% 6% 0% 6%!important;
            transform: scale(1.3);
        }

        #ButtonsContainer a:hover {
            transform: scale(1.3);
        }
    }

    /* ---- 651px Mobile ---- */
    @media (max-width: ${breakpoints.mobile}) {
        #newsSection {
            width: 100%;
            margin: 0 auto;
            height: 40px!important;
        }
        
        .ticker__element {
            max-width: 1300px;
            min-width: 1300px;
        }

        .ticker__element p {
            font-size: 1em;
        }

        #Title h1 {
            font-size: 1.8em;
        }

        #Title h1 span {
            font-size: 0.7em !important; 
        }

        #Title p {
            font-size: 0.9em !important; 
        }

        #LinksSection h1 {
            font-size: 1.5em;
        }

        #ButtonsContainer a {
            transform: scale(1);
        }

        #footerContainer a {
            font-size: 1em;
        }
    }

    /* ---- 414px iPhone 6 7 8 Plus ---- */
    @media (max-width: ${breakpoints.iphone678Plus}) {
        #newsSection {
            min-height: 55px!important;
        }
    
        .ticker__element p {
            font-size: 0.9em;
        }

        #rightZoneContainer {
            width: 85%;
            padding: 9% 0% 9% 0%;
            margin: 0 auto;
        }

        #profileImage img {
            display: block;
            width: 100%;
        }

        #Title h1 {
            font-size: 1.4em;
            letter-spacing: 0.2px;
        }

        #Title h1 span {
            font-size: 0.8em !important; 
            letter-spacing: 0.2px;
        }

        #Title p {
            font-size: 0.75em !important; 
        }

        #socialMediaMobileContainer a {
            font-size: 2em;
        }

        #LinksSection h1 {
            font-size: 1.6em;
        }

        #ButtonsContainer {
            margin-top: 3%;
            width: 100%;
            justify-content: center;
        }

        #ButtonsContainer a {
            justify-content: center;
            padding: 2% 7% 2% 7%!important;
            min-height: 45.14px!important;
            margin: 3% 2% 3% 2%!important;
        }

        #ButtonsContainer a img{
            width: 90%!important;
            display: block;
        }

        #footerContainer a {
            font-size: 1.2em;
            margin-bottom: 5%;
        }
    }

    /* ---- 375px iPhone 6 7 8 ---- */
    @media (max-width: ${breakpoints.iphone678}) {
        #Title h1 {
            font-size: 1.3em;
        }

        #Title h1 span {
            font-size: 0.7em !important; 
        }

        #Title p {
            font-size: 0.7em !important; 
        }
    }

    /* ---- 360px Moto G4 Samsung S5 ---- */
    @media (max-width: ${breakpoints.motoG4}) {
        #newsSection span {
            font-size: 0.8em;
        }

        #socialMediaMobileContainer a {
            font-size: 1.7em;
        }

        #LinksSection h1 {
            font-size: 1.2em;
        }

        #ButtonsContainer a {
            padding: 2% 4% 2% 4%!important;
            min-height: 40px!important;
        }

        #ButtonsContainer a img{
            width: 78%!important;
        }

        #footerContainer a {
            font-size: 0.9em;
        }
    }

    /* ---- 320px iPhone 5 / SE ---- */
    @media (max-width: ${breakpoints.iphone5SE}) {
        #Title h1 {
            font-size: 1em;
        }

        #Title h1 span {
            font-size: 0.7em !important; 
        }

        #Title p {
            font-size: 0.6em !important; 
        }

        #socialMediaMobileContainer a {
            font-size: 1.5em;
        }

        #LinksSection h1 {
            font-size: 1em;
        }

        #ButtonsContainer a {
            padding: 2% 2% 2% 2%!important;
            min-height: 35.14px!important;
        }

        #ButtonsContainer a img{
            width: 70%!important;
        }

        #footerContainer a {
            font-size: 0.8em;
        }
    }

    /* ---- 280px Samsung Galaxy Fold ---- */
    @media (max-width: ${breakpoints.galaxyFold}) {
        #newsSection span {
            font-size: 0.7em;
        }
        
        #Title h1 {
            font-size: 0.8em;
        }

        #Title h1 span {
            font-size: 0.6em !important; 
        }

        #Title p {
            font-size: 0.5em !important; 
        }

        #socialMediaMobileContainer a {
            font-size: 1.2em;
        }

        #LinksSection h1 {
            font-size: 0.8em;
        }

        #ButtonsContainer a {
            padding: 2% 0% 2% 0%!important;
            min-height: 25px!important;
        }

        #ButtonsContainer a img{
            width: 45%!important;
        }

        #footerContainer a {
            font-size: 0.7em;
        }
    }
`;

export { HomeContainer };