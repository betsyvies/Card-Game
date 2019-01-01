/* Esta acción obtiene el id de la carta cliqueda */
export function getIdCard(ids) {
  return {
    type: 'GET_ID_CARD',
    ids
  };
}
