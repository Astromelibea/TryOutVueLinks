<script>
    export default {
        props: {
            hasHover: Boolean,
            isDisabled: Boolean
        }
    };
</script>

<template>
    <div>
        <div class="hyperlink"
             :class="[isDisabled ? 'disabled' : '']">Hyperdehyper</div>
    </div>
</template>

<style lang="scss">
    .hyperlink {
        color: #0077CC;
        cursor: default;
        text-decoration: none;
        &:not(a){
            display: inline-block;
        }
        &:not(.disabled):hover {
                cursor: pointer;
                text-decoration: underline;
            }
        &.disabled {
            color: #939393;
            }
        }
</style>