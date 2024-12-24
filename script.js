let inventory = [];

// Function to add an item to the inventory
function addItem(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemLocation = document.getElementById('item-location').value;

    const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        location: itemLocation
    };

    inventory.push(newItem);
    displayInventory();
    document.getElementById('add-item-form').reset();
}

// Function to display the inventory
function displayInventory() {
    const inventoryTableBody = document.getElementById('inventory-table').querySelector('tbody');
    inventoryTableBody.innerHTML = '';

    inventory.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.location}</td>
        `;
        inventoryTableBody.appendChild(row);
    });
}

// Event listener for adding items
document.getElementById('add-item-form').addEventListener('submit', addItem);
