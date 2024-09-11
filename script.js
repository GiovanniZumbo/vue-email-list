const { createApp } = Vue

createApp({

    data() {
        return {

            randomEmails: [],
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',

        }
    },

    methods: {

        getRandomEmails() {

            axios.get(this.apiUrl)

            for (let i = 0; i < 10; i++) {

                axios.get(this.apiUrl)

                    .then(response => {
                        this.randomEmails.push(response.data.response);
                    })
            }
            console.log(this.randomEmails)

        },
    },

    mounted() {
        this.getRandomEmails();
    },

}).mount('#app')

