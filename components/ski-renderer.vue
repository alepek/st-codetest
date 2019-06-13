<template>
  <div class="skis">
    <template v-if="min && max">
      <div v-if="min !== max" class="ski is-small">
        <span class="length">{{ animated.min }}cm</span>
      </div>
      <span v-if="min !== max" class="to">To</span>
      <div class="ski is-large">
        <span class="length">{{ animated.max }}cm</span>
      </div>
    </template>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  props: {
    min: {
      type: Number,
      required: false,
      default: undefined
    },
    max: {
      type: Number,
      required: false,
      default: undefined
    }
  },
  data: () => ({
    animated: {
      min: undefined,
      max: undefined
    }
  }),
  watch: {
    max() {
      const animated = {
        min: this.animated.min || 0,
        max: this.animated.max || 0
      }

      anime({
        targets: animated,
        max: this.max,
        min: this.min,
        easing: 'linear',
        round: 1,
        update: () => {
          this.animated.min = animated.min
          this.animated.max = animated.max
        }
      })

      anime({
        targets: '.skis',
        height: this.max * 1.75
      })
    }
  }
}
</script>

<style scoped>
.skis {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 360px;
  max-height: 360px;
}

.ski {
  position: relative;
  height: 100%;
  width: 2rem;
  border: 2px solid white;
  border-radius: 12px;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

.ski.is-small {
  height: 85%;
  transform: translateY(8.5%);
}

.length {
  position: absolute;
  top: -2rem;
}

.size {
  position: absolute;
  bottom: -2rem;
}

.to {
  position: relative;
}
</style>
