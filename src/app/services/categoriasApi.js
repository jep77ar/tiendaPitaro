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

const collectionName = "categorias";
const categoriasCollection = collection(db, collectionName);

// CREATE
export const createCategoria = (obj) => {
  return addDoc(categoriasCollection, obj).id;
};

// UPDATE
export const updateCategoria = async (id, obj) => {
  await updateDoc(doc(db, collectionName, id), obj);
};

// READ
export const getCategorias = async () => {
  const result = await getDocs(query(categoriasCollection));
  return result.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getCategoriaByName = async (name) => {
  const result = await getDocs(
    query(categoriasCollection, where("nombre", "==", name))
  );
  const doc = result.docs[0];
  return result.size != 0 ? { ...doc.data(), id: doc.id } : {};
};

export const getCategoriaById = async (id) => {
  const result = await getDoc(doc(db, collectionName, id));
  return result.data();
};

// DELETE
export const deleteCategoria = async (id) => {
  console.log("en deleteCategoria", id);
  await deleteDoc(doc(db, collectionName, id));
};
