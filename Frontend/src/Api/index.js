import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: `${import.meta.env.VITE_BASEURL}`,
  withCredentials: true,
});

const useAxiosePublic = () => {
  return axiosPublic;
};
export default useAxiosePublic;

// import axios from 'axios';

// const useAxiosePublic = () => {
//   return axios.create({
//     baseURL: `${import.meta.env.VITE_BASEURL}`, // Replace with your backend URL
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export default useAxiosePublic;
