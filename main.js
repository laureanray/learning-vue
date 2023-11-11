Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">
                <h1> {{ product }}</h1>
                <p v-if="inStock"> In Stock </p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details"> {{ detail }}</li>
                </ul>

                <div @mouseover="updateProduct(index)" class="color-box" v-for="(variant, index) in variants"
                    :key="variant.variantId" :style="{ backgroundColor: variant.variantColor}">
                </div>

                <div class="cart">
                    <p> Cart ({{cart}})</p>
                </div>

                <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock}"> Add to
                    cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Genter-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: "./variant-green.jpg",
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: "./variant-blue.jpg",
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});

var app = new Vue({
    el: '#app',
});

