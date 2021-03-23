import {
  LIST_DELETE,
  LIST_DISPLAY,
  LIST_ADD,
  LIST_UPDATE,
  LIST_INSERT,
} from './ListActions';
import { uniqueId } from 'lodash';

const initialState = {
  id: '',
  inputText: '',
  list: [],
  error: {},
};

const ListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_DISPLAY:
      return state.list;

    case LIST_ADD:
      return {
        ...state,
        inputText: payload,
        error: {},
      };

    case LIST_INSERT: {
      console.log('state.id', state.id);
      console.log('state.inputText', state.inputText);
      if (state.inputText) {
        let data = Object.assign([], state.list);
        if (state.id) {
          data[state.id - 1] = { id: state.id, name: state.inputText };
        } else {
          data.push({ id: uniqueId(), name: state.inputText });
        }
        return {
          ...state,
          id: '',
          list: data,
          inputText: '',
        };
      } else {
        return {
          ...state,
          list: state.list,
          error: { message: 'Please Enter Task' },
        };
      }
    }

    case LIST_UPDATE: {
      console.log('s', payload);
      let { id, name } = payload;
      return {
        ...state,
        inputText: name,
        id,
      };
    }

    case LIST_DELETE: {
      let idx = state.list.filter((x) => x.id !== payload);
      return { ...state, list: idx };
    }

    default:
      return state;
  }
};

export default ListReducer;
