<script lang="ts">
    import './chartPage.css';
    //@ts-ignore
    import NavBar from "../../../Navbar/+page.svelte";
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
    import Page from '../../../+page.svelte';

    export let data;

    $: chartdb = data.chartdb;
    $: successcount = 0;
    $: isQuantity = data.chartdb.isQuantity;
    $: remainingTime = chartdb.timeTarget;
    $: remainingNum = chartdb.numTarget;

    function calculateRate(){
        for (let i = 0; i < chartdb.datapoints.length; i++){
            successcount += chartdb.datapoints[i];
        }
        remainingTime = chartdb.timeTarget - chartdb.datapoints.length;
        remainingNum = chartdb.numTarget - successcount;
    }

    function createChart(){
        let ctx = document.getElementById('real-chart');
        let dataset = data.chartdb.datapoints;
        let chart_label = [];
        let chart_number = [dataset[0]];
        for (let i = 1; i <= dataset.length; i++) {
            chart_label.push(i);
            if (i === dataset.length) break;
            chart_number.push(dataset[i] + chart_number[chart_number.length-1]);
        }

        // @ts-ignore
        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chart_label,
                datasets: [{
                    label: '# of times',
                    data: chart_number,
                    backgroundColor: 'rgb(248, 240, 202)',
                    pointRadius: 5,
                    pointBorderWidth: 3,
                    borderColor: 'rgb(248, 240, 202)',
                    borderWidth: 4,
                }]
            },
            options: {
                scales:{
                    x: {
                        grid: {
                            color: '#7bb7a2'
                        },
                        ticks: {
                            color: 'rgb(248, 240, 202)'
                        }
                    },
                    y: {
                        grid: {
                            color: '#7bb7a2'
                        },
                        ticks: {
                            color: 'rgb(248, 240, 202)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                        color: 'rgb(248, 240, 202)', // Data label color
                        font: {
                            weight: 'bold', // Data label weight
                        },
                        },
                    },
                },          
            },
            
        })
    }
    onMount(() => {
        createChart();
        calculateRate();
    });
</script>


<NavBar />
<div class="chartPage-background">
    <div class="chartPage-all">
        <h1 class="chartPage-header-text">{data.chartdb.BoardName}</h1>
        <div class="chartPage-all-grid"> 
            <div class="chartPage-chart">
                <canvas id="real-chart"></canvas>
            </div>
            <div class="chartPage-stats">
                
                {#if isQuantity} 
                    <div class="chartPage-first-data">
                        <p class="stats-number">{Math.round(successcount/chartdb.datapoints.length * 10) / 10} 
                        </p>
                        <p class="stats-text">Your current rate</p>
                        
                    </div>
                    <div class="chartPage-second-data">
                        <p class="stats-number">{Math.round(remainingNum/remainingTime * 10) / 10} 

                        <p class="stats-text">Required rate</p>
                    </div>
                    <div class="chartPage-third-data">
                        <p class="stats-number">{Math.ceil(successcount/chartdb.numTarget*100)}% </p>
                        <p class="stats-text">Your current progress</p>
                    </div>

                    <div class="chartPage-fourth-data">
                        <!-- Remaining quantity / current rate -->
                        <p class="stats-number">{Math.round((remainingNum)/(Math.round(successcount/chartdb.datapoints.length * 10) / 10))} {chartdb.X_axis}s</p>
                        <p class="stats-text">Needed time to finish</p>
                        
                    </div>
                {:else} 
                    <div class="chartPage-first-data">
                        <p class="stats-number">{Math.round(successcount/chartdb.datapoints.length * 10) / 10} </p>
                        <p class="stats-text">Your success rate</p>
                            
                        
                    </div>
                    <div class="chartPage-second-data">
                        <p class="stats-number">{Math.round(remainingNum/remainingTime *100) / 10 * 10}%
                        <p class="stats-text">Required rate</p>
                        
                    </div>
                    <div class="chartPage-third-data">
                        <p class="stats-number">{Math.ceil(chartdb.numTarget/chartdb.timeTarget*100)}% </p>
                        <p class="stats-text">Consistency goal</p>
                        
                    </div>

                    <div class="chartPage-fourth-data">
                        <p class="stats-number">{Math.round((successcount + remainingTime)/chartdb.numTarget * 100) / 10 * 10}%</p>
                        <p class="stats-text">Maximum possible percentage</p>
                        
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>


<style>
    .chartPage-background{
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>