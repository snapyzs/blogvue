<template>
    <div class="createPost">
            <textarea type="text" placeholder="Enter title here" v-model="postData.title"></textarea>
            <textarea type="text" placeholder="Enter decription here" v-model="postData.description"></textarea>
            <button @click="createPost(postData)">Create</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
    data() {
        return {
            postData:{
                title:"",
                description:""
            }
        }
    },
    methods: {
        ...mapActions(["CreatePost"]),
        createPost(postData) {
            this.CreatePost(postData);
            this.$router.push("/");
        }
    }
}

</script>

<style>

</style>