<script>
    import axios from 'axios'
    import ProductItem from './ProductItem.vue'

    export default {
        components: {
            ProductItem
        },
        data() {
            return {
                loading: true,
                products: [],
                productClass: 'product-item',
            }
        },
        methods: {
            async getProducts() {
                axios.get('https://fakestoreapi.com/products')
                    .then(response => {
                        this.products = response.data
                        this.loading = false
                })
            },
            products() {
                return this.loading ? 'Loading...' : this.products
            }
        },
        mounted() {
            this.getProducts()
        },
    }

</script>

<template>
    <main>
        <div class="product-list">
            <!-- <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
                :productClass="productClass">
                <template #title>
                    product.title
                </template>
            </ProductItem> -->
            <div v-if="loading">
                <!-- <img src="loading.gif" alt="Loading..."> -->
                loading...
            </div>
            <div v-else v-for="product in products"
                    :key="product.id" :class="productClass">
                    <!-- {{ product.title }} -->
                    <ProductItem
                        :product="product"
                        :productClass="productClass">
                        <template #productImage>
                            <img :src="product.image" alt="product.title" id="single">
                        </template>
                        <template #title>
                            {{ product.title }}
                        </template>
                        <template #description>
                            <i class="pi pi-shopping-bag"></i>{{ product.description }}
                        </template>
                        <template #price>
                            Price: Ksh {{ product.price * 127 }}
                        </template>
                        <template #category>
                            <i class="pi pi-tag"></i>{{ product.category }}
                        </template>
                        <template #link>
                            <div>
                                <router-link :to="'/product/' + product.id">View</router-link>
                            </div>
                        </template>
                    </ProductItem>
            </div>

        </div>
    </main>
</template>

<style>
    #single{
        /* width : 100%; */
        width: 400px;
        height: 400px;
    }
    .product-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .product-item{
        flex-basis: 33.3333%;
        justify-content: space-between;
        /* width: 50%; */
        margin: 1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }


</style>