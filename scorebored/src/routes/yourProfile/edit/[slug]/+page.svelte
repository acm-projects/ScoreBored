<script lang="ts">
    import "./editChart.css";
    import NavBar from "../../../Navbar/+page.svelte";
    import { doc, updateDoc } from "firebase/firestore";
    import { db } from "$lib/firebase/firebase";

    export let data;
    let changeIndex = 1;
    let changeValue = 1;
    $: chartdb = data.chartdb;

    async function updateChartDatabase() {
        chartdb = data.chartdb;
        if (changeIndex > chartdb.datapoints.length + 1 || changeIndex <= 0){
            alert("Please submit the index in range");
        }
        else {
            const docRef = doc(db, "scoreboard", chartdb.chartid);
            if (changeIndex === chartdb.datapoints.length+1){
                await updateDoc(docRef, {
                    datapoints: [...chartdb.datapoints, changeValue]
                });
            }
            else {
                let newdatapoints = [];
                for (let i = 0; i < changeIndex-1; i++) newdatapoints.push(chartdb.datapoints[i]);
                newdatapoints.push(changeValue);
                for (let i = changeIndex; i < chartdb.datapoints.length; i++) newdatapoints.push(chartdb.datapoints[i]);
                await updateDoc(docRef, {
                    datapoints: newdatapoints
                })
            }
            location.reload();
        }
    }

    function valueSetTo0(){
        changeValue = 0;
    }
    function valueSetTo1(){
        changeValue = 1;
    }

    async function handleEnterKey(event: any){
        if (event.key === "Enter"){
            updateChartDatabase();
        }
    }

</script>

<svelte:window on:keydown={ handleEnterKey }/>

<NavBar />
<div class="editPage-background">
    <div class="editPage-all">
        <h1 class="editPage-header-text">{chartdb.BoardName}</h1>
        <h3 class="editPage-header-subtext">Current {chartdb.X_axis}: {chartdb.datapoints.length+1}</h3>
        <div class="editPage-index-input">
            <span>Which {chartdb.X_axis} to edit?</span>
            <input type = "number" bind:value={ changeIndex } min="1" class="editPage-index-inputbox"/>
        </div>
        {#if chartdb.isQuantity} 
            <div class="editPage-quantity-number-input">
                <span>Number of times: </span>
                <input type = "number" bind:value={ changeValue } min="1" class="editPage-quantity-inputbox"/>
            </div>
        {:else}
            <div class="editChecklistOptions">
                <div class="yes-option-box">
                    <input type="radio" id="yes-select" checked="true" name="radio-box" on:click={ valueSetTo1 }/>
                    <label for="yes-select" class="checklistOptionSurroundBox" >Yes</label>
                </div>

                <div class="no-option-box">
                    <input type="radio" id="no-select" name="radio-box" on:click={ valueSetTo0 }/>
                    <label for="no-select"  class="checklistOptionSurroundBox">No&nbsp</label>
                </div>
            </div>
        {/if}

        <button class="edit-button" on:click={ updateChartDatabase }>Submit</button>
    </div>
</div>

<style>
    .editPage-background{
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>