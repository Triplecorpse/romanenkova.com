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
  diplomas: {
    header: 'Diplomas and certificates',
    button: 'View All'
  },
  about: {
    header: '',
    button: 'About me'
  },
  review: {
    header: 'Feedback',
    button: 'Add Feedback...',
  },
  contact: {
    header: 'Contact',
    phoneLabel: 'Phone'
  },
  reviewModal: {
    header: 'Leave Feedback',
    name: 'Full name',
    namesubscr: 'If you don\'t want to publish your name, leave it blank or enter your nickname',
    email: 'Email',
    emailsubscr: 'Is not published',
    review: 'Feedback',
    submit: 'Submit feedback',
    explanation: 'The email field is not published and is not stored on the site database. However, it can be stored in my personal mailbox and will be used only for communicating with you.\nYour name will be displayed on the website in the Reviews section exactly as it is entered by you. If you wish to remain anonymous, leave the field blank or simply enter your nickname.',
  },
} as IIndexPage;
