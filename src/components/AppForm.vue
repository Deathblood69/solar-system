<script lang="ts" setup>
/** PROPS **/
interface Props {
  title: string;
  subtitle?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
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
  <VCard :loading="loading" :subtitle="subtitle" :title="title">
    <VCardText>
      <VForm ref="form" :disabled="loading || afterClickLoading">
        <slot />
      </VForm>
    </VCardText>
    <slot
      name="actions"
      :validate="handleValidate"
      :loading="afterClickLoading"
    >
      <VCardActions class="pa-4">
        <VBtn @click="emit('cancel')">Annuler</VBtn>
        <VBtn
          :loading="afterClickLoading"
          variant="flat"
          color="primary"
          @click="handleValidate"
          >Valider
        </VBtn>
      </VCardActions>
    </slot>
  </VCard>
</template>
