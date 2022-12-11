let isUpdate = false;
let contact = {};
window.addEventListener('DOMContentLoaded',(event) => {
    const flname = document.querySelector('#flname');
    const nameError = document.querySelector('.name-error');
    flname.addEventListener('input',function(){
        let name = document.querySelector('#flname').value;
        if (flname.value.length == 0) {
            nameError.textContent = "";
            return;
        }
        try {
            (new Contact()).fullName = name;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    });

    const phnumber = document.querySelector('#phnumber');
    const phnumberError = document.querySelector('.phnumber-error');
    phnumber.addEventListener('input',function(){
        let phoneNumber = document.querySelector('#phnumber').value;
        if (phnumber.value.length == 0) {
            phnumberError.textContent = "";
            return;
        }
        try {
            (new Contact()).phone = phoneNumber;
            phnumberError.textContent = "";
        } catch (e) {
            phnumberError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input',function(){
        let address1 = document.querySelector('#address').value;
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new Contact()).address = address1;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

    checkForUpdate();
})

const save = () => {
    try {
        let personContact = createContact();
        createAndUpdateStorage(personContact);
    } catch(e) {
        return;
    }
}

const createContact = () => {
    let personContact = new Contact();
    try {
        personContact._fullName = getInputValueById('#flname');
    } catch (e) {
        setTextValue('.name-error',e);
    }

    try {
        personContact._phone = getInputValueById('#phnumber');
    } catch (e) {
        setTextValue('.phnumber-error',e);
    }

    try {
        personContact._address = getInputValueById('#address');
    } catch (e) {
        setTextValue('.address-error',e);
    }

    personContact._city = getInputValueById('#city');
    personContact._state = getInputValueById('#state');
    personContact._zip = getInputValueById('#zipcode');
    alert(personContact.toString());
    return personContact;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const resetForm = () => {
    setValue('#flname','');
    setValue('#phnumber','');
    setValue('#address','');
    setValue('#city','Select City');
    setValue('#state','Select State');
    setValue('#zipcode','');
}

const setValue = (id,value) => {
    let element = document.querySelector(id);
    return element.value = value;
}

const setTextValue = (id,value) => {
    let element = document.querySelector(id);
    element.textContent = value;
}

function createAndUpdateStorage(personContact) {

    let contactList = JSON.parse(localStorage.getItem("ContactList"));

    if(contactList != undefined){
        contactList.push(personContact);
    } else {
        contactList = [personContact]
    }

    alert(contactList.toString());
    localStorage.setItem("ContactList",JSON.stringify(contactList));
}

const checkForUpdate = () => {
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson ? true : false;
    if(!isUpdate) return;
    contact = JSON.parse(contactJson);
    setForm();
}

const setForm = () => {
    setValue('#flname',contact._fullName);
    setValue('#phnumber',contact._phone);
    setValue('#address',contact._address);
    setValue('#city',contact._city);
    setValue('#state',contact._state);
    setValue('#zipcode',contact._zip);
}