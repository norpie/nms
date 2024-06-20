<script lang="ts">let { name, definition = "?" } = $props();
</script>

<span title={definition}>{name}</span>

<style>
    span {
        font-weight: var(--font-weight-accent);
        color: var(--color-primary);
        border-bottom: 2px dashed var(--color-accent);
    }
</style>
