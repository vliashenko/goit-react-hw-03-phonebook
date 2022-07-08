import React from 'react';
import { Container, Image, Name, Number, Button, Div } from "./ContactItem.styled";
import image from "../../img/profile.png";
import PropTypes from "prop-types";

const ContactItem = ({ name, number, onDelete, id }) => {
    return (
        <Container>
            <Image src={ image }/>
            <Div>
                <Name> { name }: </Name>
                <Number> { number } </Number>
            </Div>
                
            <Button onClick={() => onDelete( id )}> Delete </Button>
        </Container>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactItem;