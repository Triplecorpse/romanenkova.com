import {Page} from "../../../_interface/IPage";

export default {
  header: 'Online Counseling & Therapy',
  diploma: {
    header: 'Diplomas and certificates',
    button: 'View All'
  },
  about: {
    header: 'Psychologist|Iryna Romanenkova',
    button: 'About me'
  },
  review: {
    header: 'Feedback',
    button: 'Add Feedback...',
    noReviews: 'There is no feedback left from the English version of the site. Why not be the first one?',
    anonymous: 'Anonymous'
  },
  reviewModal: {
    header: 'Leave Feedback',
    name: 'Full name',
    namesubscr: 'If you don\'t want to publish your name, leave it blank or enter your nickname',
    email: 'Email',
    emailsubscr: 'Is not published',
    review: 'Feedback *',
    submit: 'Submit feedback',
    explanation: 'The email field is not published and is not stored on the site database. However, it can be stored in my personal mailbox and will be used only for communicating with you.\nYour name will be displayed on the website in the Reviews section exactly as it is entered by you. If you wish to remain anonymous, leave the field blank or simply enter your nickname.'
  }
} as Page.IMainPage;
