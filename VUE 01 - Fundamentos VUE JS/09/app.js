const app = new Vue({
    el: '#app',
    data: {
        saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate() {
        console.log('before create')
    },
    created() {
        //? Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
        //? Aún no se puede acceder a "el"
        console.log('created');
    },
    beforeMount() {
        //? Se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        //? Se ejecuta al insertar el DOM.
        console.log('mounted');
    },
    beforeUpdate() {
        //? Se ejecuta al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        //?Se ejecuta al realizar los cambios
        console.log('updated');
    },
    beforeDestroy() {
        //? Se ejecuta antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed() {
        //? Se destruye toda la instancia
        console.log('destroyed');
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    },
})