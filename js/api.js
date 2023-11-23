const { createApp } = Vue
createApp({
    data() {
        return {
            url: "https://www.googleapis.com/books/v1/volumes?q=",
            tema: "javascript",
            key: "terms",
            error: false,
            cargando: true,
            datos: [],
        }
    },

    methods: {
        fetchdata(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.datos = data
                    this.cargando = false
                    console.log(url)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                }

                );
        },
        
        buscar() {
            this.fetchdata(this.url + this.tema + "+" + this.key)
        }



    },
    created() {
        this.fetchdata(this.url + this.tema + "+" + this.key)
    }

}).mount('#app')
