<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useContactStore } from "../stores/contact";
import Contact from "../components/SingleContact.vue";

const route = useRoute();
const { contact, loading, error } = storeToRefs(useContactStore());
const { fetchContact } = useContactStore();

fetchContact(route.params.id);
</script>

<template>
  <div>
    <p v-if="loading">Loading contact...</p>
    <p v-if="error">{{ error.message }}</p>
    <p v-if="contact">
      <contact :contact="contact"></contact>
    </p>
  </div>
</template>
