const ordenGenerada = (name, adress, phone, email, cart, total) => {
  return {
    buyer: {
      name: name,
      adress: adress,
      phone: phone,
      email: email
    },
    items: cart,
    total: total,
    createdAt: new Date().toLocaleString(),
  };
};

export default ordenGenerada;
