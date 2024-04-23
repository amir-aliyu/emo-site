<template>
  <v-container >
    <img alt="fancy trim" src="./assets/trimming.png"> 
    <h1 class="almendra-sc-regular big-font">Enter Your Secrets...</h1>
    <img alt="Emo logo" src="./assets/emo-image.png">
    <PostComponent/>
    <img alt="fancy trim" src="./assets/trimming copy.png"> 

    <!--<v-btn prepend-icon="mdi-plus" color="primary"  @click="openAddTaskDialog">
            Find My Emo-Sona
    </v-btn>-->
    
    <!-- <EmoDialog
          v-if="isAddDialogOpen"
          :is-add-dialog-open="isAddDialogOpen"
          @add-task="addTask"
          @no-task="closeAddTaskDialog"
          @close="closeAddTaskDialog"
          @update:isAddDialog="isAddDialog = $event" 
        />-->
  
        
</v-container>
  
  
</template>

<script>
import PostComponent from './components/PostComponent.vue'
//import EmoDialog from './components/EmoDialog.vue';
import 'vuetify/dist/vuetify.min.css';

export default {
  name: 'App',
  components: {
    PostComponent,
    /*EmoDialog
  },data() {
    return {
      isAddDialogOpen: true // Initialize dialog state
    }
  },
  methods: {
    openAddTaskDialog() {
      this.isAddDialogOpen = true; // Open dialog when button is clicked
    },
    addTask() {
      // Define your addTask method logic here
      console.log("Task added!");
      this.isAddDialogOpen = false; // Close dialog after adding task
    },
    closeAddTaskDialog() {
      this.isAddDialogOpen = false; // Close dialog when canceled or closed
    }*/
  }
}

</script>

<style>
#app {
  font-family: Jacquard, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e2a37;
  margin-top: 60px;
}
.almendra-sc-regular {
  font-family: "Almendra SC", serif;
  font-weight: 400;
  font-style: normal;
}
.eater-regular {
  font-family: "Eater", serif;
  font-weight: 400;
  font-style: normal;
  color:rgb(78, 4, 107);
}

.big-font {
  font-size:50px;
}

.jacquard-24-regular {
  font-family: "Jacquard 24", system-ui;
  font-weight: 400;
  font-style: normal;
}



</style>
