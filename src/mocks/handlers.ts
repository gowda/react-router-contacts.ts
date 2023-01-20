import localforage from 'localforage';
import { rest } from 'msw';
import { Contact } from '../contact';

const getContacts = (q?: string) =>
  localforage
    .getItem<Contact[]>('contacts')
    .then((contacts) => contacts || [])
    .then((contacts) => {
      if (!q) {
        return contacts;
      }

      const pattern = new RegExp(q, 'i');
      return contacts.filter(
        ({ first, last }) =>
          pattern.test(first || '') || pattern.test(last || '')
      );
    });

const setContacts = (contacts: Contact[]) =>
  localforage.setItem('contacts', contacts);

const getContact = (id: string) =>
  getContacts().then((contacts) =>
    contacts.find(({ id: contactId }) => contactId === id)
  );

const updateContact = (id: string, attrs: Partial<Omit<Contact, 'id'>>) =>
  getContacts()
    .then((contacts) => ({
      contacts,
      contact: contacts.find(({ id: contactId }) => contactId === id),
    }))
    .then(({ contacts, contact }) => {
      if (!contact) {
        throw new Error(`No contact found for ${id}`);
      }
      const updatedContact = { ...contact, ...attrs };

      return {
        contacts: setContacts(
          contacts.map((oldContact) =>
            oldContact.id === id ? updatedContact : oldContact
          )
        ),
        contact,
      };
    })
    .then(({ contact }) => contact);

const deleteContact = (id: string) =>
  getContacts()
    .then((contacts) => ({
      contacts,
      index: contacts.findIndex(({ id: contactId }) => contactId === id),
    }))
    .then(({ contacts, index }) => [
      ...contacts.slice(0, index),
      ...contacts.slice(index + 1),
    ])
    .then((contacts) => setContacts(contacts));

const handlers = [
  rest.get('http://localhost:5173/contacts', (req, res, ctx) => {
    const q = req.url.searchParams.get('q') ?? undefined;

    return getContacts(q).then((contacts) =>
      res(ctx.delay(1000), ctx.status(200), ctx.json(contacts))
    );
  }),
  rest.post('http://localhost:5173/contacts', (req, res, ctx) => {
    const id = Math.random().toString(36).substring(2, 9);
    const contact: Contact = { id, createdAt: Date.now(), favorite: false };

    return getContacts()
      .then((contacts) => [contact, ...contacts])
      .then((contacts) => setContacts(contacts))
      .then(() => res(ctx.status(201), ctx.json(contact)));
  }),
  rest.get('/contacts/:contactId', (req, res, ctx) => {
    const { contactId } = req.params;

    return getContact(contactId as string).then((contact) =>
      res(
        ctx.delay(1000),
        ctx.status(contact ? 200 : 404),
        ctx.json(contact ?? null)
      )
    );
  }),
  rest.put('/contacts/:contactId', (req, res, ctx) => {
    const { contactId } = req.params;

    return req
      .json()
      .then((attrs) => updateContact(contactId as string, attrs))
      .then((contact) => res(ctx.status(200), ctx.json(contact)));
  }),
  rest.delete('/contacts/:contactId', (req, res, ctx) => {
    const { contactId } = req.params;
    return deleteContact(contactId as string).then(() =>
      res(ctx.status(200), ctx.json(null))
    );
  }),
];

export default handlers;
