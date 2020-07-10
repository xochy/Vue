<template>
    <div>
        <h1>Galeria de fotos</h1>

        <router-link :to="{ name: 'Pictures', params: {id: picture} }" 
            v-for="(picture, index) of pictures" :key="index">
            <button>foto {{picture}}</button>
        </router-link>

        <Picture />

        <button @click="home">Home</button>
        <button @click="previous">Previous</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>
import Picture from '@/components/Picture.vue'

export default {
    name: 'Pictures',
    components: {
        Picture
    },
    data() {
        return {
            pictures: [1, 2, 3]
        }
    },
    methods: {
        home() {
            this.$router.push('/')
        },
        previous() {
            this.$router.go(-1);
        },
        next() {
            this.$router.go(1);
        }
    },
}
</script>