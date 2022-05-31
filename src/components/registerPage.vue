<template>
    <div class="inputBox">
        <form @submit.prevent="submit">
            <input type="text" placeholder="Enter email" v-model="userData.email">
            <input type="password" placeholder="Enter password" v-model="userData.password">
            <button type="submit">Register</button>
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
        ...mapActions(["Register"]),
        async submit() {
            try {
                await this.Register(this.userData);
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        }
    }
}

</script>

<style>

</style>