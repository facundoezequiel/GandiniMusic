import styled from "styled-components";

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
        background: rgba(0,0,0,1);
        background: -moz-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 100%);
        background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(0,0,0,1)), color-stop(100%, rgba(77,77,77,1)));
        background: -webkit-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 100%);
        background: -o-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 100%);
        background: -ms-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 100%);
        background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(77,77,77,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#4d4d4d', GradientType=1 );
        display: flex;
        justify-content: center;
        position: relative;
    }

    #rightZoneContainer {
        width: 76%;
        padding-top: 8%;
        margin: 0 auto;
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

    /* Links Buttons */
    #LinksSection {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 5%;
    }

    #LinksSection h1 {
        width: 100%;
        color: var(--black);
        font-family: var(--poppins);
        text-align: left;
    }

    #ButtonsContainer {
        margin-top: 3%;
        display: flex;
        flex-wrap: wrap;
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
        margin-top: 5%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #footerContainer a {
        color: var(--black);
        font-family: var(--poppins);
        text-align: left;
    }
`;

export { HomeContainer };