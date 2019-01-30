import {IIndexData} from "../../../_interface/IIndexData";

export default {
  rootLink: ['En ligne', 'psychologue'],
  nav: [
    {header: 'A propos de moi', anchor: 'about'},
    {header: 'Services', anchor: 'services'},
    {header: 'Diplômes', anchor: 'diplomas'},
    // {header: 'Articles', anchor: 'articles'},
    {header: 'Contactez-moi', anchor: 'contacts'}
  ],
  language: {
    codeISO2: 'fr',
    locale: 'FR',
    nativeName: 'Français'
  },
  pageMetadata: {
    description: 'Consultation et thérapie en ligne',
    position: 'Psychologue',
    firstName: 'Iryna',
    lastName: 'Romanenkova',
    rootPageTitle: 'Accueil'
  },
  appointment: {
    header: 'Prendre rendez-vous...',
    name: 'Nom et prénom *',
    phone: 'Téléphone',
    phoneOption: 'Autre messager',
    contact: 'Contact',
    nickname: 'Surnom',
    contactOption: 'Téléphone / Surnom',
    email: 'Email *',
    date: 'Date',
    datesubscr: 'Approximative',
    time: 'Heure locale',
    service: 'Type de consultation',
    message: 'Votre message',
    checkbox: 'Je lis les règles du site',
    submit: 'S\'inscrire',
    instructions: 'Champs obligatoires: nom et informations de contact.',
    explanation: 'La date et l\'heure de la première consultation d\'essai sont indicatives et peuvent changer avec accord mutuel.\nAucune donnée personnelle entrée dans ce formulaire n\'est stockée sur le site ou transmise à des tiers ou à des fins promotionnelles.\nLes informations de contact sont utilisées uniquement pour vous contacter et sont enregistrées uniquement dans ma boîte aux lettres personnelle.',
    selectClear: 'Effacer la sélection'
  },
  contact: {
    header: 'Contactez-moi',
    phoneLabel: 'Téléphone',
    items: []
  },
  availableLanguages: [],
  services: []
} as IIndexData;
