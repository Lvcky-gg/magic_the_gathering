<script setup>

import { useMagicStore } from '../stores/magic'
import { onMounted } from 'vue';

const magicStore = useMagicStore()
onMounted(() => {
  magicStore.fetchCards()
  console.log(magicStore)
  
})

</script>

<template>
  <Card v-for="card in magicStore.cards">

  </Card>

</template>
