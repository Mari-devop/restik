import styled from 'styled-components';

export const LocationText = styled.section`
background: #f4f4f4;
            p{
                text-align: center;
                color: #777;
                font-size: 1.2rem;
                padding-bottom: 2rem;
            }
            .location-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 2rem;
                max-width: 1200px;
                margin: 0 auto;
            }
            .location-container img {
                display: block;
                height: 300px;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
            .img-containerr {
                flex: 1 1 400px;
                margin: 0 1rem;
                position: relative;
                overflow: hidden;
                width: calc(33.333% - 2rem); 
                cursor: pointer;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                box-shadow: 
                    rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
                    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
                    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
                    rgba(0, 0, 0, 0.06) 0px 2px 1px, 
                    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
                    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
                    rgba(0, 0, 0, 0.09) 0px 16px 8px,
                    rgba(0, 0, 0, 0.09) 0px 32px 16px;
            
            }
            .location-content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
                color: #fff;
                padding: 1rem;
                transition: 0.3s;
                    .address {
                        font-size: 0.9rem;
                        color: #f4f4f4;
                    }
            }
`;

export const LocationHeader = styled.div`
background: #f4f4f4;
        padding: 2rem 0 10rem 0;
        height: 20vh;
            h2 {
                text-align: center;
                font-size: 2rem;
                font-weight: 400;
                color: #777;
            }
            button {
                display: block;
                margin: 2rem auto;
                background-color: #f4f4f4;
                color: #333;
                border: none;
                padding: 1rem 2rem;
                border-radius: 5px;
                cursor: pointer;
                transition: 0.3s;
            }
            button:hover {
                background-color: #555;
                color: #fff;
            }
`;