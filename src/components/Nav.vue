<template>
    <nav>
        <div class="flex flex-col justify-center items-center">

            <router-link :to="link.url" v-for="link in links" :key="link.name" :href="link.url" class="flex items-center w-full p-3  hover:bg-blue-700">
                <img :src="link.icon" alt="icon" class="w-6 h-6 mr-4">
                <span>{{ link.name }}</span>
            </router-link>

        </div>
    </nav>
</template>

<script>
    import homeIcon from '../assets/icons/home.svg'
    import registrarIcon from '../assets/icons/registrar.svg'
    import usuariosIcon from '../assets/icons/usuarios.svg'
    import vagasIcon from '../assets/icons/vaga.svg'
    export default {
        data(){
            return {
                links: [
                    {name: 'Dashboard', icon: homeIcon, url: '/'},
                    {name: 'Registrar', icon: registrarIcon, url: '/registrar'},
                    {name: 'Usuários', icon: usuariosIcon, url: '/usuarios'},
                    {name: 'Vagas', icon: vagasIcon, url: '/'},
                ]
            }
        }
    }
</script>