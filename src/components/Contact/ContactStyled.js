import styled from "styled-components";

export const ContactComponent = styled.section`
    padding: 50px 0;
    background: rgb(226, 226, 226);
    height: 100vh;
        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            padding: 20px;
            transform: translate(-50%, -50%);
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 999;
        }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 5rem;
    background: #fff;
        .contact-img {
            width: 50%;
            flex: 1 1 400px;
        }
        .contact-img img {
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

export const ContactForm = styled.div`
    padding: 1rem;
    width: 50%;
    flex: 1 1 400px;
    margin: auto;
        input {
            display: block;
            width: 100%;
            border: none;
            border-bottom: 2px solid #ddd;
            padding: 1rem 0;
            box-shadow: none;
            outline: none;
            margin-bottom: 1rem;
            color: #444;
            font-weight: 500;
            font-size: 1rem;
        }
        textarea {
            display: block;
            width: 100%;
            border: none;
            border-bottom: 2px solid #ddd;
            color: #444;
            outline: none;
            padding: 1rem 0;
            resize: none;
            font-size: 1rem;
        }
        label {
            color: #444;
            font-weight: 500;
            font-size: 1rem; 
        }
        button[type="submit"] {
            margin: 2rem auto;
            padding: 20px 20px;
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
`;