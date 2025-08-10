<template>
    <div class="flex flex-col gap-1 border-none p-0">
        <div v-if="label" class="text-sm text-gray-121/70 flex items-center gap-1 whitespace-nowrap">
            <label :for="inputId" class="text-sm font-bold font-sans">{{ label }}</label>
            <p v-if="required" class="text-red-e53">必須</p>
        </div>
        <InputText :id="inputId" :placeholder="placeholder" :type="type"
            :class="['placeholder:!text-gray-121/30  font-normal !font-inter border disabled:!bg-[#7676801F] border-gray-b8b p-1 rounded-md w-full', inputClass]"
            :disabled="disabled" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            @blur="$emit('blur', $event)" />

        <InputError v-if="errorMessage" :message="errorMessage" />
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import InputError from './InputError.vue';
export default {
    components: { InputText, InputError },
    emits: ['update:modelValue', 'blur'],
    props: {
        label: String,
        placeholder: String,
        required: Boolean,
        inputClass: String,
        defaultValue: String,
        disabled: Boolean,
        modelValue: String,
        errorMessage: String,
        type: String // This allows v-model to work
    },
    data() {
        return {
            inputId: `input-${Math.random().toString(36).substr(2, 9)}`,
        }
    },
    methods: {

    },
    watch: {

    }
}
</script>