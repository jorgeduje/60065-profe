import { useEffect, useState } from "react";

const FetchingData = () => {
  const [arrayUsuarios, setArrayUsuarios] = useState([]);

  useEffect(() => {
    const getUsers = fetch("https://jsonplaceholder.org/users");

    getUsers
      .then((res) => res.json())
      .then((usuarios) => {
        setArrayUsuarios(usuarios);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const getUser = fetch("https://jsonplaceholder.org/users/2");
    getUser.then((res) => res.json()).then((user) => console.log(user));
  }, []);

  const createUser = () => {
    let user = {
      firstname: "Pepito",
      lastname: "Davis",
      email: "emilydavis@example.com",
      birthDate: "1974-11-30",
      login: {
        uuid: "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
        username: "emilydavis",
        password: "jsonplaceholder.org",
        md5: "c1328472c5794a25723600f71c1b4586",
        sha1: "35544a31cc19bd6520af116554873167117f4d94",
        registered: "2022-07-10T11:21:20.033Z",
      },
      address: {
        street: "321 Maple Street",
        suite: "Apt. 50",
        city: "Anytown",
        zipcode: "12345-6789",
        geo: {
          lat: "42.9012",
          lng: "-71.5678",
        },
      },
      phone: "(555) 555-3456",
      website: "www.emilydavis.com",
      company: {
        name: "GHI Corporation",
        catchPhrase: "Your success is our priority",
        bs: "Consulting",
      },
    };
    fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(user), // "{ firstname: "pepito" }"
    });
  };
  const deleteUser = () => {
    fetch("https://jsonplaceholder.org/users/2", {
      method: "DELETE",
    });
  };
  const updateUser = () => {
    let user = {
      firstname: "Pepito",
      lastname: "Davis",
      email: "emilydavis@example.com",
      birthDate: "1974-11-30",
      login: {
        uuid: "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
        username: "emilydavis",
        password: "jsonplaceholder.org",
        md5: "c1328472c5794a25723600f71c1b4586",
        sha1: "35544a31cc19bd6520af116554873167117f4d94",
        registered: "2022-07-10T11:21:20.033Z",
      },
      address: {
        street: "321 Maple Street",
        suite: "Apt. 50",
        city: "Anytown",
        zipcode: "12345-6789",
        geo: {
          lat: "42.9012",
          lng: "-71.5678",
        },
      },
      phone: "(555) 555-3456",
      website: "www.emilydavis.com",
      company: {
        name: "GHI Corporation",
        catchPhrase: "Your success is our priority",
        bs: "Consulting",
      },
    };
    fetch("https://jsonplaceholder.org/users/2", {
      method: "PUT",
      body: JSON.stringify(user),
    });
  };

  return (
    <div>
      <h1>Aca los usuarios</h1>
      {arrayUsuarios.map((usuario) => {
        return <h2 key={usuario.id}>{usuario.firstname}</h2>;
      })}
      {/* <button onClick={createUser}>Crear</button> */}
    </div>
  );
};

export default FetchingData;
