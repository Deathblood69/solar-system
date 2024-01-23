<script setup lang="ts">
import type { CelestialBody } from "~/types/celestialBody";
import { FORM_VALIDATIONS_RULES } from "~/constants/formValidationsRules.const";

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
const resident = computed({
  get: () => props.modelValue,
  set: (value: CelestialBody | Omit<CelestialBody, "id">) => {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <VTextField
    type="number"
    label="Masse"
    v-model="resident.mass"
    :rules="[FORM_VALIDATIONS_RULES.required]"
  />
  <VTextField
    type="number"
    label="Radius"
    v-model="resident.radius"
    :rules="[FORM_VALIDATIONS_RULES.required]"
  />
</template>
