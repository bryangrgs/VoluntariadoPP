import React from "react";
import { db } from '../Sigin/firebase';
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";


export const ItemDetail= ()=> {
const [productDetail, setProductDetail] = useState({});
useEffect(() => {
const getProduct = async () => {
try{ 
  const docRef = doc(db, "products", "u9IW68bsmcgRW9FkcSTB");
    const docSnap = await getDoc(docRef);
    // const ProductsData1=Object.values(docSnap.data())
    if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    //     Object.values(docSnap.data()).map(e => 
    //       console.log(e) );
          let ProductsData1=Object.values(docSnap.data())
          console.log(ProductsData1)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
      // try {const docRef = doc(db, "products", "u9IW68bsmcgRW9FkcSTB");
    } catch(error){
      console.log(error)
    }
  };
  getProduct()
},);
if (Object.keys(productDetail) !== 0) {
  return <ItemDetail product={productDetail} />;
} else {
  return <h1>Cargando...</h1>;
}

  
  };
