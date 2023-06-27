import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Contact } from "../types";
import * as formik from "formik";
import * as yup from "yup";

interface ContactFormProps {
  contact: Contact;
  onSubmit: (contact: Contact) => void;
  onDelete: (id: number) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  contact,
  onSubmit,
  onDelete,
}) => {
  const { Formik } = formik;

  const contactSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
  });

  return (
    <Formik
      validationSchema={contactSchema}
      onSubmit={onSubmit}
      initialValues={contact}
      enableReinitialize
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                required
                fullWidth
                id="lastName"
                label="Nom"
                value={values.lastName}
                onChange={handleChange}
                autoFocus
                helperText={
                  touched.lastName && errors.lastName
                    ? "Veuillez remplir nom s'il vous plaît"
                    : ""
                }
                error={touched.lastName && errors.lastName ? true : false}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="Prénom"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                helperText={
                  touched.firstName && errors.firstName
                    ? "Veuillez remplir prénom s'il vous plaît"
                    : ""
                }
                error={touched.firstName && errors.firstName ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                helperText={
                  touched.email && errors.email
                    ? "Veuillez remplir l'email s'il vous plaît"
                    : ""
                }
                error={touched.email && errors.email ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="N° Téléphone"
                id="phone"
                autoComplete="phone"
                value={values.phone}
                onChange={handleChange}
                helperText={
                  touched.phone && errors.phone
                    ? "Veuillez remplir le numéro téléphone s'il vous plaît"
                    : ""
                }
                error={touched.phone && errors.phone ? true : false}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                color={contact.id && contact.id > 0 ? "success" : "primary"}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {contact.id && contact.id > 0 ? "Modifier" : "Ajouter"}
              </Button>
            </Grid>
            {contact.id && contact.id > 0 && (
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  color="error"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => onDelete(contact.id ?? 0)}
                >
                  Supprimer
                </Button>
              </Grid>
            )}
          </Grid>
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;
