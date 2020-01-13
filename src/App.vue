<template>
  <div id="app">
    <b-container lg>
      <b-row class="justify-content-between">
        <b-col class="text-left">
        <b-button variant="success" class="mr-3" @click="enableAddNewItemMode">
          Создать Новый Лист
          </b-button>
        <b-button variant="danger" class="mr-3" @click="deleteAllItems">Удалить Все</b-button>
        </b-col>
        <b-col>
        <b-input-group>
          <b-form-input v-model="search" placeholder="Search for ..."></b-form-input>
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
import ListItem from './components/ListItem.vue';

export default {
  name: 'app',
  components: {
    ListItem,
  },
  data: () => ({
    dataCheckList: [],
    editingCheckListCashe: [],
    newItemText: '',
    addNewItemMode: false,
    search: '',
  }),
  computed: {
    filteredDataCheckList() {
      // eslint-disable-next-line
      return this.dataCheckList.filter(item => (item.value.toLowerCase().includes(this.search.toLowerCase())));
    },
  },
  methods: {
    deleteAllItems() {
      this.dataCheckList = [];
    },
    enableAddNewItemMode() {
      this.addNewItemMode = true;
    },
    addNewItem() {
      this.dataCheckList.push({
        id: new Date().getTime(),
        value: this.newItemText,
      });
      this.newItemText = '';
      this.addNewItemMode = false;
    },
    deleteItem(id) {
      const index = this.getItemIndexById(id);
      this.dataCheckList.splice(index, 1);
    },
    updateItem(item) {
      const index = this.getItemIndexById(item.id);

      if (this.dataCheckList[index]) {
        this.dataCheckList[index].value = item.value;
      }
    },
    getItemIndexById(id) {
      return this.dataCheckList.findIndex(item => item.id === id);
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
