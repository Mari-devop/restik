import styled from "styled-components";

export const PopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 300px;
    max-width: 80vw; 
    height: auto;
    
    .popup {
        background-color: #f9f9f9;
        border-radius: 10px;
        padding: 20px;
        position: relative;
        width: 100%;
        height: 100%;
    }

    h3 {
        font-size: 20px;
        margin-bottom: 10px;
        text-transform: capitalize;
        color: #555;
    }

    p {
        font-size: 16px;
        text-align: center;
        line-height: 1.5;
    }

    .delete {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 20px;
        cursor: pointer;
    }
`;
