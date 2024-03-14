import { createApp, ref, onMounted } from '../../vue.js'
import AppFooter from '../components/footer.js'
import AppHeader from '../components/header.js'

createApp({
    components: {
        AppFooter, AppHeader
    },
    setup() {
        return {
        }
    }
}).mount('#app');