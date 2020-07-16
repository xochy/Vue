<template>
<div>
    <h1>Agregar</h1>

    <b-form @submit.prevent="agregarTarea(nombre)">

        <b-form-group id="input-group-name" label="Nombre:" label-for="input-1" description="Debe agregar un nombre para la etiqueta">
            <b-form-input id="input-nombre" type="text" required placeholder="Ingresar nombre" 
            v-model.lazy="$v.nombre.$model" 
            :state="validationName"></b-form-input>

            <b-form-invalid-feedback :state="validationName">
                {{getAgeErrorMessage}}
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationName">
                ¡Parece Correcto!
            </b-form-valid-feedback>
        </b-form-group>

        <b-button type="submit" variant="info" class="ml-2" block :disabled="$v.$invalid || carga">Agregar</b-button>
    </b-form>
    <!-- {{this.options}} -->
</div>
</template>

<script>
import {
    mapActions, mapState
} from 'vuex'
import {
    required,
    minLength
} from 'vuelidate/lib/validators'

export default {
    name: 'Agregar',
    data() {
        return {
            nombre: '',
            options: {
                errorMessages: {
                    required: 'Nombre es requerido',
                    minLength: 'Nombre debe contener al menos 4 caracteres',
                },
            }
        }
    },
    computed: {
        validationName() {
            return this.$v.nombre.$dirty ? !this.$v.nombre.$error : null
        },
        getAgeErrorMessage() {
            if (this.$v.nombre.$error) {
                for (let key in this.$v.nombre.$params) {
                    if (this.$v.nombre[key] === false) {
                        return this.options.errorMessages[key]
                    }
                }
            }
            return null
        },
        ...mapState(['carga'])
    },
    methods: {
        ...mapActions(['agregarTarea'])
    },
    validations: {
        nombre: {
            required,
            minLength: minLength(4)
        }
    }
}
</script>
