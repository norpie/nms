<script lang="ts">let { children, href, ...props } = $props();
</script>

<a {href} {...props}>{@render children()}</a>

<style>
    a {
        display: inline-block;
        color: var(--color-primary);
        font-weight: var(--font-weight-action);
        text-decoration: none;
    }

    a::after {
        background: var(--color-action);
        content: '';
        display: block;
        width: 0;
        height: 2px;
        transition: width 0.3s;
    }

    a:hover::after {
        width: 100%;
    }
</style>
