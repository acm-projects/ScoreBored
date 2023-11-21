import { doc, getDoc } from "firebase/firestore";
import { db } from "$lib/firebase/firebase";

export async function load({ params }) {
  const docRef = doc(db, "scoreboard", params.slug);
  const docSnap = await getDoc(docRef);
  let chartdb = {
    uid: docSnap.data().uid,
    datapoints: docSnap.data().datapoints,
    timeTarget: docSnap.data().timeTarget,
    X_axis: docSnap.data().X_axis,
    Y_axis: docSnap.data().Y_axis,
    isQuantity: docSnap.data().isQuantity,
    BoardName: docSnap.data().BoardName,
    numTarget: docSnap.data().numTarget,
    chartid: params.slug,
  };
  return {
    chartdb,
  };
}
