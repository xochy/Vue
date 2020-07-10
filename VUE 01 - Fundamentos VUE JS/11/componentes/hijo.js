Vue.component('hijo',{
    template:
    `
    <div class="py-5 bg-success">
        <h4>Componente hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
        <button class="btn btn-danger" @click="numero++">+</button>
    </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Xochy'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre);
    },
})