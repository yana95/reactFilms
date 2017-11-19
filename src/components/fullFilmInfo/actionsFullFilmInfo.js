import axios from 'axios'
import TMDB_URL from './../../constants';
import API_KEY from './../../constants';
import {
    RESET_SEARCH
  } from './../../constants';

export function resetSearch() {
    return {
        type: RESET_SEARCH,
    }
}
