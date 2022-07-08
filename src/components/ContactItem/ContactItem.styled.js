import styled from "styled-components";

export const Container = styled.div`
    margin: 10px 0;
    width: 600px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: white;
`;

export const Image = styled.img`
    width: 34px;
    height: 34px;
    border: 1px solid grey;
    border-radius: 50%;
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: black;
    margin: 0 10px 0 40px;
`;

export const Number = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: black;
`;

export const Button = styled.button`
    margin: 0 10px;
    padding: 5px;
    background-color: #5de6de;
    background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    transition: all 400ms ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;