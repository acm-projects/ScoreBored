<script lang="ts">
    import './chartPage.css';
    //@ts-ignore
    import NavBar from "../../../Navbar/+page.svelte";
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
  import Page from '../../../+page.svelte';

    export let data;

    $: successcount = 0;

    function calculateRate(){
        for (let i = 0; i < data.chartdb.datapoints.length; i++){
            successcount += data.chartdb.datapoints[i];
        }

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
                <div class="chartPage-current-rate">
                    <p class="stats-text">Current rate</p>
                    <p class="stats-number">{Math.round(successcount/data.chartdb.datapoints.length * 10) / 10} 
                        
                    </p>
                </div>
                <div class="chartPage-required-rate">
                    <p class="stats-text">Required rate</p>
                    <p class="stats-number">{Math.round(data.chartdb.numTarget/data.chartdb.timeTarget * 10) / 10} 
                </div>
                <div class="chartPage-percentage">
                    <p class="stats-text">Percentages</p>
                    <p class="stats-number">{Math.ceil(successcount/data.chartdb.numTarget*100)}% </p>
                </div>
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