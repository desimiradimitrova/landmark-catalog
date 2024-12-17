<template>
  <div class="my-4 text-center">
    <input
      v-model="searchKeyword"
      @input="onSearch"
      type="text"
      placeholder="Search for landmarks..."
      class="w-1/2 p-2 border rounded"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchKeyword = ref("");
const emit = defineEmits(["search"]);

const onSearch = () => {
  emit("search", searchKeyword.value);
};
</script>
