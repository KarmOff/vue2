new Vue({
    el:'#app',
    data:{
        formData:{
            firstName:"",
            lastName:"",
            url:"https://www.",
            badge:"",
            bookisbn:"",
            technologies: ""
        }
    },
    computed:{
        fullName: function() {
            return this.formData.lastName + " " + this.formData.firstName;
        },
        mytechnologies: function () {
            return this.formData.technologies.split(',');
        }
    }
});
