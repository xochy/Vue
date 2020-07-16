<template>
<div>
    <h1>Registro de usuarios</h1>
    <form @submit.prevent="crearUsuario({email: email, pass: pass1})">
        <input type="email" v-model="$v.email.$model" class="form-control my-2" placeholder="Ingresa un email">
        <small class="text-info d-block" v-if="!$v.email.required">Campo requerido</small>
        <small class="text-danger d-block" v-if="!$v.email.email">Email no válido</small>

        <input type="password" v-model="$v.pass1.$model" class="form-control my-2" placeholder="Ingresa una contraseña">
        <small class="text-info d-block" v-if="!$v.pass1.required">Campo Requerido</small>
        <small class="text-danger d-block" v-if="!$v.pass1.minLength">Minimo 4 caracteres</small>

        <input type="password" v-model="$v.pass2.$model" class="form-control my-2" placeholder="Confirma la contraseña">
        <small class="text-danger d-block" v-if="!$v.pass2.sameAs">Contraseña no coincide</small>

        <button type="submit" :disabled="!desactivar" class="btn btn-info btn-block">Crear usuario</button>
    </form>
    <p v-if="error === 'auth/email-already-in-use'">Correo ya registrado</p>
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
    email,
    sameAs
} from 'vuelidate/lib/validators'

export default {
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: '',
        }
    },
    methods: {
        ...mapActions(['crearUsuario'])
    },
    computed: {
        ...mapState(['error']),
        desactivar() {
            return this.pass1 === this.pass2 && this.pass1 != ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        pass1: {
            required,
            minLength: minLength(4)
        },
        pass2: {
            sameAs: sameAs('pass1')
        }
    }
}
</script>
