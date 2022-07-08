import React from 'react';
import { Container, Title, Input } from "./Filter.styled";
import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
    return (
        <Container>
            <Title> 
                Find your contacts by name 
            </Title>

            <Input type="text" onChange={onChange} name="filter"/>
        </Container>
    );
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Filter;