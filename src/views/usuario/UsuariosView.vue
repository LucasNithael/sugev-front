<template>
    <div class="center-screen">
      <div class="container">
        <div class="form-group">
          <div class="group">
            <input
              v-model="userCPF"
              type="text"
              class="input"
              required
            >
            <span class="highlight" />
            <span class="bar" />
            <label>CPF do usuário</label>
            <button @click="buscarUsuario">
              Buscar dados do Usuário Cadastrado
            </button>
            <!-- SideBar component placeholder -->
            <!-- Seu componente SideBar deve ser referenciado aqui -->
            <div class="mensagem">
              {{ mensagem }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- Segundo container para exibir as informações do usuário -->
      <div
        v-if="userData"
        class="container user-data"
      >
        <div>
          <h2>Informações do Usuário</h2>
          <p>Matrícula: {{ userData.matricula }}</p>
          <p>Nome: {{ userData.first_name }} {{ userData.last_name }}</p>
          <!-- Outras informações que você deseja exibir -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ListarUsuarioPorCPF',
    data() {
      return {
        userCPF: '',
        mensagem: '',
        userData: null,
      };
    },
    methods: {
      async buscarUsuario() {
        try {
          if (this.userCPF.trim() === '') {
            console.error('Por favor, insira o CPF do usuário.');
            this.mensagem = 'Por favor, insira o CPF do usuário.';
            return;
          }
  
          const response = await axios.get(`http://127.0.0.1:8000/api/user/${this.userCPF}`);
  
          console.log('Dados do usuário:', response.data);
          this.userData = response.data;
          this.mensagem = '';
  
          this.userCPF = ''; 
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
          this.mensagem = 'Erro ao buscar usuário';
          this.userData = null; 
        }
      },
    },
  };
  </script>
  
  <style>
  
  /* .user-data {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  } */
  
  </style>