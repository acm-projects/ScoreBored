<script lang="ts">
    import { db } from './lib/firebase.ts';
    import { collection, addDoc, getDocs, doc, setDoc } from 'firebase/firestore';
  
    let firstname = "";
    let lastname = "";
    let email = "";
    let DOB = "";
    let userID = ""; 
  
    let boardname = "Study Progress";
    let xLabel = "Weeks";
    let yLabel = "Points Earned";
    let currentProgress = [0, 25, 50, 75, 100];
    let goalNeeded = 100;
    let isCompleted = true;
  
    async function addUser() {
      try {
        const docRef = await addDoc(collection(db, "Users"), {
          firstname,
          lastname,
          email,
          DOB,
          scoreboards: []
        });
        console.log("User added with ID: ", docRef.id);
        userID = docRef.id;
      } catch (e) {
        console.error("Error adding user: ", e);
      }
    }
  
    async function addScoreboard() {
      if (!userID) {
        console.error("Please add a user first.");
        return;
      }

      try {
        const docRef = await addDoc(collection(db, "Scoreboards"), {
          name: boardname,
          labels: {
            x: xLabel,
            y: yLabel
          },
          currentProgress,
          goalNeeded,
          isCompleted
        });
        
        const userRef = doc(db, "Users", userID);
        const userData = (await userRef.get()).data();
        if (userData) {
          await setDoc(userRef, {
            scoreboards: [...userData.scoreboards, docRef.id]
          }, { merge: true });
        }
        
        console.log("Scoreboard added with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding scoreboard: ", e);
      }
    }
  
    async function fetchData() {
      try {
        const querySnapshot = await getDocs(collection(db, "Scoreboards"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (e) {
        console.error("Error fetching data: ", e);
      }
    }
</script>

<!-- User inputs -->
<input bind:value={firstname} placeholder="First Name" />
<input bind:value={lastname} placeholder="Last Name" />
<input bind:value={email} placeholder="Email" />
<input type="date" bind:value={DOB} placeholder="DOB" />

<!-- Scoreboard inputs -->
<input bind:value={boardname} placeholder="Board Name" />
<input bind:value={xLabel} placeholder="X Label" />
<input bind:value={yLabel} placeholder="Y Label" />
  
<button on:click={addUser}>Add User</button>
<button on:click={addScoreboard}>Add Scoreboard</button>
<button on:click={fetchData}>Fetch Data</button>
