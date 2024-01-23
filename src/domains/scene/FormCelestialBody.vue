<script setup lang="ts">
import type { CelestialBody } from "~/types/celestialBody";
import { FORM_VALIDATIONS_RULES } from "~/constants/formValidationsRules.const";
import { Vector3 } from "three";

/**  PROPS **/
interface Props {
  modelValue: CelestialBody | Omit<CelestialBody, "id">;
}

/** DEFINE PROPS **/
const props = defineProps<Props>();

/**  EMITS **/
type Emits = {
  "update:modelValue": [value: CelestialBody | Omit<CelestialBody, "id">];
};

const emit = defineEmits<Emits>();

/**  COMPUTED **/
const entity = computed({
  get: () => props.modelValue,
  set: (value: CelestialBody | Omit<CelestialBody, "id">) => {
    emit("update:modelValue", value);
  },
});

/**  METHODS **/

const handleUpdatePosition = (event: any) => {
  const { id, value } = event.target;
  const oldPosition = { ...entity.value.position };
  switch (id) {
    case "positionX":
      oldPosition.x = value;
      break;
    case "positionY":
      oldPosition.y = value;
      break;
    case "positionZ":
      oldPosition.z = value;
      break;
  }
  entity.value.position = new Vector3(
    oldPosition.x,
    oldPosition.y,
    oldPosition.z,
  );
};
</script>
<template>
  <VTextField
    type="number"
    label="Masse"
    v-model="entity.mass"
    :rules="[FORM_VALIDATIONS_RULES.required]"
  />
  <VTextField
    type="number"
    label="Radius"
    v-model="entity.radius"
    :rules="[FORM_VALIDATIONS_RULES.required]"
  />
  <VLabel>Position</VLabel>
  <VContainer id="position">
    <VTextField
      id="positionX"
      class="w-100"
      type="number"
      :model-value="entity.position.x"
      @input="handleUpdatePosition"
    />
    <VTextField
      id="positionY"
      class="w-100"
      type="number"
      :model-value="entity.position.y"
      @input="handleUpdatePosition"
    />
    <VTextField
      id="positionZ"
      class="w-100"
      type="number"
      :model-value="entity.position.z"
      @input="handleUpdatePosition"
    />
  </VContainer>
</template>

<style scoped>
#position {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
