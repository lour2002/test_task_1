<template>
  <b-input-group class="mb-3">
    <b-form-input :plaintext="!editMode" v-model="dataItem.value"></b-form-input>
    <b-input-group-append>
      <template v-if="editMode">
      <b-button variant="success" squared @click="saveItem">Сохранить</b-button>
      <b-button variant="danger" squared @click="disableEditMode">Отмена</b-button>
      </template>
      <template v-else>
      <b-button variant="warning" squared @click="enableEditMode">Редактировать</b-button>
      <b-button variant="danger" squared @click="$emit('delete')">Удалить</b-button>
      </template>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        id: 0,
        value: '',
      }),
    },
  },
  data() {
    return {
      editMode: false,
      dataItem: { ...this.item },
    };
  },
  methods: {
    enableEditMode() {
      this.editMode = true;
    },
    disableEditMode() {
      this.dataItem.value = this.item.value;
      this.editMode = false;
    },
    saveItem() {
      this.$emit('save', this.dataItem);
      this.editMode = false;
    },
  },
};
</script>

<style>

</style>
