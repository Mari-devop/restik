import styled from 'styled-components';

export const TeamContainer = styled.section`
    background: #f5f5f7;
    padding: 150px 0;
    border-radius: 150% 150% 0 0 / 50% 50% 0 0;
        h2 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 80px;
            color: black;  
        }  
`;

export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
`;

export const TeamMember = styled.div`
    text-align: center;
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
            padding: 15px;
            border: 5px solid #fff;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
        h3 {
            margin-bottom: 5px;
            color: #555;
        }
        p {
            color: #777;
        }
`;

export const FormContainer = styled.div`
    background: #f5f5f7;
    display: flex;
    flex: 1 1 400px;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    transform: translateX(150%);
    animation: about-img-animation 1s ease-in-out forwards;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    @keyframes about-img-animation {
        100% {
        transform: translate(0);
        }
    }
`;

export const JoinForm = styled.div`
    margin: 40px;
    border-radius: 25px;
    padding: 50px;
    text-align: center;
    background-color: #555;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        .h{
            color: #ccc;
            font-size: 2rem;
            margin-bottom: 20px;
        }
        form {
            display: grid;
            gap: 10px;
            margin: 10px auto;
                label {
                font-weight: bold;
                color: #ccc;
                }
                input[type="text"],
                input[type="email"],
                input[type="file"] {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: none;
                }
                button[type="submit"] {
                    padding: 10px 20px;
                    background-color: #117964;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease-in-out;
                    font-size: 1rem;
                        &:hover {
                            background-color: #0d5642;
                        }
                }
        }
`;
