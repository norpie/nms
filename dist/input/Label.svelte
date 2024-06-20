<script lang="ts">let {
  name = "",
  label = "",
  children
} = $props();
</script>

{#if children}
    <div class="labeled">
        <div class="label-children">
            {@render children()}
        </div>
        <label for={name}>{label}</label>
    </div>
{:else}
    <label class="standalone-label" for={name}>{label}</label> <br />
{/if}

<style>
    label {
        display: inline-block;
        color: var(--color-primary);
        font-weight: 600;
    }

    .standalone-label {
        margin-bottom: 0.5rem;
    }

    .labeled {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>
