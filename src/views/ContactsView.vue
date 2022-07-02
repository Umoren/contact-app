<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useContactStore } from "../stores/contact";

const { contacts, loading, error } = storeToRefs(useContactStore());
const { fetchContacts } = useContactStore();

fetchContacts();
</script>

<template>
  <main>
    <p v-if="loading">Loading contacts...</p>
    <p v-if="error">{{ error.message }}</p>
    <div classs="contact-list">
      <table v-if="contacts">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Details</th>
        </tr>

        <tr v-for="contact in contacts" :key="contact.id">
          <td>{{ contact.first_name }}</td>
          <td>{{ contact.last_name }}</td>
          <RouterLink :to="`/contact/${contact._id}`"
            ><td>view details</td></RouterLink
          >
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: none;
  text-align: left;
  padding: 8px;
}
</style>