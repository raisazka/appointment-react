const onRequest = (config) => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
}

const onRequestError = (error) => {
  console.error(`[request error] [${JSON.stringify}]`);
  return Promise.reject(error);
}

const onResponse = (response) => {
  return response;
}

const onResponseError = async (error) => {
  return Promise.reject(error);
}

export const setupInterceptor = (
  axiosInstance 
) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}