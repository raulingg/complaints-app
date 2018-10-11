/* eslint import/no-extraneous-dependencies: ["error", {"optionalDependencies": false}] */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import complaints from '../fixtures/complaints';
import {
  startSetComplaints,
  setComplaints,
  startAddComplaint,
  addComplaint,
  editComplaint,
  startEditComplaint,
} from '../../actions/complaints';
import database from '../../firebase/firebase';
import moment from '../__mocks__/moment';

const user = { uid: '837748374837', displayName: 'Raul', email: 'myemail@gmail.com' };

const createMockStore = configureMockStore([thunk]);
const defaultAuthState = { auth: { user } };

const setFirebaseData = () => {
  const complaintsData = {};
  complaints.forEach(complaint => {
    complaintsData[complaint.id] = { ...complaint };
  });
  database.ref('complaints').set(complaintsData);
};

describe('ADD ACTIONS', () => {
  test('should return complaint action object with data', () => {
    const action = addComplaint(complaints[0]);
    expect(action).toEqual({
      type: 'ADD_COMPLAINT',
      complaint: complaints[0],
    });
  });

  test('should add a complaint to firebase and store', done => {
    const store = createMockStore(defaultAuthState);
    const complaintData = {
      title: 'Fucking title',
      content: 'Fucking content',
      happenedAt: 1258,
      reportedAt: 1000,
      reportTo: 'Jose',
      address: '',
    };
    store
      .dispatch(startAddComplaint(complaintData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_COMPLAINT',
          complaint: {
            id: expect.any(String),
            ...complaintData,
            uid: user.uid,
            user,
          },
        });

        return database.ref(`complaints/${actions[0].complaint.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual({ uid: user.uid, user, ...complaintData });
        done();
      });
  });

  test('should add complaint with defaults to database and store', done => {
    const store = createMockStore(defaultAuthState);
    const complaintDefaults = {
      title: '',
      content: '',
      reportedAt: moment().valueOf(),
      happenedAt: moment().valueOf(),
      reportTo: '',
      address: '',
    };

    store
      .dispatch(startAddComplaint())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'ADD_COMPLAINT',
          complaint: {
            id: expect.any(String),
            uid: user.uid,
            user,
            ...complaintDefaults,
          },
        });

        return database.ref(`complaints/${actions[0].complaint.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual({ uid: user.uid, user, ...complaintDefaults });
        done();
      });
  });
});

describe('EDIT ACTIONS', () => {
  test('should return complaint action object with data', () => {
    const updates = {
      title: 'fucking updated title',
      content: 'fucking updated content',
    };
    const id = 5;
    const action = editComplaint(id, updates);
    expect(action).toEqual({
      type: 'EDIT_COMPLAINT',
      id,
      updates,
    });
  });

  test('should update a complaint from firebase and store', done => {
    setFirebaseData();

    const store = createMockStore(defaultAuthState);
    const updates = {
      title: 'Fucking title updated',
      content: 'Fucking content updated',
    };
    const { id } = complaints[1];

    store
      .dispatch(startEditComplaint(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: 'EDIT_COMPLAINT',
          id,
          updates,
        });

        return database.ref(`complaints/${id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual({
          ...complaints[1],
          ...updates,
        });
        done();
      });
  });
});

describe('SET ACTIONS', () => {
  test('should return complaints action object with data', () => {
    const action = setComplaints(complaints);
    expect(action).toEqual({
      type: 'SET_COMPLAINTS',
      complaints,
    });
  });

  test('should fetch the complaints from firebase and set into store', done => {
    setFirebaseData();

    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetComplaints()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_COMPLAINTS',
        complaints,
      });
      done();
    });
  });
});
