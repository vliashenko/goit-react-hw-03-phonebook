import { Form, Field } from "formik";
import styled from "styled-components";

export const Container = styled.div`
    margin: 20px 0 0;
    width: 700px;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 20px;
    background-color: #3eadcf;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Div = styled.div``;

export const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
`;

export const StyledField = styled(Field)`
    margin: 0 15px 0 5px;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 5px;
`;

export const Button = styled.button`
    margin: 0 10px;
    padding: 10px;
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

export const StyledError = styled.div`
    margin: 10px 0;
    width: 400px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: #fce043;
`;