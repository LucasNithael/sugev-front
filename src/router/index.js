import { createRouter, createWebHistory } from 'vue-router'
import UsuarioRouter from './usuario'
import RegistrarRouter from './registrar'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        ...UsuarioRouter,
        ...RegistrarRouter
    ]
    })

export default routes