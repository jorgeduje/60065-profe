import { useFetch } from "./hooks/useFetch";

const Users = () => {
  const { data: users, loading } = useFetch(
    "https://jsonplaceholder.org/users"
  );

  // console.log(users);
  console.log(loading);
  return <div>hola</div>;
};

export default Users;
// 5000

// "$5.000"

// const convertir = (numero)=>{
//   return convertido
// }
