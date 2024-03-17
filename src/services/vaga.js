import api from './api';

export const getVagaLista = async () => {
    try {
      const response = await api.get('/vaga/');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar vagas: ' + error.message);
    }
  };
  
 
  export const getVagaDetalhe = async (id) => {
    try {
      const response = await api.get(`/vaga/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao obter detalhes da vaga: ' + error.message);
    }
  };

  export const postVaga = async (dadosvaga) => {
    try {
      const response = await api.post('/vaga/', dadosvaga);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar vaga: ' + error.message);
    }
  };
  
  export const patchVaga = async (id, dadosvaga) => {
    try {
      const response = await api.patch(`/vaga/${id}/`, dadosvaga);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar vaga: ' + error.message);
    }
  };