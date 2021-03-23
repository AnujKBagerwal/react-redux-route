import {
  LIST_DISPLAY,
  LIST_DELETE,
  LIST_INSERT,
  LIST_ADD,
  LIST_UPDATE,
} from './ListActions';

export const getListData = () => {
  return {
    type: LIST_DISPLAY,
  };
};

export const setListData = () => {
  return {
    type: LIST_INSERT,
  };
};

export const updateListData = (payload) => {
  return {
    type: LIST_ADD,
    payload,
  };
};

export const updListData = (payload) => {
  return {
    type: LIST_UPDATE,
    payload,
  };
};

export const deleteListData = (id) => {
  return {
    type: LIST_DELETE,
    payload: id,
  };
};
