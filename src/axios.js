import axios from "axios";

const instance = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // dev code
    axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_DEVELOPMENT}/api/v1`;
  } else {
    // production code
    axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_PRODUCTION}/api/v1`;
  }

  if (false) {
    axios.interceptors.request.use(
      (request) => {
        console.log(request);
        // Edit request config
        return request;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        console.log(response);
        // Edit request config
        return response;
      },
      (error) => {
        console.log(error);
        console.log(error.response);
        return Promise.reject(error);
      }
    );
  }
};

export default instance;
