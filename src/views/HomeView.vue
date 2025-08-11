<template>
    <div class="w-full p-4 flex flex-col gap-4">
        <div class="w-full flex justify-end">
            <GenericButton @click="logout" class="text-center cursor-pointer bg-black text-white p-2 rounded font-bold">
                Logout
            </GenericButton>
        </div>
        <div class="p-4 border border-gray flex flex-col gap-4">
            <p class="text-xl font-bold underline">User Information</p>
            <p>First Name : {{ user.firstName }}</p>
            <p>Last Name: {{ user.lastName }}</p>
            <p>Score: {{ user.score }}</p>
            <p>Turn: {{ user.turn }}</p>

            <div>
                <GenericButton @click="buyTurns"
                    class="text-center cursor-pointer bg-black text-white p-2 rounded font-bold">
                    Buy Turns
                </GenericButton>
            </div>

        </div>

        <div class="w-full flex items-center justify-between ">
            <div class="flex flex-col gap-5">
                <p class="font-bold text-2xl">Guess Your Number ( FROM 1 TO 5 )</p>

                <div class="flex items-center gap-5">
                    <p class="">Secret Number: {{ !isGenerate ? 'Please Generate Number' : "*****" }}</p>

                    <GenericButton @click="generateSecretNumber"
                        class="cursor-pointer bg-black text-white p-2 rounded font-bold">
                        Generate Number
                    </GenericButton>
                </div>

                <div class="flex items-center gap-2">
                    <GenericButton :disabled="!isGenerate" @click="guessNumber(item)" v-for="item in 5"
                        v-bind:key="item" class="bg-black text-white p-2 rounded font-bold cursor-pointer">{{ item }}
                    </GenericButton>
                </div>

            </div>
            <div class="border rounded h-full p-4 flex flex-col gap-4">
                <p class="uppercase text-xl font-bold underline">Leaderboard</p>
                <div v-for="(item, idx) in leaderboard" v-bind:key="item.id">
                    {{ idx + 1 }} : {{ item.firstName + ' ' + item.lastName }} - Score: <span class="font-bold"> {{
                        item.score }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services';
export default {
    data() {
        return {
            user: {
                score: 0,
                turn: 0
            },
            leaderboard: [],
            isGenerate: false
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/')
        },
        async getProfile() {
            try {
                const response = await api.get('/user/me');

                this.user = response.result
            } catch (error) {
                alert(error)
            }

        },
        async getLeaderBoard() {
            try {
                const response = await api.get('/user/leaderboard');

                this.leaderboard = response.result
            } catch (error) {
                alert(error)
            }
        },
        async syncData() {
            this.getProfile();
            this.getLeaderBoard();
        },
        async generateSecretNumber() {
            try {
                const apiRoute = `user/${this.user.id}/generate-number`

                const response = await api.post(apiRoute);

                this.isGenerate = true;
                alert(response.result)
            } catch (error) {
                alert(error)
            }
        },
        async guessNumber(number) {
            try {
                const apiRoute = `user/${this.user.id}/guess`
                const response = await api.post(apiRoute, { number });
                const isCorrect = response.result.correct;

                this.user.turn = this.user.turn - 1;
                if (isCorrect) {
                    this.user.score = this.user.score + 1;
                    await this.getLeaderBoard();
                    this.isGenerate = false
                }
                alert("YOUR ANSWER IS : " + response.result.correct)

            } catch (error) {
                alert(error?.response?.data?.message ?? error?.response?.data)
            }
        },
        async buyTurns(number) {
            try {
                const apiRoute = `user/${this.user.id}/buy-turns`

                await api.post(apiRoute, { number });
                await this.getProfile()

                alert("Buy Turns Successfully");
            } catch (error) {
                alert(error?.response?.data?.message)
            }
        },

    },
    async mounted() {
        this.syncData()
    },
}

</script>