import {db} from '../../Sigin/firebase'
import { collection,getDocs, query, where } from 'firebase/firestore'

  export default async function (){
    const collectionRef= collection(db,'products');
     
    const snaps= await getDocs(collectionRef);
    const productos =[];
    for await (const snap of snaps.docs){
      const producto = snap.data();
      producto.id=snap.id;
      productos.push(producto)
      console.log(producto)
    }
 return productos
  }
