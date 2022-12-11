let contactList;
window.addEventListener('DOMContentLoaded',(event) => {
    contactList = getContactDataFromStorage();
    createInnerHtml();
    localStorage.removeItem('editContact');
});

const getContactDataFromStorage = () => {
    return localStorage.getItem('ContactList') ?
                        JSON.parse(localStorage.getItem('ContactList')) : [];
}

const createInnerHtml = () => {
    const header = "<th></th><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    let innerHtml = `${header}`;
    for (const contact of contactList){
        innerHtml = `${innerHtml} 
        <tr>
        <td></td>
        <td>${contact._fullName}</td>
        <td>${contact._address}</td>
        <td>${contact._city}</td>
        <td>${contact._state}</td>
        <td>${contact._zip}</td>
        <td>${contact._phone}</td>
        <td>
            <img id="${contact._id}" onclick="remove(this)" alt="delete"
            src="../assets/icons/delete-black-18dp.svg">
            <img id="${contact._id}" alt="edit" onclick="update(this)"
            src="../assets/icons/create-black-18dp.svg">
        </td>    
    </tr>
    `;
    }
     document.querySelector('#display').innerHTML = innerHtml;
}

const remove = (node) => {
    let contact = contactList.find(cdata=> cdata._id==node._id);
    if(!contact) return;
    const index = contactList.map(cdata => cdata._id).indexOf(contact._id);
    contactList.splice(index,1);
    localStorage.setItem("ContactList",JSON.stringify(contactList));
    createInnerHtml();
}

const update = (node) => {
    let contact = contactList.find(cdata => cdata._id==node._id);
    if(!contact) return;
    localStorage.setItem('editContact',JSON.stringify(contact));
    window.location.replace(site_properties.add_adbk_form_page);
}