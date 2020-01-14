<template>
  <div id="app">
    <b-container lg>
      <b-row class="justify-content-between">
        <b-col class="text-left">
        <b-button variant="success" class="mr-3" @click="enableAddNewItemMode">
          Создать Новый Лист
          </b-button>
        <b-button variant="danger" class="mr-3" @click="clearCheckList">Удалить Все</b-button>
        </b-col>
        <b-col>
        <b-input-group>
          <b-form-input v-model="search" placeholder="Search for ..."></b-form-input>
          <b-input-group-append v-show="search.length">
            <b-button @click="search = ''">X</b-button>
          </b-input-group-append>
        </b-input-group>
        </b-col>
      </b-row>
      <b-container class="mt-4" v-show="addNewItemMode">
        <hr>
        <b-col cols="4" class="m-auto">
          <b-input-group>
          <b-form-input v-model="newItemText" placeholder="описание ..."></b-form-input>
          <b-input-group-append>
            <b-button ariant="outline-secondary" @click="addNewItem">Ок!</b-button>
          </b-input-group-append>
        </b-input-group>
        </b-col>
      </b-container>
      <b-container class="mt-4" v-show="filteredDataCheckList.length">
        <hr>
        <b-col cols="12" v-for="item in filteredDataCheckList" :key="item.id">
          <list-item
            :item="item"
            @save="updateItem"
            @delete="deleteItem(item.id)"
          />
        </b-col>
      <hr>

      </b-container>

    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ListItem from './components/ListItem.vue';

export default {
  name: 'app',
  components: {
    ListItem,
  },
  data: () => ({
    newItemText: '',
    addNewItemMode: false,
    search: '',
  }),
  computed: {
    ...mapGetters({
      dataCheckList: 'dataCheckList',
    }),
    filteredDataCheckList() {
      // eslint-disable-next-line
      return this.dataCheckList.filter(item => (item.value.toLowerCase().includes(this.search.toLowerCase())));
    },
  },
  methods: {
    ...mapMutations({
      clearCheckList: 'CLEAR_CHECK_LIST',
      addItem: 'ADD_ITEM',
      deleteItem: 'DELETE_ITEM',
      updateItem: 'UPDATE_ITEM',
    }),
    enableAddNewItemMode() {
      this.addNewItemMode = true;
    },
    addNewItem() {
      this.addItem(this.newItemText);
      this.newItemText = '';
      this.addNewItemMode = false;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
