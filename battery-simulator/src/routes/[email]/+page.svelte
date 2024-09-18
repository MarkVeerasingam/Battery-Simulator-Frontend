<!--http://localhost:5173/currentUser@gmail.com-->
<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Chart from "chart.js/auto";

    $: email = $page.params.email;

    let ctx: HTMLCanvasElement;
    onMount(() => {
        if (ctx) {
            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [
                        "Red",
                        "Blue",
                        "Yellow",
                        "Green",
                        "Purple",
                        "Orange",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [12, 19, 3, 5, 2, 3],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    });
</script>

<div class="hero min-h-screen bg-base-300">
    <div class="hero-content">
        <div class="max-w-2xl text-center">
            <h1 class="text-black font-bold text-4xl">{email}</h1>
            <p class="py-3 max-w-md mx-auto">User description here...</p>
            <p class="btn btn-primary">Simulate Battery</p>

            <div class="grid grid-cols-3">
                <canvas bind:this={ctx} id="myChart"></canvas>
                <!-- Card -->
                <!-- <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                    <div class="card-body">
                        <div class="text-center">
                            <img
                                src={"#"}
                                alt="Pokemon"
                                class="w-32 h-32 mx-auto bg-gray-500"
                            />
                            <h2 class="text-white text-2xl font-bold">
                                Pikachu
                            </h2>
                            <p class="text-info">Electric</p>
                        </div>
                    </div>
                </div> -->
                <!-- Card -->
                <!-- <div class="card bg-slate-700 m-4 shadow-lg shadow-blue-900">
                    <div class="card-body">
                        <div class="text-center">
                            <img
                                src={"#"}
                                alt="Pokemon"
                                class="w-32 h-32 mx-auto bg-gray-500"
                            />
                            <h2 class="text-white text-2xl font-bold">
                                Pikachu
                            </h2>
                            <p class="text-info">Electric</p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</div>
