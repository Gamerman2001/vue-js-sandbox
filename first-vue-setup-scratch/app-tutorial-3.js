new Vue({
        el: '#exercise',
        data: {
            value: 0,
            // result: 'still not done'
            addRed: false,
            testingMethod: true,
            namedColor: 'pink',
            styleWidth: '50px'
        },
        computed: {
            result: function () {
               return  this.value !== 37 ? 'still not done' : 'done'
            },
            divClasses: function () {
                return {
                    blue: this.testingMethod
                }
            }
        },
        watch: {
            result: function () {
                let _this = this
                setTimeout(function () {_this.value = 0}, 3000)
            },
            addRed: ()=> {console.log('changed')}
        },

        methods: {
            // testingMethod: ()=> {
            //     console.log('in test')
            //     return true} 
               }
    });