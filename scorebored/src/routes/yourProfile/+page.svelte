<script lang="ts">
    import "./yourProfile.css";
    //@ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    import { onMount } from "svelte";
    import { db } from "$lib/firebase/firebase";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    import { collection, deleteDoc, doc, onSnapshot, QuerySnapshot } from "firebase/firestore";
    
    
    $: charts = [];

    // @ts-ignore
    let currentUser = null;
    onMount( async() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                currentUser = user;            
                
            } else {
                currentUser = null;
                console.log("hihi");
            }
        });
        const colRef = collection(db, "scoreboard");
    
        onSnapshot(colRef, (querySnapshot) => {
            let fbCharts = [];
            querySnapshot.forEach( (doc) => {
                if (doc.data().uid === currentUser.uid){
                    let chart = {...doc.data(), id: doc.id};
                    fbCharts = [chart, ...fbCharts];
                }
            });
            // console.log(fbCharts);
            charts = fbCharts;
            // console.log(charts);
        });
    });
    
    async function deleteChart(chartID: string){
        await deleteDoc(doc(db, "scoreboard", chartID));
    }
</script>


<NavBar />
<div class="yourProfile-background">
    <div class="yourProfile-all">
        <h1 class="yourProfile-header-text">Welcome!</h1>
        <h2 class="yourProfile-header-subtext">Keep up your good work!</h2>
        <!-- user name -->
        
        <table class="yourProfile-table">
            <thead>
                <th class="yourProfile-head-no">No.</th>
                <th class="yourProfile-head-name">Name</th>
                <th class="yourProfile-head-progress">Last edited</th>
                <th class="yourProfile-head-action">Action</th>
            </thead>
            <tbody>
                
                {#each charts as chart, no}
                    <tr>
                    <td class="yourProfile-body-no">{++no}</td>
                    <td class="yourProfile-body-name">{chart.BoardName}</td>
                    <td class="yourProfile-body-progress">{chart.lastEdited.substring(5, 10)}</td>
                    <td>
                        <button class="yourProfile-btn">Edit</button>
                        <a href="/yourProfile/view/{chart.id}"><button class="yourProfile-btn">View</button></a>
                        <button class="yourProfile-btn" on:click={ deleteChart(chart.id) }>Delete</button>
                    </td>
                    </tr>
                    
                {/each}
                <!-- <tr>
                    <td class="yourProfile-body-no">1</td>
                    <td class="yourProfile-body-name">Going to the gym</td>
                    <td class="yourProfile-body-progress">70%</td>
                    <td>
                        <button type="button" class="yourProfile-btn">Edit</button>
                        <a href="/yourProfile/{slug}"><button type="button" class="yourProfile-btn">View</button></a>
                        <button type="button" class="yourProfile-btn">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td class="yourProfile-body-no">2</td>
                    <td class="yourProfile-body-name">Reading book</td>
                    <td class="yourProfile-body-progress">80%</td>
                    <td>
                        <button type="button" class="yourProfile-btn">Edit</button>
                        <button type="button" class="yourProfile-btn">View</button>
                        <button type="button" class="yourProfile-btn">Delete</button>
                    </td>
                </tr> -->
            </tbody>
        </table>
        
    </div>
</div>

<style>
    .yourProfile-background {
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>
