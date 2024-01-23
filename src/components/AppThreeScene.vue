<script setup lang="ts">
import { Color } from "three";
/**  PROPS  **/

/**  EMITS  **/

/**  REFS  **/

const color1 = new Color("orange");

/**  COMPUTED   **/

/**  LIFECYCLE  **/

/**  METHODS  **/
</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera :position="[3, 3, 3]" :look-at="[0, 0, 0]" />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshBasicMaterial :color="color1" />
    </TresMesh>
    <TresAmbientLight :intensity="1" />
  </TresCanvas>
</template>
