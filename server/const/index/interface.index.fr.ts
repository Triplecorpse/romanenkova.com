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
    selectClear: 'Effacer la sélection',
    agree: ['J\'ai lu et j\'accepte', 'Politique de confidentialité']
  },
  contact: {
    header: 'Contactez-moi',
    phoneLabel: 'Téléphone',
    items: []
  },
  availableLanguages: [],
  services: [],
  schedule: [],
  cookies: {
    header: 'Voulez-vous autoriser les cookies?',
    options: [
      {
        header: 'Autoriser le suivi avec Google Analytics',
        subscr: 'S\'il y avait une session précédente avec votre consentement, les cookies de GA resteront. Cependant, vous ne serez pas suivi. Des statistiques anonymes seront envoyées à Google Analytics',
        items: ['Votre emplacement IP', 'Vos données système (système d\'exploitation, navigateur, plate-forme, etc.)'],
        model: true,
        entityId: 'ga'
      },
      {
        header: 'Autoriser les cookies du site',
        subscr: 'Enregistrer la langue sélectionnée',
        model: true,
        entityId: 'site'
      },
      {
        header: 'Ne plus montrer pendant une semaine',
        subscr: 'Nécessite la configuration d\'un cookie',
        model: true,
        entityId: 'save'
      }
    ],
    privacyPolicy: 'Veuillez lire attentivement notre politique de confidentialité afin de bien comprendre comment nous recueillons, stockons et utilisons les données personnelles.'
  },
  footer: {
    designed: 'Conçu par: <strong><a href="https://www.behance.net/Aleksandr_Gaidai" target="_blank">Oleksandr Gaidai</a></strong>',
    qna: 'Poser une question ou laisser un commentaire',
    termspolicy: 'Politique de confidentialité'
  },
  tcIsLoading: 'Chargement...'
} as IIndexData;
