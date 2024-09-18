<script lang="ts">
    import "../app.css";
    import { goto } from "$app/navigation";
</script>

<!-- Navbar -->
<div class="bg-base-100 justify-between fixed top-0 left-0 right-0">
    <div class="navbar max-w-3xl mx-auto justify-between">
        <!-- left side of navbar -->
        <div>
            <a href="/" class="btn btn-ghost text-xl">PokePage</a>
            <a href="/user" class="btn btn-ghost">My Page</a>
        </div>
        <!-- right side of navbar -->
        <div>
            <button on:click={() => goto("/login")}>Login</button>
            <span class="text-black text-lg ml-2">currentUser@gmail.com</span>
            <button on:click={() => console.log("logigng out")}>Logout</button>
        </div>
    </div>
</div>

<slot />
