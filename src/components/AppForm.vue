<script lang="ts" setup>
/** PROPS **/
interface Props {
  title?: string;
  subtitle?: string;
  loading?: boolean;
}

withDefaults(defineProps<Props>(), {
  loading: false,
  subtitle: "",
});

/** REFS **/
const afterClickLoading = ref(false);

const form = ref();

/** EMITS **/
type Emits = {
  validate: [];
  cancel: [];
};

const emit = defineEmits<Emits>();

/** METHODS **/
/**
 * Valide le formulaire et exécute la fonction handleClickValidForm
 * si le formulaire est valide.
 * @return void
 */
async function handleValidate() {
  const { valid } = await form.value.validate();
  valid && emit("validate");
}
</script>

<template>
  <div :title="title">
    <div>
      <VForm ref="form" :disabled="loading || afterClickLoading">
        <slot />
      </VForm>
    </div>
    <slot
      name="actions"
      :validate="handleValidate"
      :loading="afterClickLoading"
    >
      <div>
        <VBtn @click="emit('cancel')">Annuler</VBtn>
        <VBtn
          :loading="afterClickLoading"
          variant="flat"
          color="primary"
          @click="handleValidate"
          >Valider
        </VBtn>
      </div>
    </slot>
  </div>
</template>
