<template>
    <div class="inputBox">
        <form @submit.prevent="submit">
            <input type="text" placeholder="Enter email" v-model="userData.email">
            <input type="password" placeholder="Enter password" v-model="userData.password">
            <button type="submit">Login</button><button type="button" @click="registerTo">Register</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    data() {
        return {
            userData:{
                email:"",
                password:""
            }
        }
    },
    methods: {
        ...mapActions(["Login"]),
        async submit() {
            try {
                await this.Login(this.userData);
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        },
        registerTo() {
            this.$router.push("/register");
        }
    }
}

</script>

<style>

</style>