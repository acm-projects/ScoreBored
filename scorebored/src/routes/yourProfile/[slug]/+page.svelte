<script lang="ts">
    import './chartPage.css';
    //@ts-ignore
    import NavBar from "../../Navbar/+page.svelte";
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';

    export let data;
    

    function createChart(){
        let ctx = document.getElementById('real-chart');
        let dataset = data.chart;
        let chart_label = [];
        let chart_number = [];
        for (let i = 0; i < dataset.chart_data.length; i++) {
            chart_label.push(dataset.chart_data[i].year);
            chart_number.push(dataset.chart_data[i].count);
        }

        // @ts-ignore
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chart_label,
                datasets: [{
                    label: '# of times',
                    data: chart_number,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                }]
            }
        })
    }
    onMount(createChart);
</script>


<NavBar />
<div class="chartPage-background">
    <div class="chartPage-all">
        <h1 class="chartPage-header-text">{data.chart.title}</h1>
        <canvas id="real-chart"></canvas>
    </div>
</div>


<style>
    .chartPage-background{
        background-color: #182c25;
        color: #f8f0ca;
    }
</style>