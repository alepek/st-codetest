<template>
  <div class="ski-form">
    <div class="hero">
      <h1>Skiify</h1>
      <p><small> Enter your height and age to see recommended ski size(s)</small></p>
    </div>
    <form @submit.native.prevent="emitChanges">
      <label for="height">Your height (cm)</label>
      <input
        v-model="stats.height"
        type="number"
        min="1"
        max="300"
        name="height"
        @change="emitChanges"
      >
      <label for="age">Your age</label>
      <input
        v-model="stats.age"
        type="number"
        min="1"
        name="age"
        @change="emitChanges"
      >
      <label for="type">Ski style</label>
      <select v-model="stats.style" name="type" @change="emitChanges">
        <option value="classic">
          Classic
        </option>
        <option value="freestyle">
          Freestyle
        </option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    stats: {
      height: undefined,
      age: undefined,
      style: 'classic'
    }
  }),
  computed: {
    isReadyToEmit() {
      return this.stats.height && this.stats.age && this.stats.style
    }
  },
  methods: {
    emitChanges() {
      if (this.isReadyToEmit) {
        this.$emit('stats-changed', this.stats)
      }
    }
  }
}
</script>

<style scoped>
.ski-form input, .ski-form select {
  margin: 0.5rem 0 1rem;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.hero {
  margin-bottom: 2rem;
}
</style>
