
const initialState = {
    modalVisibility:false,
    test:'1'
}

export const Modal = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTIVATE_MODAL':
        let clone = JSON.parse(JSON.stringify(state))
        clone.modalVisibility = true;
        return clone;
      case 'CLOSE_MODAL':
        let cloneCloseModal = JSON.parse(JSON.stringify(state))
        cloneCloseModal.modalVisibility = false;
        return cloneCloseModal;
      default:
        return state;
    }
  };
  