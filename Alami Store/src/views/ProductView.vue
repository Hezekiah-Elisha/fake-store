<script setup>
    import { useRoute } from 'vue-router'
    import axios from 'axios'


    const route = useRoute()

    let prod = []

    const id = parseInt(route.params.id)

    function get_product(myid){
        axios.get(`https://fakestoreapi.com/products/${myid}`)
            .then(response => {
            prod = response.data

            return prod
            // const prod = prod.find(id)
        })
    }
    const theprod = get_product(id) 

</script>

<template>
    <main>
        <h1>{{ theprod.title }}</h1>
    </main>
</template>