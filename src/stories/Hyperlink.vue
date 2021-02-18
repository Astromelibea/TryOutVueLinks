<template>
    <div>
        <div class="hyperlink" :class="[isDisabled ? 'disabled' : '']">link</div>
    </div>
</template>

<script>
    import './hyperlink.css';

    export default {
        name:  'my-hyperlink',
        props: {
            // label: {
            //     type: String,
            //     required: true,
            // },
            isDisabled: {
                type: String,
                default: false,
            }
        }
    };
</script>