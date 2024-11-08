// Sample restaurant data (In a real application, this would come from your backend)
const restaurants = [
    { id: 1, name: "Pizza Place", menu: ["Margherita", "Pepperoni", "Veggie"] },
    { id: 2, name: "Burger Joint", menu: ["Cheeseburger", "Veggie Burger", "Fries"] },
];

// Function to display restaurants
function displayRestaurants() {
    const restaurantContainer = document.getElementById('restaurants');
    
    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.className = 'restaurant';
        
        const restaurantName = document.createElement('h3');
        restaurantName.textContent = restaurant.name;

        const menuList = document.createElement('ul');
        restaurant.menu.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = item;

            // Add order button for each item
            const orderButton = document.createElement('button');
            orderButton.textContent = 'Order';
            orderButton.onclick = () => showOrderDetails(restaurant.id, item);
            
            menuItem.appendChild(orderButton);
            menuList.appendChild(menuItem);
        });

        restaurantDiv.appendChild(restaurantName);
        restaurantDiv.appendChild(menuList);
        restaurantContainer.appendChild(restaurantDiv);
    });
}

// Function to show order details
function showOrderDetails(restaurantId, item) {
    const orderSection = document.getElementById('order-section');
    const orderDetails = document.getElementById('order-details');

    // Clear previous order details
    orderDetails.innerHTML = '';

    const selectedRestaurant = restaurants.find(r => r.id === restaurantId);
    
    orderDetails.innerHTML = `
        <p>Restaurant: ${selectedRestaurant.name}</p>
        <p>Item Ordered: ${item}</p>
        <p>Status: Pending</p>
    `;

    orderSection.style.display = 'block';
}

// Function to confirm the order (placeholder)
document.getElementById('confirm-order').onclick = function() {
    alert("Order confirmed!");
};

// Initialize the application
displayRestaurants();