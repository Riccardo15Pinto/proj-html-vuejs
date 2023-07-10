import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook)

createApp(App)
.component('fontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
