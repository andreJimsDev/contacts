import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContactForm from "./components/ContactForm";
import { Contact } from "./types";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  addContact,
  deleteContact,
  findAllContact,
  updateContact,
} from "./services/contact-service";

const initialContact: Contact = {
  id: undefined,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const App: React.FC = () => {
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [contact, setContact] = React.useState<Contact>(initialContact);

  React.useEffect(() => {
    findAllContact().then((response) => setContacts(response.data.contacts));
  }, []);

  const handleSubmit = (contact: Contact) => {
    if (!contact.id) {
      handleNewContact(contact);
    } else {
      handleEditContact(contact);
    }
  };

  const handleNewContact = async (contact: Contact) => {
    const { data } = await addContact(contact);
    setContacts((prev) => [...prev, data.contact]);
  };

  const handleEditContact = async (contact: Contact) => {
    await updateContact(contact);
    setContacts((prev) =>
      prev.map((el) => {
        if (el.id === contact.id) return contact;
        return el;
      })
    );
    setContact(initialContact);
  };

  const handleDeleteContact = async (id: number) => {
    await deleteContact(id);
    setContacts((prev) => prev.filter((el) => el.id !== id));
    setContact(initialContact);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const contactId: number = parseInt(event.target.value, 0);
    const obj = contacts.find((el) => el.id === contactId);
    if (obj) setContact(obj);
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <FormControl fullWidth>
                <InputLabel id="listContacts">Contacts</InputLabel>
                <Select
                  labelId="listContacts"
                  label="Contact"
                  onChange={handleChange}
                  fullWidth
                >
                  {contacts.map((el, index) => (
                    <MenuItem
                      key={index}
                      value={el.id}
                    >{`${el.lastName} ${el.firstName}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                onClick={() => setContact((_prev) => initialContact)}
                fullWidth
              >
                Noveau
              </Button>
            </Grid>
          </Grid>
          <ContactForm
            onSubmit={handleSubmit}
            contact={contact}
            onDelete={handleDeleteContact}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
