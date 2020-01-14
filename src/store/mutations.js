import Vue from 'vue';
import { getItemIndexById } from '../scripts/helpers';

export default {
  CLEAR_CHECK_LIST: (state) => {
    state.checkList = [];
  },
  ADD_ITEM: (state, value) => {
    state.checkList.push({
      id: new Date().getTime(),
      value,
    });
  },
  DELETE_ITEM: (state, id) => {
    const index = getItemIndexById(id, state.checkList);
    state.checkList.splice(index, 1);
  },
  UPDATE_ITEM: (state, newItem) => {
    const index = getItemIndexById(newItem.id, state.checkList);

    if (state.checkList[index]) {
      Vue.set(state.checkList, index, newItem);
    }
  },
};
