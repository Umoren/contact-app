<script setup>
defineProps(["contact"]);
</script>

<template>
  <div>
    <div>
      <h2>{{ contact.first_name }} {{ contact.last_name }}</h2>
      <hr />
      <p>Gender: {{ contact.gender }}</p>
      <p>Email: {{ contact.email }}</p>
      <p>Phone: {{ contact.phone }}</p>
    </div>
  </div>
</template>