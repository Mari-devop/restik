import styled from "styled-components";

export const SubscribeContainer = styled.div`
    background-color: #f4f4f4;
    padding: 20px 0;
    text-align: center;
    color: #555;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 70px;
   
    
    .popup {
        background-color: #777;
        color: #fff;
        padding-top: 10px;
        border-radius: 5px;
        margin: 10px auto;
        font-size: 1.2rem;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
        h2{
            font-size: 1.3rem;
            font-weight: 600;
            color: #777;
            text-transform: uppercase;
        }
        form {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            gap: 10px;
                label {
                    font-size: 1.2rem;
                }
                input {
                    padding: 5px;
                    font-size: 1.2rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: none;
                }
                button {
                    padding: 5px 10px;
                    font-size: 1.2rem;
                    background-color: #777;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
        }
`;