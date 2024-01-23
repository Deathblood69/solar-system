<script setup lang="ts">
import { CelestialBody } from "~/types/celestialBody";
import { shallowRef } from "vue";
import { useRenderLoop } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import FormCelestialBody from "~/domains/scene/FormCelestialBody.vue";

/** SETUP **/

const { onLoop } = useRenderLoop();

/**  PROPS  **/

/**  EMITS  **/

/**  REFS  **/

const boxRef = shallowRef(null);

const celestialBodies = ref([
  new CelestialBody("body1", 2, 10, "red", [0, 0, 0]),
  new CelestialBody("body2", 1, 1, "orange", [10, 0, 0]),
]);

const lastElapsedTime = ref(0);

/**  COMPUTED   **/

/**  LIFECYCLE  **/

onLoop(({ delta, elapsed }) => {
  lastElapsedTime.value = elapsed;
});

/**  METHODS  **/
</script>

<template>
  <div id="options">
    <VCard>
      <VCardText>
        <code> Temps écoulé: {{ lastElapsedTime.toFixed(0) }} </code>
      </VCardText>
    </VCard>
    <AppForm
      v-for="celestialBody in celestialBodies"
      :title="celestialBody.name"
    >
      <FormCelestialBody :model-value="celestialBody" />
      <template #actions>
        <div />
      </template>
    </AppForm>
  </div>

  <AppThreeScene>
    <OrbitControls />
    <TresPerspectiveCamera
      :position="[10, 20, 50]"
      :fov="45"
      :aspect="1"
      :near="0.1"
      :far="1000"
    />

    <TresMesh
      v-for="celestial in celestialBodies"
      :key="celestial.name"
      :name="celestial.name"
      :position="celestial.position"
      ref="boxRef"
      :scale="1"
      cast-shadow
    >
      <TresSphereGeometry :args="[celestial.radius, 32, 32]" />
      <TresMeshNormalMaterial />
    </TresMesh>
  </AppThreeScene>
</template>

<style scoped>
#options {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 20rem;
}
</style>
