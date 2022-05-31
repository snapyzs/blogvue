<template>
    <div class="editPost">
            <textarea type="text" placeholder="Enter title here" v-model="postData.title"></textarea>
            <textarea type="text" placeholder="Enter decription here" v-model="postData.description"></textarea>
            <button @click="savePost(postData)">Save</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
    data() {
        return {
            postData:{
                id:this.$route.params.id,
                title:"",
                description:""
            }
        }
    },
    methods: {
        ...mapActions(["EditPosts"]),
        savePost(postData) {
            this.EditPosts(postData);
            this.$router.push("/");
        }
    }
}

</script>

<style>

</style>