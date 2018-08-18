import {
  FETCH_PROPERTY_DATA_SUCCESS,
  fetchPropertyDataSuccess,
  FETCH_PROPERTY_DATA_ERROR,
  fetchPropertyDataError,
  FETCH_RESERVATION_DATA_SUCCESS,
  fetchReservationDataSuccess,
  FETCH_RESERVATION_DATA_ERROR,
  fetchReservationDataError,
  FETCH_USER_RESERVATION_DATA_SUCCESS,
  fetchUserReservationDataSuccess,
  FETCH_USER_RESERVATION_DATA_ERROR,
  fetchUserReservationDataError,
  POST_PROPERTY_DATA_SUCCESS,
  postPropertyDataSuccess,
  POST_PROPERTY_DATA_ERROR,
  postPropertyDataError,
  POST_RESERVATION_DATA_SUCCESS,
  postReservationDataSuccess,
  POST_RESERVATION_DATA_ERROR,
  postReservationDataError,
  EDIT_SELECTED_PROPERTY_SUCCESS,
  editSelectedPropertySuccess,
  EDIT_SELECTED_PROPERTY_ERROR,
  editSelectedPropertyError,
  DELETE_SELECTED_PROPERTY_SUCCESS,
  deleteSelectedPropertySuccess,
  DELETE_SELECTED_PROPERTY_ERROR,
  deleteSelectedPropertyError,
  DELETE_RESERVATION_SUCCESS,
  deleteReservationSuccess,
  DELETE_RESERVATION_ERROR,
  deleteReservationError,
  SET_SELECTED_PROPERTY,
  setSelectedProperty,
  SHOW_SELECTED_RESERVATION,
  showSelectedReservation,
  CLEAR_SELECTED_RESERVATION,
  clearSelectedReservation,
  CLEAR_SELECTED_PROPERTY,
  clearSelectedProperty,
  SET_SELECTED_DATE,
  setSelectedDate,
  CLEAR_SELECTED_DATE,
  clearSelectedDate,
  SHOW_MODAL,
  showModal,
  HIDE_MODAL,
  hideModal
} from "../actions/protected-data";

describe("fetchPropertyDataSuccess", () => {
  it("Should return the action", () => {
    const data = "property data";
    const action = fetchPropertyDataSuccess(data);
    expect(action.type).toEqual(FETCH_PROPERTY_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("fetchPropertyDataError", () => {
  it("Should return the action", () => {
    const error = "property error";
    const action = fetchPropertyDataError(error);
    expect(action.type).toEqual(FETCH_PROPERTY_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("fetchReservationDataSuccess", () => {
  it("Should return the action", () => {
    const data = "Reservation data";
    const action = fetchReservationDataSuccess(data);
    expect(action.type).toEqual(FETCH_RESERVATION_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("fetchReservationDataError", () => {
  it("Should return the action", () => {
    const error = "Reservation error";
    const action = fetchReservationDataError(error);
    expect(action.type).toEqual(FETCH_RESERVATION_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("fetchUserReservationDataSuccess", () => {
  it("Should return the action", () => {
    const data = "User Reservation data";
    const action = fetchUserReservationDataSuccess(data);
    expect(action.type).toEqual(FETCH_USER_RESERVATION_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("fetchUserReservationDataError", () => {
  it("Should return the action", () => {
    const error = "User Reservation error";
    const action = fetchUserReservationDataError(error);
    expect(action.type).toEqual(FETCH_USER_RESERVATION_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("postPropertyDataSuccess", () => {
  it("Should return the action", () => {
    const data = "property data";
    const action = postPropertyDataSuccess(data);
    expect(action.type).toEqual(POST_PROPERTY_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("postPropertyDataError", () => {
  it("Should return the action", () => {
    const error = "property error";
    const action = postPropertyDataError(error);
    expect(action.type).toEqual(POST_PROPERTY_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("postReservationDataSuccess", () => {
  it("Should return the action", () => {
    const data = "Reservation data";
    const action = postReservationDataSuccess(data);
    expect(action.type).toEqual(POST_RESERVATION_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("postReservationDataError", () => {
  it("Should return the action", () => {
    const error = "Reservation error";
    const action = postReservationDataError(error);
    expect(action.type).toEqual(POST_RESERVATION_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("editSelectedPropertySuccess", () => {
  it("Should return the action", () => {
    const property = "property data";
    const action = editSelectedPropertySuccess(property);
    expect(action.type).toEqual(EDIT_SELECTED_PROPERTY_SUCCESS);
    expect(action.property).toEqual(property);
  });
});

describe("editSelectedPropertyError", () => {
  it("Should return the action", () => {
    const error = "property error";
    const action = editSelectedPropertyError(error);
    expect(action.type).toEqual(EDIT_SELECTED_PROPERTY_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("deleteSelectedPropertySuccess", () => {
  it("Should return the action", () => {
    const data = "property data";
    const action = deleteSelectedPropertySuccess(data);
    expect(action.type).toEqual(DELETE_SELECTED_PROPERTY_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("deleteSelectedPropertyError", () => {
  it("Should return the action", () => {
    const error = "property error";
    const action = deleteSelectedPropertyError(error);
    expect(action.type).toEqual(DELETE_SELECTED_PROPERTY_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("deleteReservationSuccess", () => {
  it("Should return the action", () => {
    const data = "reservation data";
    const action = deleteReservationSuccess(data);
    expect(action.type).toEqual(DELETE_RESERVATION_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe("deleteReservationError", () => {
  it("Should return the action", () => {
    const error = "reservation error";
    const action = deleteReservationError(error);
    expect(action.type).toEqual(DELETE_RESERVATION_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("setSelectedProperty", () => {
  it("Should return the action", () => {
    const property = "property data";
    const username = "user data";
    const action = setSelectedProperty(property, username);
    expect(action.type).toEqual(SET_SELECTED_PROPERTY);
    expect(action.property).toEqual(property);
    expect(action.username).toEqual(username);
  });
});

describe("showSelectedReservation", () => {
  it("Should return the action", () => {
    const reservation = "reservation data";
    const action = showSelectedReservation(reservation);
    expect(action.type).toEqual(SHOW_SELECTED_RESERVATION);
    expect(action.reservation).toEqual(reservation);
  });
});

describe("clearSelectedReservation", () => {
  it("Should return the action", () => {
    const action = clearSelectedReservation();
    expect(action.type).toEqual(CLEAR_SELECTED_RESERVATION);
  });
});

describe("clearSelectedProperty", () => {
  it("Should return the action", () => {
    const action = clearSelectedProperty();
    expect(action.type).toEqual(CLEAR_SELECTED_PROPERTY);
  });
});

describe("setSelectedDate", () => {
  it("Should return the action", () => {
    const slotInfo = "reservation dates";
    const action = setSelectedDate(slotInfo);
    expect(action.type).toEqual(SET_SELECTED_DATE);
    expect(action.slotInfo).toEqual(slotInfo);
  });
});

describe("clearSelectedDate", () => {
  it("Should return the action", () => {
    const action = clearSelectedDate();
    expect(action.type).toEqual(CLEAR_SELECTED_DATE);
  });
});

describe("showModal", () => {
  it("Should return the action", () => {
    const action = showModal();
    expect(action.type).toEqual(SHOW_MODAL);
  });
});

describe("hideModal", () => {
  it("Should return the action", () => {
    const action = hideModal();
    expect(action.type).toEqual(HIDE_MODAL);
  });
});
