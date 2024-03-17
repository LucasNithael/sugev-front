import api from './api';

export const getVeiculoLista = async () => {
    try {
      const response = await api.get('/veiculo/');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar veiculos: ' + error.message);
    }
  };
  
 
  export const getVeiculoDetalhe = async (id) => {
    try {
      const response = await api.get(`/veiculo/${id}/`);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao obter detalhes da veiculo: ' + error.message);
    }
  };

  export const postVeiculo = async (dadosveiculo) => {
    try {
      const response = await api.post('/veiculo/', dadosveiculo);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar veiculo: ' + error.message);
    }
  };
  
  export const patchVeiculo = async (id, dadosveiculo) => {
    try {
      const response = await api.patch(`/veiculo/${id}/`, dadosveiculo);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao atualizar veiculo: ' + error.message);
    }
  };