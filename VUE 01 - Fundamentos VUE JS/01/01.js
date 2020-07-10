const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con VUE',
        frutas: [{
                nombre: 'Pera',
                cantidad: 10
            },
            {
                nombre: 'Manzana',
                cantidad: 0
            },
            {
                nombre: 'Plátano',
                cantidad: 5
            }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            })
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            this.nuevaFruta = '';
            return this.total;
        }
    },
})