<script lang="ts">
    import "./yourProfile.css";
    //@ts-ignore
    import NavBar from "../NavBar/+page.svelte";
    export let data;
    
    
</script>


<NavBar />
<div class="yourProfile-background">
    <div class="yourProfile-all">
        <h1 class="yourProfile-header-text">Hello Username!</h1>
        <h2 class="yourProfile-header-subtext">Keep up your good work!</h2>
        <!-- user name -->
        
        <table class="yourProfile-table">
            <thead>
                <th class="yourProfile-head-no">No.</th>
                <th class="yourProfile-head-name">Name</th>
                <th class="yourProfile-head-progress">Progress</th>
                <th class="yourProfile-head-action">Action</th>
            </thead>
            <tbody>
                {#each data.summaries as {slug, title, no}}
                    <td class="yourProfile-body-no">{no}</td>
                    <td class="yourProfile-body-name">{title}</td>
                    <td class="yourProfile-body-progress">70%</td>
                    <td>
                        <button class="yourProfile-btn">Edit</button>
                        <a href="/yourProfile/{slug}"><button class="yourProfile-btn">View</button></a>
                        <button class="yourProfile-btn">Delete</button>
                    </td>
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