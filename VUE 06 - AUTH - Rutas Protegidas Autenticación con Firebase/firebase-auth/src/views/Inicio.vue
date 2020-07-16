<template>
<div>
    <h1>Lista de tareas</h1>
    <router-link :to="{name: 'agregar'}">
        <b-button block variant="primary">Agregar</b-button>
    </router-link>

    <form @submit.prevent="buscarTarea(texto)">
        <input type="text" placeholder="buscar" class="form-control my-2" v-model="texto" 
        v-on:keyup="buscarTarea(texto)">
    </form>

    <div v-if="carga" class="mt-5">
        <h3>Cargando contenido...</h3>
        <pulse-loader :loading="carga"></pulse-loader>
    </div>

    <ul class="list-group" v-if="!carga">
        <li class="list-group-item" v-for="item of arrayFiltrado" :key="item.id">
            {{item.id}} - {{item.nombre}}
            <div class="float-right">
                <router-link :to="{name: 'editar', params: {id: item.id}}">
                    <b-button variant="warning" class="mx-1">Editar</b-button>
                </router-link>
                <b-button variant="danger" @click="eliminarTarea(item.id)">Eliminar</b-button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import {
    mapActions,
    mapState,
    mapGetters
} from 'vuex'

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
    name: 'Inicio',
    data() {
        return {
            texto: ''
        }
    },
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea', 'buscarTarea'])
    },
    created() {
        this.getTareas()
    },
    computed: {
        ...mapState(['usuario', 'tareas', 'carga']),
        ...mapGetters(['arrayFiltrado'])
    },
    components: {
        PulseLoader
    },
}
</script>
