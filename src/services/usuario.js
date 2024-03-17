import api from './api';

export const getUsuarioLista = async () => {
    try {
      const response = await api.get('/usuario/');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar usuários: ' + error.message);
    }
  };
  
 
  export const getUsuarioDetalhe = async (id) => {
    try {
      const response = await api.get(`/usuario/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao obter detalhes do usuário: ' + error.message);
    }
  };

  export const postUsuario = async (dadosUsuario) => {
    try {
      const response = await api.post('/usuario/', dadosUsuario);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar usuário: ' + error.message);
    }
  };
  
  export const patchUsuario = async (id, dadosUsuario) => {
    try {
      const response = await api.patch(`/usuario/${id}/`, dadosUsuario);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário: ' + error.message);
    }
  };