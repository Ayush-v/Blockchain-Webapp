function client(endpoint, customConfig = {}) {
  const config = {
    method: "GET",
    ...customConfig,
  };

  return fetch(`${endpoint}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default client;
