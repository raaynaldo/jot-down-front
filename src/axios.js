import axios from "axios";

const instance = () => {
  axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER}/api/v1`;

  // axios.interceptors.request.use(
  //   (request) => {
  //     console.log(request);
  //     // Edit request config
  //     return request;
  //   },
  //   (error) => {
  //     console.log(error);
  //     return Promise.reject(error);
  //   }
  // );

  // axios.interceptors.response.use(
  //   (response) => {
  //     console.log(response);
  //     // Edit request config
  //     return response;
  //   },
  //   (error) => {
  //     console.log(error);
  //     console.log(error.response);
  //     return Promise.reject(error);
  //   }
  // );
};

export default instance;
