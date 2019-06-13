<template>
  <div class="container">
    <ski-form class="left" @stats-changed="computeSkiSize" />
    <ski-renderer class="right" :min="limits.min" :max="limits.max" />
  </div>
</template>

<script>
import axios from 'axios'
import SkiRenderer from './ski-renderer'
import SkiForm from './ski-form'

export default {
  components: {
    SkiForm,
    SkiRenderer
  },
  data: () => ({
    loading: false,
    limits: {
      min: undefined,
      max: undefined
    }
  }),
  methods: {
    computeSkiSize(stats) {
      axios.post('/skicalc', stats)
        .then((res) => {
          this.limits = res.data.limits
        })
    }
  }
}
</script>

<style lang="css" scoped>
.container {
  display: flex;
  align-items: flex-end;
}

.left {
  width: 50%;
  padding-right: 1rem;
}

.right {
  width: 50%;
  padding-left: 1rem;
}
</style>
