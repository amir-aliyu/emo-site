<template>
  <div class="container">
    <head>
      Emo Site...
    </head>
    <v-container> 
       <h1 class="jacquard-24-regular">Speak Your Truth... if you dare:</h1>
       <img alt="decorative line" src="../assets/decl.png"> 
    <div class="create-post">
      <!--<label for="create-post">Speak into the void...</label>-->
      <input type="text" id="create-post" v-model="text" placeholder="Speak into the void..."> 
      <!--bind text at bottom to input w/ v-model-->
      
      <v-btn variant="outlined" v-on:click="createPost">the void listens...</v-btn>
    </div>
  </v-container>
   
      <img alt="decorative line" src="../assets/decl.png">
    <p class="error" v-if="error"> {{  error  }}</p>
    <div class="posts-container">
      <h2 class="almendra-sc-regular">My Confessions:</h2>
      <div class="post jacquard-24-regular bgmaroon"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id" 
        v-on:dblclick="deletePost(post._id)"
      >
      <p class="datetext"> Confessed on:
      {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
      </p>
    <p class="text">{{  post.text  }}</p></div>
    </div>
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout" :color="snackbar.color">
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  // no props
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      snackbar: {
        show: false,
        text: '',
        color: '',
        timeout: 3000
      }
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  }, methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
      this.snackbar.text = "the void says hello...";
      this.snackbar.color = "success"; // or any color you prefer
      this.snackbar.show = true;
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
      this.snackbar.text = "indeed, all things are temporary...";
      this.snackbar.color = "error"; // or any color you prefer
      this.snackbar.show = true;
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container { 
  max-width: 800px; 
  margin: 0 
  auto; 
}

p.error { border: 1px solid #ff5b5f; background-color: #b220cc; padding: 10px; margin-bottom: 15px; }

div.post { position: relative; border: 1px solid #940909; background-color: 3bcffb8; padding: 10px 10px 30px 10px; margin-bottom: 15px; }

div.created-at { position: absolute; top: 0; left: 0; padding: 5px 15px 5px 15px; background-color: darkgreen; }

p.text { font-size: 30px; font-weight: 700; margin-bottom: 0; color: white; }

.datetext {font-size: 20px; font-weight: 700; margin-bottom: 0; color: white;  }

.jacquard-24-regular {
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
}


.bgmaroon {
  background-color: rgb(42, 19, 19)
}

</style>
