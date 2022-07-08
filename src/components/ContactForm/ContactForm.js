import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from "yup";
import { Container, Button, StyledForm, Div, Label, StyledField, StyledError } from "./ContactForm.styled";
import PropTypes from "prop-types";

const schema = yup.object().shape({
    name: yup
        .string()
        .required(),
    number: yup
        .string()
        .required()
})

const initialValues = {
    name: '',
    number: ''
}

const ContactForm = ({ onAdd }) => {

    const handleSubmit = ( values, { resetForm } ) => {
        onAdd(values);
        resetForm();
    }

    return (
        <Container>
            <Formik 
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    <Div>
                       <Label>
                        Name
                            <StyledField 
                                type="text"     
                                name="name"
                                autoComplete="off"
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            />
                        </Label>

                        <Label>
                            Number
                                <StyledField 
                                    type="tel"     
                                    name="number"
                                    autoComplete="off"
                                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                />
                        </Label> 

                        <Button type="submit"> Add to contacts </Button>
                    </Div>

                    <Div>
                        <ErrorMessage component={StyledError} name="name"/>
                        <ErrorMessage component={StyledError} name="number"/>
                    </Div>
                    
                </StyledForm>
            </Formik>
        </Container>
    );
};

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default ContactForm;