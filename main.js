var app = new Vue({
    el: '#app',
    data: {
        image: "./variant-default.jpg",
        product: "Socks",
        inStock: true,
        details: ["80% cotton", "20% polyester", "Genter-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./variant-green.jpg",
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./variant-blue.jpg",
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});
