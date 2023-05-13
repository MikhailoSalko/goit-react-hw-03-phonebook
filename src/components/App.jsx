import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    if (this.checkContactExist(name)) {
      Notify.failure(`${name} is already in your contacts`);
      return;
    }
    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const filteredContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: filteredContacts };
    });
  };

  checkContactExist = name => {
    const normalizadName = name.toLowerCase().trim();
    const { contacts } = this.state;
    const foundContact = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizadName
    );
    return Boolean(foundContact);
  };

  filterInput = ({ target }) => {
    this.setState({ filter: target.value });
  };

  filterContactList = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().trim().includes(filter.toLowerCase().trim());
    });
    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    const contacts = this.filterContactList();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <div style={{ marginBottom: '30px', width: '350px' }}>
            <h2 style={{ marginBottom: '10px', fontSize: '40px' }}>
              PhoneBook
            </h2>
            <ContactForm onSubmit={this.addNewContact} />
          </div>
          <div>
            <h3 style={{ marginBottom: '10px', fontSize: '30px' }}>Contacts</h3>
            <Filter filter={filter} filterInput={this.filterInput} />
            <ContactList contacts={contacts} onClick={this.deleteContact} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
