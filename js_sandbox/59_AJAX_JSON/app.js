document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load single customer
function loadCustomer() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'customer.json', true);

    // ON LOAD
    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>NAME: ${customer.name}</li>
            <li>COMPANY: ${customer.company}</li>
            <li>PHONE: ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    // Sent
    xhr.send()
}

// Load multiple customers
function loadCustomers() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'customers.json', true);

    // ON LOAD
    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';
            customers.forEach(customer => {
                output += `<ul>
                <li>ID: ${customer.id}</li>
                <li>NAME: ${customer.name}</li>
                <li>COMPANY: ${customer.company}</li>
                <li>PHONE: ${customer.phone}</li>
                </ul>`;
            });
            document.getElementById('customers').innerHTML = output;
        }
    }

    // Sent
    xhr.send()
}