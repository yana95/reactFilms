import {
    CHANGE_SORT
  } from './../../constants';

export function changeSort(type) {
    return {
        type: CHANGE_SORT,
        title: type
    }
}