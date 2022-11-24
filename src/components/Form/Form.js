import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles.css";
import Swal from "sweetalert2";

const Form = ({ cerrar, makeOrder }) => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const handleClose = (event) => {
    event.preventDefault();
    cerrar(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formArray = [ name.length > 2, adress.length > 3, phone.length > 2 ];
    for( let i = 0; i < formArray.length; i++ ){
      if(formArray[i] === false){
        Swal.fire({
          title:"Hay un error en el formulario",
          confirmButtonColor:"#BF9270",
          icon:'error'
        });
        return
      }
    }
    if (email === reEmail) {
      makeOrder(name, adress, phone, email);
      cerrar(false);
    } else {
      Swal.fire({
        title:"El Email no coincide",
          confirmButtonColor:"#BF9270",
          icon:'error'
      });
    }
  };
  return (
    <div className="modal">
      <form className="modal-content">
        <p className="form-title">Personal information:</p>
        <input
          className="inputs-form"
          placeholder="Name..."
          value={name}
          onChange={(text) => setName(text.target.value)}
        />
        <p className="form-title">Contact information</p>
        <input
          className="inputs-form"
          placeholder="Address..."
          value={adress}
          onChange={(text) => setAdress(text.target.value)}
        />
        <input
          className="inputs-form"
          placeholder="Phone..."
          value={phone}
          onChange={(text) => setPhone(text.target.value)}
        />
        <input
          className="inputs-form"
          placeholder="Email..."
          value={email}
          onChange={(text) => setEmail(text.target.value)}
        />
        <input
          className="inputs-form"
          placeholder="Confirm email..."
          value={reEmail}
          onChange={(text) => setReEmail(text.target.value)}
        />
        <div className="form">
          <Button
            className="form-buttons"
            style={{ color: "#fff", backgroundColor: "#BF9270" }}
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            Submit
          </Button>
          <Button
            className="form-buttons"
            style={{ color: "#fff", backgroundColor: "#BF9270" }}
            onClick={(event) => {
              handleClose(event);
            }}
          >
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
