import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";

const collectionName = "compras";
const comprasCollection = collection(db, collectionName);

// CREATE
export const createCompra = (obj) => {
  //return addDoc(comprasCollection, obj).id;
  return addDoc(comprasCollection, obj).then(({ id }) => {
    console.log("id compra:  ", id);
    return id;
  });
};

// UPDATE
export const updateCompra = async (id, obj) => {
  await updateDoc(doc(db, collectionName, id), obj);
};

// READ
export const getCompras = async () => {
  const result = await getDocs(query(comprasCollection));
  return result.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getCompraByName = async (name) => {
  const result = await getDocs(
    query(comprasCollection, where("nombre", "==", name))
  );
  const doc = result.docs[0];
  return result.size != 0 ? { ...doc.data(), id: doc.id } : {};
};

export const getCompraById = async (id) => {
  const result = await getDoc(doc(db, collectionName, id));
  return result.data();
};

// DELETE
export const deleteCompra = async (id) => {
  console.log("en deleteCompra", id);
  await deleteDoc(doc(db, collectionName, id));
};
