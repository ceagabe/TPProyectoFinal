const { createApp } = Vue
createApp({
    data() {
        return {
            url: "https://www.googleapis.com/books/v1/volumes",
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
            .catch(error =>
                this.error = true
            );
    },
    buscar() {
        this.fetchdata(this.url + "?q=" + this.tema + "+" + this.key)
    }
},
created() {
    this.fetchdata(this.url + "?q=" + this.tema + "+" + this.key)
}

}).mount('#app')
