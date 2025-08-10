<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="border border-gray-51 rounded flex flex-col items-center p-10 gap-5">
            Register

            <TextInput v-model="form.username" label="Username" :errorMessage="error" />
            <TextInput v-model="form.password" type="password" label="Password" />
            <TextInput v-model="form.firstName" label="First Name" />
            <TextInput v-model="form.lastName" label="Last Name" />

            <div class="flex items-center flex-col w-full gap-2">
                <GenericButton @click="register" class="w-[200px] bg-black text-white p-2 rounded font-bold">Register
                </GenericButton>

                <RouterLink to="/login" class="w-[200px] bg-black text-white p-2 rounded font-bold text-center">Login
                </RouterLink>
            </div>

        </div>
    </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
import GenericButton from '@/components/Button.vue';
import { RouterLink } from 'vue-router';
import api from '@/services';
export default {
    components: { TextInput, GenericButton, RouterLink },

    data() {
        return {
            form: {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                score: 0,
                turn: 0
            },
            error: ""
        }
    },
    created() {
    },
    methods: {
        async register() {
            try {
                await api.post('/auth/register', this.form);
                this.$router.push('/login')
            } catch (error) {
                this.error = error?.response?.data?.message ?? error?.response?.data
            }

        }

    }
}
</script>