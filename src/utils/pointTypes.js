export const POINT_TYPES = {
  'P': { description: 'Población', icon: '🏠' },
  'I': { description: 'Inicio', icon: '🏁' },
  'F': { description: 'Fin', icon: '🚩' },
  'M': { description: 'Subida', icon: '⛰️' },
  'B': { description: 'Bajada', icon: '🔻' },
  'FM': { description: 'Fin subida', icon: '/Peak' },
  'FB': { description: 'Fin bajada', icon: '📉' },
  'D': { description: 'Desvío', icon: '🔀' },
  'G': { description: 'Gasolinera', icon: '⛽' },
  'R': { description: 'Restaurante', icon: '🍽️' },
  'S': { description: 'Supermercado', icon: '🛒' },
  'H': { description: 'Hotel', icon: '🏨' },
  'C': { description: 'Check point', icon: '📍' }
};

export const getPointTypeInfo = (type) => {
  return POINT_TYPES[type] || { description: 'Desconocido', icon: '❓' };
};