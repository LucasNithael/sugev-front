<template>
    <div class="w-full flex items-center justify-center mt-3">
        <div v-for="button in buttons" class="bg-slate-700 w-52 h-96 mr-2 rounded shadow">
            <div class="flex items-center justify-center flex-col h-full">
                <!-- <img :src="button.icon" class="w-10 w-10"/> -->
                <input type="text" placeholder="informe seu CPF"/>
                <button @click="handleButtonClick(button.action)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {{ button.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons:[
                    {name: "Registrar Entrada", action: "registrarEntrada"},
                    {name: "Registrar Saída", action: "registrarSaida"},
                ]
            }
        },
        methods:{
            registrarEntrada(){
                console.log("Registrar Entrada")
            },
            registrarSaida(){
                console.log("Registrar Saída")
            },
            handleButtonClick(action) {
                this[action]();
            }
        }
    }
</script>