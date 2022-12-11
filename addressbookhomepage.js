window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const header = "<th></th><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th></th>";
    const innerHtml = `${header}
        <tr>
            <td></td>
            <td>Sarvesh Pednekar</td>
            <td>Lalbaug,Royal Residency complex</td>
            <td>Mumbai</td>
            <td>Maharashtra</td>
            <td>400012</td>
            <td>9594787715</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                src="../assets/icons/delete-black-18dp.svg">
                <img id="1" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.svg">
            </td>    
        </tr>
     `;
     document.querySelector('#display').innerHTML = innerHtml;
}