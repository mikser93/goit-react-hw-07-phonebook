import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Loader />
    </div>
  );
}

export default App;
