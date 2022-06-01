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

const collectionName = "productos";
const productCollection = collection(db, collectionName);

// CREATE
export const createProduct = (obj) => {
  return addDoc(productCollection, obj).id;
};

// UPDATE
export const updateProduct = async (id, obj) => {
  await updateDoc(doc(db, collectionName, id), obj);
};

// READ
export const getProduct = async () => {
  const result = await getDocs(query(productCollection));
  return result.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getProductByName = async (name) => {
  const result = await getDocs(
    query(productCollection, where("nombre", "==", name))
  );
  const doc = result.docs[0];
  return result.size != 0 ? { ...doc.data(), id: doc.id } : {};
};

export const getProductById = async (id) => {
  const result = await getDoc(doc(db, collectionName, id));
  ///return result.data();

  return result.size != 0 ? { ...result.data(), id } : {};
};

export const getProductByCategory = async (category) => {
  console.log("buscando la categoria: ", category);
  const result = await getDocs(
    query(productCollection, where("categoryId", "==", category))
  );

  return result.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

// DELETE
export const deleteProduct = async (id) => {
  console.log("en deleteProduct", id);
  await deleteDoc(doc(db, collectionName, id));
};
