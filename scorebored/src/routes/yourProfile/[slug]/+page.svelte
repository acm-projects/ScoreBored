<script lang="ts">
    import './chartPage.css';
    //@ts-ignore
    import NavBar from "../../Navbar/+page.svelte";
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    export let data;

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
    onMount(createChart);
</script>


<NavBar />
<div class="chartPage-background">
    <div class="chartPage-all">
        <!-- <h1 class="chartPage-header-text">{data.chart.title}</h1> -->
        <canvas id="real-chart"></canvas>
    </div>
</div>


<style>
    .chartPage-background{
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>