<script setup lang="ts">
interface Props {
  title?: string;
}

/** PROPS **/
defineProps<Props>();
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel :title="title || ''">
      <v-expansion-panel-text>
        <slot />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
