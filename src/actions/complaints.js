import database from '../firebase/firebase';

export const addComplaint = complaint => ({
  type: 'ADD_COMPLAINT',
  complaint,
});

export const startAddComplaint = (complaintData = {}) => (dispatch, getState) => {
  const {
    auth: { uid },
  } = getState();
  const {
    title = '',
    content = '',
    reportedAt = 0,
    happenedAt = 0,
    reportTo = '',
    address = '',
  } = complaintData;
  const complaint = { title, content, reportedAt, happenedAt, reportTo, address, uid };

  return database
    .ref('complaints')
    .push(complaint)
    .then(ref => {
      dispatch(
        addComplaint({
          id: ref.key,
          ...complaint,
        })
      );
    });
};

export const editComplaint = (id, updates) => ({
  type: 'EDIT_COMPLAINT',
  id,
  updates,
});

export const startEditComplaint = (id, updates) => dispatch =>
  database
    .ref(`complaints/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editComplaint(id, updates));
    });

export const setComplaints = complaints => ({
  type: 'SET_COMPLAINTS',
  complaints,
});

export const startSetComplaints = () => dispatch =>
  database
    .ref('complaints')
    .once('value')
    .then(snapshot => {
      const complaints = [];

      snapshot.forEach(childSnapshot => {
        complaints.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });

      dispatch(setComplaints(complaints));
    });
