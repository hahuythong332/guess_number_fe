<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div class="border border-gray-51 rounded flex flex-col items-center p-10 gap-5">
            Login

            <TextInput v-model="form.username" label="Username" :errorMessage="error" />
            <TextInput v-model="form.password" type="password" label="Password" />

            <div class="flex items-center flex-col w-full gap-2">
                <GenericButton @click="login" class="w-[200px] bg-black text-white p-2 rounded font-bold">Login
                </GenericButton>

                <RouterLink to="/register" class="w-[200px] bg-black text-white p-2 rounded font-bold text-center">
                    Register
                </RouterLink>
            </div>

        </div>
    </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue';
import GenericButton from '@/components/Button.vue';
import api from '@/services';
export default {
    components: { TextInput, GenericButton },

    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            error: ""
        }
    },
    created() {
    },
    methods: {
        async login() {
            try {
                const response = await api.post('/auth/login', this.form);
                localStorage.setItem('token', response.result?.token)
                this.$router.push('/')
            } catch (error) {
                this.error = "Login Failed!"
            }

        }

    }
}
</script>