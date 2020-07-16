<template>
<div class="container">
    <h1>vuelidate</h1>
    <form @submit.prevent="submit">
        <input type="email" placeholder="Ingresa un email" class="form-control my-3" 
        v-model.lazy="$v.email.$model" 
        :class="{'is-invalid': $v.email.$error}">

        <p class="text-danger" v-if="!$v.email.email">Este email es incorrecto</p>
        <p class="text-info" v-if="!$v.email.required">Campo requerido</p>
        <!-- <p>{{ $v.email }}</p> -->
        <input type="password" placeholder="Ingresa contraseña" class="form-control my-3" v-model="$v.password.$model" :class="{'is-invalid': $v.password.$error}">

        <p class="text-danger" v-if="!$v.password.minLength">Minimo {{ $v.password.$params.minLength.min }} caracteres</p>
        <!-- {{ $v.password }} -->

        <input type="password" placeholder="Repite contraseña" class="form-control my-3" v-model="$v.repeatPassword.$model" :class="{'is-invalid': $v.repeatPassword.$error}">

        <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword">Las contraseñas deben ser identicas</p>
        <!-- {{ $v.repeatPassword }} -->

        <b-button variant="info" type="submit" block :disabled="$v.$invalid">Envia</b-button>
        <!-- {{$v.$invalid}}
        {{$v}} -->
    </form>
</div>
</template>

<script>
import {
    required,
    email,
    sameAs,
    minLength
} from "vuelidate/lib/validators";

export default {
    name: 'Validaciones',
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword: {
            sameAsPassword: sameAs('password')
        }
    },
    methods: {
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log('Se genero un error')
            } else {
                console.log('Todos los campos correctos')
                console.log('Enviando informacion...' + this.$v.email.$model + ' ' + this.$v.password.$model)
            }
        }
    },
}
</script>
