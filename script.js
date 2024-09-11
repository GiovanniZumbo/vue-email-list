const { createApp } = Vue

createApp({

    data() {
        return {
            randomEmail: '',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',

        }
    },

    methods: {

        getRandomEmail() {
            axios.get(this.apiUrl)

                .then(response => {
                    console.log(response.data.response);
                    this.randomEmail = response.data.response
                })
        },

    },

    mounted() {
        this.getRandomEmail();
    },

}).mount('#app')

