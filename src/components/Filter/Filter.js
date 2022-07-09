import React from 'react';
import { Container, Title, Input } from "./Filter.styled";
import PropTypes from "prop-types";

const Filter = ({ filter, onChange }) => {
    return (
        <Container>
            <Title> 
                Find your contacts by name 
            </Title>

            <Input 
                type="text" 
                onChange={onChange} 
                name="filter"
                value={ filter }
            />
        </Container>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;