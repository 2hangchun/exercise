export default {
    methods: {
        lend(money) {
            this.money -= money;
            this.$parent.money += money;
        },
    },
}