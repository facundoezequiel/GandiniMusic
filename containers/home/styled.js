import styled from "styled-components";

const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;

    .leftDiv {
        width: 50%;
        background-color: gray;
        display: flex;
        justify-content: center;
    }

    .rightDiv {
        width: 50%; 	

        a {
            margin-right: 2%;
            cursor: pointer;
            color: green;
        }
    }

    img {
        width: 40%;
        display: block;
        margin: 0 auto;
    }
`;

export { HomeContainer };