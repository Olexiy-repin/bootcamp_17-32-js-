'use strict';

import localStorageApi from './localstorage';

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
const contactFormEl = document.querySelector('.js-contact-form');
const formData = {};

const fillContactFormElements = form => {
  const formDataFromLocalStorage = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY);
  const formElements = form.elements;

  for (const key in formDataFromLocalStorage) {
    if (formDataFromLocalStorage.hasOwnProperty(key)) {
      formElements[key].value = formDataFromLocalStorage[key];
    }
  }
};

fillContactFormElements(contactFormEl);

const onCotactFormElChange = event => {
  const { target } = event;

  const contactFormElValue = target.value;
  const contactFormElName = target.name;

  formData[contactFormElName] = contactFormElValue;

  localStorageApi.save(CONTACT_FORM_LOCAL_STORAGE_KEY, formData);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  localStorageApi.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
};

contactFormEl.addEventListener('change', onCotactFormElChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);

// import localStorageApi from './localstorage';

// const CONTACT_FORM_LOCAL_STORAGE_KEY = 'formData';
// const contactFormEl = document.querySelector('.js-contact-form');
// const formData = {};

// const fillContactFormFields = form => {
//   const formDataFromLocalStorage = localStorageApi.load(CONTACT_FORM_LOCAL_STORAGE_KEY);
//   const formElements = form.elements;

//   for (const key in formDataFromLocalStorage) {
//     if (formDataFromLocalStorage.hasOwnProperty(key)) {
//       formElements[key].value = formDataFromLocalStorage[key];
//     }
//   }
// };

// fillContactFormFields(contactFormEl);

// const onFormElChange = event => {
//   const { target } = event;

//   const formElValue = target.value;
//   const formElName = target.name;

//   formData[formElName] = formElValue;

//   localStorageApi.save(CONTACT_FORM_LOCAL_STORAGE_KEY, formData);
// };

// const onContactFormSubmit = event => {
//   event.preventDefault();

//   const { currentTarget } = event;

//   localStorageApi.remove(CONTACT_FORM_LOCAL_STORAGE_KEY);
//   currentTarget.reset();
// };

// contactFormEl.addEventListener('change', onFormElChange);
// contactFormEl.addEventListener('submit', onContactFormSubmit);
