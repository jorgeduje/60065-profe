import axios from "axios";
import { useEffect, useState } from "react";

const FetchingAsync = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     const peticion = () => {
  //       const getUsers = axios.get("https://jsonplaceholder.org/users");
  //       getUsers.then((res) => setUsers(res.data)).catch( err => );
  //     };

  //     peticion();
  //   }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.org/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("termino el try catch");
      }
    };

    getUsers();
  }, []);
  console.log(users);
  return <div>FetchingAsync</div>;
};

export default FetchingAsync;
