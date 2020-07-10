Vue.component('saludo', {
    template:/*jsx*/`
    <div>
    <h1>{{saludo}}</h1>
    <h3>{{saludo}}</h3>
    </div>
    `,
    data(){
        return{
            saludo: 'Hola desde vue'
        }
    }
})