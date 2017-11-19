import {
    CHANGE_SEARCH
  } from './../../constants';

export function changeSearch(type) {
    return {
        type: CHANGE_SEARCH,
        title: type
    }
}