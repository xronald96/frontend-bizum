
export const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER"
export const OPEN_TOAST ="OPEN_TOAST"
export const UPDATE_FRIEND_LIST ="UPDATE_FRIEND_LIST"

export const updateCurrentUser = (id) => {
  return {
    type: UPDATE_CURRENT_USER,
    payload: id,
  };
};

export const openToast = (data) => {
  return {
    type: OPEN_TOAST,
    payload: data
  };
};

export const updateFriendList = (data) => {
  return {
    type: UPDATE_FRIEND_LIST,
    payload: data
  };
};