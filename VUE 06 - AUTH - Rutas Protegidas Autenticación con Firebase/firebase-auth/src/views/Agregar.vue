<template>
    <div>
        <h1>Agregar</h1>
        <b-form @submit.prevent="agregarTarea(nombre)">
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1" description="Debe agregar un nombre para la etiqueta">
                <b-form-input id="input-nombre" v-model="nombre" :state="validation" type="text" required placeholder="Ingresar nombre"></b-form-input>
                <b-form-invalid-feedback :state="validation">
                    Your user ID must be 5-12 characters long.
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validation">
                    Looks Good.
                </b-form-valid-feedback>
            </b-form-group>
            <b-button type="submit" variant="info" class="ml-2">Agregar</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    computed: {
      validation() {
        return this.nombre.length > 4 && this.nombre.length < 13
      }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
}
</script>