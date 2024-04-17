<script setup>

import { computed } from 'vue';
import { useMagicStore } from '../stores/magic'
import { onMounted, toRaw } from 'vue';

const magicStore = useMagicStore()
onMounted(async () => {
  await magicStore.fetchCards()
  console.log(toRaw(magicStore.cards))
  
})

const computeArr =computed(() => {
  const arr = [];
  for (let i = 0; i < magicStore.cards.length; i++) {
    if (magicStore.cards[i].imageUrl) {
      arr.push(magicStore.cards[i]);
    }
  }

  return arr
})

</script>

<template>
  <div class="grid xl:grid-cols-5">
  <Card class="m-2" v-for="card in computeArr" :key="card.name">
    <template #title>
      <h2>{{ card.name }}</h2>
    </template>
   <!-- <a href="card.imageUrl">{{ card }}</a>  -->
   <template #content>
     <img :src="card.imageUrl" alt="card.name" />
    </template>
   <template #footer>
     <p>{{ card.text }}</p>
    </template>

  </Card>
</div>
</template>
