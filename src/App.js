import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import shortid from "shortid";
import { Container, Title } from "./App.styled";

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  onAddContactHandler = ( data ) => {
    let id = shortid.generate()
    const contact = {
      id,
      ...data
    }
    let checker = this.state.contacts.filter( item => item.name === data.name)
    if(checker.length === 0) {
      this.setState(({ contacts }) => ({
        contacts: [ contact, ...contacts]
      }))  
    } else {
      alert(`${ data.name } is already in your contacts!`)
    }
      
  }

  onContactDeleteHandler = ( contactID ) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactID)
    }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const visibleContacts = this.getVisibleContacts()
    return (
      <>
        <Container>
          <Title> 
            Phonebook 
          </Title>
          <ContactForm onAdd={this.onAddContactHandler}/>
        </Container>

        <Container>
          <Filter 
            onChange={this.changeFilter}  
          />
        </Container>

        <Container>
          <Title>
            Contacts
          </Title>
          <ContactList 
            contacts={visibleContacts}
            onDelete={this.onContactDeleteHandler}
          />
        </Container>
      </>
    );
  }
}

export default App;
