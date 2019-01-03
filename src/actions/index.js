/* Esta acción obtiene el id de la carta cliqueda */
export function getIdCard(ids) {
  return {
    type: 'GET_ID_CARD',
    ids
  };
}

/* Esta acción cambia las data de las cartas random */
export function getCardRandom(cardsRandom) {
  return {
    type: 'GET_CARD_RANDOM',
    cardsRandom
  };
}

/* Esta acción cuenta las parejas */
export function countCouples(totalCouples) {
  return {
    type: 'COUNT_COUPLES',
    totalCouples
  };
}