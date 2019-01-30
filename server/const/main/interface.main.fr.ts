import {Page} from "../../../_interface/IPage";

export default {
  header: 'Consultation et thérapie en ligne',
  diploma: {
    header: 'Diplômes et certificats',
    button: 'Voir tout'
  },
  about: {
    header: 'Psychologue|Iryna Romanenkova',
    button: 'A propos de moi'
  },
  review: {
    header: 'Retour d\'information',
    button: 'Ajouter un commentaire...',
    noReviews: 'Il n\'y a pas de commentaires laissés par la version française du site. Pourquoi ne pas être le premier?',
    anonymous: 'Anonymous'
  },
  reviewModal: {
    header: 'Laisser un commentaire',
    name: 'Nom complet',
    namesubscr: 'Si vous ne souhaitez pas publier votre nom, laissez-le vide ou entrez votre pseudo.',
    email: 'Email',
    emailsubscr: 'N\'est pas publié',
    review: 'Revue *',
    submit: 'Envoyer un commentaire',
    explanation: 'Le champ email n\'est pas publié et n\'est pas stocké dans la base de données du site. Cependant, il peut être stocké dans ma boîte aux lettres personnelle et ne sera utilisé que pour communiquer avec vous.\nVotre nom sera affiché sur le site Web dans la section Avis exactement tel que vous l\'avez entré. Si vous souhaitez rester anonyme, laissez le champ vide ou entrez simplement votre pseudo.'
  }
} as Page.IMainPage;
