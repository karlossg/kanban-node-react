import axios from 'axios';
import uuid from 'uuid-v4';

import { FETCH_USER, CREATE_LANE, UPDATE_LANE, DELETE_LANE } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: {
      id: uuid(),
      notes: [],
      ...lane
    }
  };
}

export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    lane
  };
}

export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId
  };
}
