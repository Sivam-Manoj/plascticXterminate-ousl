document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#app',
    data: {
        comment: {
            name: '',
            email: '',
            message: ''
        },
        submitted: false,
        submittedComments: [] 
    },
    methods: {
        submitComment() {
            this.submittedComments.push({
                name: this.comment.name,
                email: this.comment.email,
                message: this.comment.message
            });
            this.comment.name = '';
            this.comment.email = '';
            this.comment.message = '';
            this.submitted = true;
        }
    }
});
});