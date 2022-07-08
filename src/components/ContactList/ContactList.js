import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { Container } from "./ContactList.styled";
import PropTypes from "prop-types";


const ContactList = ({ contacts, onDelete }) => {
    return (
        <Container>
            {contacts.map( contact => {
                const { id } = contact;
                return (
                    <ContactItem 
                        key={ id } 
                        onDelete={onDelete} 
                        {...contact}
                    />
                )
            })}
        </Container>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf( 
        PropTypes.shape({
            id: PropTypes.string.isRequired
    })).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ContactList;