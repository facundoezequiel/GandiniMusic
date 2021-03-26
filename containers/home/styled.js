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
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    /* Logo Gandini Center */
    #gandiniLogo {
        width: 55%;
        padding-top: 8%;
        display: block;
        margin: 0 auto;
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

    /* #CirclesDecoration {
        position: absolute;
        top: 73%;
        left: 69%;
        overflow: hidden;
    } */

    /* Title */
    #TitleSection {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    #Title h1 {
        color: #FFFFFF;
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
        color: #FFFFFF;
        font-family: var(--poppins);
        padding-top: 2%;
        text-align: left;
    }

    /* Lenguaje Buttons */
    #Lenguaje {
        display: flex;
        justify-content: flex-end;
    }

    #Lenguaje a {
        display: block;
        margin-left: 15%;
        cursor: pointer;
        color: #FFFFFF;
        font-family: var(--poppins);
        letter-spacing: 1.5px;
        text-align: right;
    }

`;

export { HomeContainer };