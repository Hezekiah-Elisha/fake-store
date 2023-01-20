<template>
    <div class="product">
        <div class="dis">
            <slot name="productImage" id="img"></slot>
        </div>
        <h1>
            <slot name="title"></slot>
        </h1>
        <p>
            <slot name="description"></slot>
        </p>
        <div class="price">
            <slot name="price"></slot>
        </div>
        <slot name="category"></slot>
        <slot name="link"></slot>
    </div>
</template>

<style scoped>

</style>

