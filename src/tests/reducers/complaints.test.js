import complaintsReducer from '../../reducers/complaints';
import complaints from '../fixtures/complaints';

test('should add a new complaint to complaints set', () => {
  const newComplaint = {
    id: 10,
    happenedAt: 1023,
    reportedAt: 1023,
    reportTo: 'Americatel SAC',
    title: 'title testing',
    content: 'content testing',
    address: {},
    uid: 1,
  };
  const action = {
    type: 'ADD_COMPLAINT',
    complaint: newComplaint,
  };
  const state = complaintsReducer(complaints, action);
  expect(state).toContain(action.complaint);
});

test('should remove a complaint from complaints set', () => {
  const action = {
    type: 'REMOVE_COMPLAINT',
    id: complaints[0].id,
  };
  const state = complaintsReducer(complaints, action);
  expect(state).toEqual([complaints[1], complaints[2]]);
});

test('should update a complaint from complaints set', () => {
  const action = {
    type: 'EDIT_COMPLAINT',
    id: complaints[0].id,
    updates: {
      title: 'title updated',
      content: 'content updated',
    },
  };
  const state = complaintsReducer(complaints, action);
  expect(state).toContainEqual({ ...complaints[0], ...action.updates });
});

test('should set all complaints', () => {
  const action = {
    type: 'SET_COMPLAINTS',
    complaints,
  };
  const state = complaintsReducer({}, action);
  expect(state).toEqual(complaints);
});
