/*esto es simplemente una muestra de como deberia ser la estructura */

import { createRouter, createWebHistory } from "vue-router"

import Binding from "./components/Binding.vue"
import Estructura from "./components/Estructura.vue"
import Atributos from "./components/Atributos.vue"
import Formulario from "./components/Formulario/index.vue"
import Contadores from "./components/Contadores.vue"
import ApiHttp from "./components/ApiHttp.vue"
import Estado from "./components/Estado/Index.vue"


const routes = [
    /* ----- definición de la ruta raíz ---- */
    /* { path: '/', component: Binding  }, */
    { path: '/', redirect: '/binding'  },
    
    /* ---- definición de las rutas activas ---- */
    { path: '/binding', component: Binding  },
    { path: '/estructura', component: Estructura  },
    { path: '/atributos', component: Atributos  },
    { path: '/formulario', component: Formulario  },
    { path: '/contadores', component: Contadores  },
    { path: '/http', component: ApiHttp  },
    { path: '/estado', component: Estado  },

    /* ------ definición del comportamiento del rutear para rutas no existentes ----- */
    { path: '/:pathmatch(.*)*', redirect: '/binding' }
]

const router = createRouter({
    history: createWebHistory(),
    routes // es igual a -> routes: routes
})

export default router
