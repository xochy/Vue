<template>
<div>
    <h1>Ingreso de Usuarios</h1>
    <form @submit.prevent="ingresoUsuario({ email: $v.email.$model, pass: $v.pass.$model})" class="form-inline">
        <input type="email" v-model="$v.email.$model" placeholder="Ingresa un email" class="form-control my-2">
        <small class="text-info d-block" v-if="!$v.email.required">Campo Requerido</small>
        <small class="text-danger d-block" v-if="!$v.email.email">Email no válido</small>

        <input type="password" v-model="$v.pass.$model" placeholder="Ingresa una contraseña" class="form-control my-2">
        <small class="text-info d-block" v-if="!$v.pass.required">Campo Requerido</small>
        <small class="text-danger d-block" v-if="!$v.pass.minLength">Minimo 4 caracteres</small>

        <button type="submit" class="btn btn-info my-2 btn-block" :disabled="$v.$invalid">Acceder</button>
    </form>
    <p v-if="error === 'auth/user-not-found'">Usuario incorrecto</p>
    <p v-if="error === 'auth/wrong-password'">Contraseña incorrecta</p>
</div>
</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex'
import {
    required,
    minLength,
    email
} from 'vuelidate/lib/validators'

export default {
    name: 'Ingreso',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['ingresoUsuario'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations: {
        email: {
            required,
            email
        },
        pass: {
            required,
            minLength: minLength(4)
        }
    }
}
</script>
