<template>
  <div id="footer">
    <slot name="header"></slot>
    <slot>
      <span class="default">@</span>
    </slot>
    <slot name="footer"></slot>
    <span :class="[color]">{{title}}</span>
    <span>{{time}}</span>
    <Clock @onClock="onClock" />
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  data() {
    return {
      time: ""
    };
  },
  methods: {
    onClock(time) {
      this.time = time;
    }
  },
  props: ["title", "color"],
  components: {
    Clock
  }
};
</script>

<style scoped>
.white {
  color: white;
}
.yellow {
  color: yellow;
}
.default {
  color: red;
}
</style>