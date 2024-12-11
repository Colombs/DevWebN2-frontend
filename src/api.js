import API_BASE_URL from './config';

export const getEventos = async () => {
  const response = await fetch(`${API_BASE_URL}/eventos`);
  return response.json();
};

export const createEvento = async (evento) => {
  const response = await fetch(`${API_BASE_URL}/eventos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(evento),
  });
  return response.json();
};

export const updateEvento = async (id, evento) => {
  const response = await fetch(`${API_BASE_URL}/eventos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(evento),
  });
  return response.json();
};

export const deleteEvento = async (id) => {
  const response = await fetch(`${API_BASE_URL}/eventos/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
