<template>
    <div v-if="loading">
        <div class="header">
            <button @click="loginPage" v-if="!isAuth">Login</button>
            <h1>Posts page</h1>
            <div v-if="isAuth" class="buttonPost"><button @click="createPost">Create</button><button @click="logoutSite">Logout</button></div>
        </div>
        <div v-for="(p,i) in Posts.data.posts" :key="i" class="posts" >
            <div>
                <div>Title: {{ p.title }}</div>
            </div>
            <div>Description</div>
            <div>{{ p.description }}</div>
            <br>
            <div>Created: {{ timeToUser(p.createdAt) }} - Updated: {{ timeToUser(p.updatedAt) }}</div>
            <div v-if="isAuth && userId === p.userId">
                <button @click="editPost(p.id)">Edit</button><button @click="DeletePosts({id:p.id})">Remove</button>
            </div>    
            <hr>
        </div> 
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            loading: false,
        }
    },
    created() {
       (async () => {
           await this.GetPosts();
           this.loading = true;
       })();
    },  
    computed: {
        ...mapGetters({ Posts: "statePosts", isAuth: "stateLoggedIn", userId: "stateUserId"}),
        
    },

    methods:{
      ...mapActions(["GetPosts","DeletePosts","Logout"]),
      editPost(id) {
          this.$router.push(`/edit_post/${id}`);
      },
      createPost() {
          this.$router.push("/create_post");
      },
      logoutSite() {
          this.Logout();
          this.$router.push("/login");
      },
      timeToUser(time) {
          return new Date(time).toLocaleString("ru");
      },
      loginPage() {
          this.$router.push("/login");
      }
    },
    watch: {
        Posts(value) {
            return value.data.posts.sort((a,b)=>{
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        }
    }
}

</script>

<style scoped>



</style>