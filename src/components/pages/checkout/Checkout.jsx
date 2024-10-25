import { useState } from "react";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    console.log("se envia");
    // comunicarnos con la api
    console.log(userInfo);
  };

  // const capturarNombre = (evento) => {
  //   // setName(evento.target.value);
  //   // setUserInfo(evento.target.value); // ---> "jorge"
  //   // setUserInfo({ name: evento.target.value }); // ---> {name: "Jorge"}
  //   setUserInfo({ ...userInfo, name: evento.target.value });
  //   // ---> { email: "", phoneNumber:"", name:"Jorge"}
  // };

  // const capturarEmail = (evento) => {
  //   setUserInfo({ ...userInfo, email: evento.target.value });
  // };

  // const capturarTelefono = (evento) => {
  //   setUserInfo({ ...userInfo, phoneNumber: evento.target.value });
  // };

  const capturarInfo = (evento) => {
    // value --> jorge@gmail.com
    // name ---> email
    // console.log(evento.target.value);
    // console.log(evento.target.name);

    // const { target } = evento;
    // const { name, value } = target;

    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="jorge duje"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="jorge@gmail.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="1155444878"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <button>comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
