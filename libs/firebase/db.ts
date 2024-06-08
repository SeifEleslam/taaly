import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import firebase_app from "./config";

const db = getFirestore(firebase_app);

export const getDocsByFilters = async (
  docName: string,
  filters: Object = {}
) => {
  const querySnapshot = await getDocs(
    query(
      collection(db, docName),
      ...Object.entries(filters).map((filter) =>
        where(filter[0], "==", filter[1])
      )
    )
  );
  if (querySnapshot.empty) {
    return null;
  }
  const docs = querySnapshot.docs.map((doc) => doc.data());
  return docs;
};
