import axios from "axios";
import { Contact } from "../types";

const API_CONTACT_URL = "http://localhost:3000/contacts";

export function addContact(contact: Contact) {
    return axios.post(API_CONTACT_URL, contact)
}

export function updateContact(contact: Contact) {
    return axios.put(API_CONTACT_URL, contact)
}

export function deleteContact(id: number) {
    return axios.delete(`${API_CONTACT_URL}/${id}`)
}

export function findAllContact() {
    return axios.get(API_CONTACT_URL)
}
