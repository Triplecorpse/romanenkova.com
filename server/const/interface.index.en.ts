///<reference path="../../_interface/IIndexPage.ts"/>
import {IIndexPage} from "../../_interface/IIndexPage";

export default {
  nav: [
    {name: 'Online|psychology', anchor: 'main'},
    {name: 'About me', anchor: 'about'},
    {name: 'Services', anchor: 'services'},
    {name: 'Diplomas', anchor: 'diplomas'},
    {name: 'Articles', anchor: 'articles'},
    {name: 'Contacts', anchor: 'contacts'}
  ],
  language: {
    codeISO2: 'en',
    locale: 'GB',
    languageName: 'English'
  },
  pageMetadata: {
    description: 'Personal website of online psychologist',
    position: 'Psychologist',
    firstName: 'Irina',
    lastName: 'Romanenkova',
    rootPageTitle: 'Main'
  },
  appointment: {
    header: 'Make an appointment...',
    name: 'First and last names',
    phone: 'Phone',
    phoneOption: 'Phone (any messenger)',
    contact: 'Contact',
    nickname: 'Nickname',
    contactOption: 'Phone / nickname',
    email: 'Email',
    date: 'Date',
    datesubscr: 'Approximate',
    time: 'Local time',
    service: 'Service',
    message: 'Message',
    checkbox: 'Mark this checkbox',
    submit: 'OK',
    instructions: 'Required fields: name and any contact information.',
    explanation: 'The date and time of the first trial consultation are indicative and may change by mutual agreement.\nNo personal data entered in this form is stored on the site or transmitted to third parties for promotional purposes.\nContact information is used only for contacting you and is saved only in my personal mailbox.',
    selectClear: 'Clear selection'
  },
  contact: {
    header: 'Contact',
    phoneLabel: 'Phone'
  },
  services: []
} as IIndexPage;
