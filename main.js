var app = new Vue({
    el: '#app',
    data: {
        image: "./assets.png",
        product: "Socks",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Genter-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
            },
            {
                variantId: 2235,
                variantColor: "blue",
            }
        ],
        cart: 0
    }
});
