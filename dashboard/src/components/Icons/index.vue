<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import loading from './loading.vue'

export default {
  components: { loading },
  props: {
    name: { type: String, required: true }
  }
}
</script>
