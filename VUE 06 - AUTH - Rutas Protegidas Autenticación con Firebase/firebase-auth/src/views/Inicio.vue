<template>
    <div>
        <h1>Lista de tareas</h1>
        <router-link :to="{name: 'agregar'}">
            <b-button block variant="primary">Agregar</b-button>
        </router-link>
        <ul class="list-group m-5">
            <li class="list-group-item" v-for="item of tareas" :key="item.id">
                {{item.id}} - {{item.nombre}}
                <router-link :to="{name: 'editar', params: {id: item.id}}">
                    <b-button pill variant="warning" class="mx-2">Editar</b-button>
                </router-link>
                <b-button pill variant="danger" class="mx-2" @click="eliminarTarea(item.id)">Eliminar</b-button>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Inicio',
    methods: {
        ...mapActions(['getTareas', 'eliminarTarea'])
    },
    created() {
        this.getTareas()
    },
    computed: {
        ...mapState(['usuario', 'tareas'])
    },
}
</script>