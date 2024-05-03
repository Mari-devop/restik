import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    bottom: 0;
    width: 100%;
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #777;
    color: #fff;
    padding: 1rem;
    margin-top: 1rem;
        .logo {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }
`;

export const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
    font-size: 1.5rem;
    a {
        color: #fff;
    }
    a:hover {
        color: #000;
    }
`;