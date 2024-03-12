import { createApp, ref } from '../../vue.js'
import AppFooter from '../components/footer.js'

createApp({
    components: {
        AppFooter
    },
    setup() {
        const latestProducts = ref([
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair1.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair2.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair3.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair4.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair5.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair6.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair7.jpg"
            },
            {
                name: "addidas New Hammer sole\nfor Sports person",
                price: "$150.00",
                oldPrice: "$210.00",
                image: "img/hair/hair8.jpg"
            },
        ])
        return {
            count: ref(0),
            latestProducts
        }
    }
}).mount('#app');