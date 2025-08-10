<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
    props: {
        text: {
            type: String,
        },
        type: {
            type: String,
            default: 'primary',
        },
    },
    computed: {

    }
}



</script>

<template>
    <button
        class="bg-blue-400 whitespace-nowrap disabled:bg-gray-b8b disabled:text-white disabled:border-none px-[1rem] py-[0.5rem]   border  rounded-[0.38rem]">
        <p v-if="text">{{ text }}</p>
        <slot v-else />
    </button>
</template>
