import axios from 'axios';
import uuid from 'uuid-v4';

import {
  FETCH_USER,
  CREATE_LANE,
  UPDATE_LANE,
  DELETE_LANE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from './types';

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

export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note: {
      id: uuid(),
      ...note
    }
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId
  };
}
