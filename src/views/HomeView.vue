<script setup>

import { useMagicStore } from '../stores/magic'
import { onMounted, toRaw } from 'vue';

const magicStore = useMagicStore()
onMounted(async () => {
  await magicStore.fetchCards()
  console.log(toRaw(magicStore.cards))
  
})

</script>

<template>
  <Card v-for="card in magicStore.cards" :key="card.name">
    <template #title>
      <h2>{{ card.name }}</h2>
    </template>
   <a href="card.imageUrl">{{ card }}</a> 

  </Card>

</template>
