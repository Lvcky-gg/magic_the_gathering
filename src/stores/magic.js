import { defineStore } from 'pinia'
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://api.magicthegathering.io/v1/cards'
}

export const useMagicStore = defineStore('magic', {
  state: () => ({
    cards: [],
    loading: false
  }),
  actions: {
    async fetchCards() {
      this.loading = true
      try {
        const response = await axios.request(options)
        this.cards = response.data.cards
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    }
  }
})
