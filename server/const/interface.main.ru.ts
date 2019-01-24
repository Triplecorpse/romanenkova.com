///<reference path="../../_interface/IIndexPage.ts"/>
import {IIndexPage} from "../../_interface/IIndexPage";
import {IMainPage} from "../../_interface/IMainPage";

export default {
  diploma: {
    header: 'Diplomas and certificates',
    button: 'View All'
  },
  about: {
    header: 'Psychologist|Irina Romanenkova',
    button: 'About me'
  },
  review: {
    header: 'Feedback',
    button: 'Add Feedback...'
  },
  reviewModal: {
    header: 'Leave Feedback',
    name: 'Full name',
    namesubscr: 'If you don\'t want to publish your name, leave it blank or enter your nickname',
    email: 'Email',
    emailsubscr: 'Is not published',
    review: 'Feedback',
    submit: 'Submit feedback',
    explanation: 'The email field is not published and is not stored on the site database. However, it can be stored in my personal mailbox and will be used only for communicating with you.\nYour name will be displayed on the website in the Reviews section exactly as it is entered by you. If you wish to remain anonymous, leave the field blank or simply enter your nickname.'
  }
} as IMainPage;
