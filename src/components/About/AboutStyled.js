import styled from "styled-components";

export const AboutComponent = styled.section`
    padding: 50px 0;
    background: #f5f5f7;
`;

export const AboutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1.2rem;
            color: #555;
            padding-top: 20px;
        }
        .small {
            font-size: 1.2rem;
            color: #666;
            font-weight: 600;
            text-transform: uppercase;
            padding-bottom: 70px;
        }
        .about-img {
            flex: 1 1 400px;
            padding: 30px;
            transform: translateX(150%);
            animation: about-img-animation 1s ease-in-out forwards;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
        @keyframes about-img-animation {
            100% {
            transform: translate(0);
            }
        }
        .about-img img {
            display: block;
            height: 400px;
            max-width: 100%;
            margin: auto;
            border-radius: 50px;
            object-fit: cover;
            object-position: right;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }    
`;

export const AboutText = styled.div`
    flex: 1 1 400px;
    padding: 30px;
    margin: auto;
    transform: translate(-150%);
    animation: about-text-animation 1s ease-in-out forwards;
        @keyframes about-text-animation {
            100% {
            transform: translate(0);
            }
        }
`;