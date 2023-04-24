import axios from "axios";

const BASE_URL = "http://localhost:5000";

export function createTransaction(body, type, user) {
  const transaction = {
    ...body,
    type,
  };

  
  const response = axios
    .post(`${BASE_URL}/nova-transacao`, transaction, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
    .catch((err) => {
      return err.response;
    });
  return response;
}

export function findAllTransactions(user) {
  const response = axios
    .get(`${BASE_URL}/nova-transacao`, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
    .catch((err) => {
      return err.response;
    });

  return response;
}
