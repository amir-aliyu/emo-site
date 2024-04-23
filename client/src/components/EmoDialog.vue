<template>
    
      <v-card>
        <v-card-title>Enter Emo-Sona Details</v-card-title>
        <v-card-text>
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
  
          <label for="emotion">Emotional Category:</label>
          <select id="emotion" v-model="emotion">
            <option value="High Emo">High Emo</option>
            <option value="Medium Emo">Medium Emo</option>
            <option value="Low Emo">Low Emo</option>
          </select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="addTask">Add</v-btn>
        </v-card-actions>
      </v-card>
  
  </template>
  
  <script>
  export default {
    props: {
        isAddDialogOpen: Boolean
    },
    data() {
      return {
        firstName: '',
        emotion: 'High Emo' // default value
      };
    },
    methods: {
    addTask() {
      // Emit add-task event
      this.$emit('add-task');
    },
    closeAddTaskDialog() {
      // Emit close event
      this.$emit('close');
    }
  }
};
  
  </script>