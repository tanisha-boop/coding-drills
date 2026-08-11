function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function DoSomething() {
    console.log("Processing the food order...");

    await wait(2000);

    console.log("Food order is ready!");
}

async function placeOrder() {
    console.log("Customer placed an order.");
    console.log("Order received. You can continue browsing the menu.");

    await DoSomething();

    console.log("Customer can now pick up the order.");
}

placeOrder();