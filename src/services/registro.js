import api from './api';

export const getRegistroLista = async () => {
    try {
      const response = await api.get('/registro/');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar registro: ' + error.message);
    }
  };

export const getRegistroDetalhe = async (id) => {
  try {
    const response = await api.get(`/registro/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao obter detalhes do registro: ' + error.message);
  }
};

export const postRegistro = async (dadosRegistro) => {
    try {
      const response = await api.post('/registro/', dadosRegistro);
      return response.data;
    } catch (error) {
      throw new Error('Erro ao criar registro: ' + error.message);
    }
  };

export const patchRegistro = async (id, dadosRegistro) => {
  try {
    const response = await api.patch(`/registro/${id}/`, dadosRegistro);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar registro: ' + error.message);
  }
};

// export const deleteRegistro = async (id) => {
//   try {
//     const response = await api.delete(`/registro/${id}/`);
//     return response.data;
//   } catch (error) {
//     throw new Error('Erro ao excluir registro: ' + error.message);
//   }
// };
