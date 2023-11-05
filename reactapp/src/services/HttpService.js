import axios from 'axios';

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

const _axios = axios.create({ baseURL: 'https://localhost:7098/' });
const configure = () => {
  _axios.interceptors.request.use((config) => {
    config.timeout = 1000 * 60 * 5;
    // Eğer kullanıcı oturumu ve kimlik doğrulama ile ilgili işlemleri kullanmıyorsanız bu kısmı kaldırabilirsiniz.
    // Eğer başka bir şekilde kimlik doğrulama yapmayı düşünmüyorsanız, bu bölümü silmek isteyebilirsiniz.
  });
};

const getAxiosClient = () => _axios;

const HttpService = {
  HttpMethods,
  configure,
  getAxiosClient,
};

export default HttpService;



