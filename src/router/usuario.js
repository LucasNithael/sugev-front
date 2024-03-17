const routes = [
    {
      path: '/usuarios',
      name: 'rota de usuarios',
      component: () => import('@/views/usuario/UsuariosView.vue')
    }
  ]
  
  export default routes