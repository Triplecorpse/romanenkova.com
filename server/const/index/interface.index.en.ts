import {IIndexData} from "../../../_interface/IIndexData";

export default {
  rootLink: ['online', 'psychologist'],
  nav: [
    {header: 'About me', anchor: 'about'},
    {header: 'Services', anchor: 'services'},
    {header: 'Diplomas', anchor: 'diplomas'},
    // {header: 'Articles', anchor: 'articles'},
    {header: 'Contact', anchor: 'contacts'}
  ],
  language: {
    codeISO2: 'en',
    locale: 'GB',
    nativeName: 'English'
  },
  pageMetadata: {
    description: 'Online Counseling & Therapy',
    position: 'Psychologist',
    firstName: 'Iryna',
    lastName: 'Romanenkova',
    rootPageTitle: 'Main'
  },
  appointment: {
    header: 'Make an appointment...',
    name: 'First and last names *',
    phone: 'Phone',
    phoneOption: 'Other messenger',
    contact: 'Contact',
    nickname: 'Nickname',
    contactOption: 'Phone / Nickname',
    email: 'Email *',
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
    phoneLabel: 'Phone',
    items: []
  },
  availableLanguages: [],
  services: [],
  schedule: [],
  cookies: {
    header: 'Would you like to allow cookies?',
    options: [
      {
        header: 'Allow tracking with Google Analytics',
        subscr: 'An anonymous statistics will be sent to Google Analytics',
        items: ['Your IP-based location', 'Your system data (OS, browser, platform etc)']
      },
      {
        header: 'Allow site\'s cookies',
        subscr: 'Save selected language'
      },
      {
        header: 'Don\'t show again for 1 week',
        subscr: 'Requires setting of cookie'
      }
    ]
  },
  footer: {
    designed: 'Designed by: <strong><a href="https://www.behance.net/Aleksandr_Gaidai" target="_blank">Oleksandr Gaidai</a></strong>',
    qna: 'Ask a question or leave a comment',
    termspolicy: 'Terms & Policy'
  },
  tcIsLoading: 'Loading...'
} as IIndexData;
