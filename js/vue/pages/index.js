import { createApp, ref, onMounted } from '../../vue.js'
import AppFooter from '../components/footer.js'
import AppHeader from '../components/header.js'
import { API_TARGETS, apiCallAsync } from '../../api.js';

createApp({
    components: {
        AppFooter, AppHeader
    },
    setup() {

        // [{
        //     name: "Sample",
        //     price: "0",
        //     oldPrice: "0",
        //     image: "img/hair/hair3.jpg"
        // }]
        const latestProducts = ref([]);
        const commingSoonProducts = ref([]);


        // Init execution

        apiCallAsync([
            API_TARGETS.LASTEST_PRODUCTS
        ]).then((data) => {
            console.log(data);
            latestProducts.value = data.data[API_TARGETS.LASTEST_PRODUCTS];
        });


        return {
            count: ref(0),
            latestProducts,
            commingSoonProducts
        }
    }
}).mount('#app');