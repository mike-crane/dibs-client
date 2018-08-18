import reducer from "../store/reducers/protected-data";
import {
  postPropertyDataSuccess,
  postReservationDataSuccess
} from "../actions/protected-data";

describe("reducer", () => {
  // Set up some dummy data
  const propertyName = "Beach house";
  const street = "1 South St";
  const city = "Pleasantville";
  const state = "WY";
  const zipcode = "00000";
  const type = "house";
  const owner = "Bob";
  const thumbUrl = "https://www.example.com";
  const propertyId = "8909323";

  const property2Name = "Moutain house";
  const street2 = "20 Boulder St";
  const city2 = "Asheville";
  const state2 = "NC";
  const zipcode2 = "11111";
  const type2 = "house";
  const owner2 = "Bill";
  const thumbUrl2 = "https://www.example.com";
  const property2Id = "8909324";

  const reservationProperty = "Beach house";
  const username = "dibs_demo";
  const start = "8/12/2018";
  const end = "8/20/2018";
  const reservationId = "5434354";

  const reservation2Property = "Moutain house";
  const username2 = "james_bond";
  const start2 = "9/20/2018";
  const end2 = "9/23/2018";
  const reservation2Id = "5434355";

  const property = {
    name: propertyName,
    street: street,
    city: city,
    state: state,
    zipcode: zipcode,
    type: type,
    owner: owner,
    thumbUrl: thumbUrl,
    id: propertyId
  };

  const property2 = {
    name: property2Name,
    street: street2,
    city: city2,
    state: state2,
    zipcode: zipcode2,
    type: type2,
    owner: owner2,
    thumbUrl: thumbUrl2,
    id: property2Id
  };

  const reservation = {
    username: username,
    propertyName: reservationProperty,
    start: start,
    end: end,
    id: reservationId
  };

  const reservation2 = {
    username: username2,
    propertyName: reservation2Property,
    start: start2,
    end: end2,
    id: reservation2Id
  };

  it("Should set the initial state when nothing is passed in", () => {
    const state = reducer(undefined, { type: "__UNKNOWN" });
    expect(state).toEqual({
      user: null,
      selectedProperty: null,
      properties: [],
      currentReservation: {
        propertyID: null,
        propertyName: "",
        username: "",
        start: "",
        end: ""
      },
      selectedReservation: {
        title: "",
        guest: "",
        start: "",
        end: "",
        id: null
      },
      reservations: [],
      showModal: false,
      error: null
    });
  });

  it("Should return the current state on an unknown action", () => {
    let currentState = {};
    const state = reducer(currentState, { type: "__UNKNOWN" });
    expect(state).toBe(currentState);
  });

  describe("postPropertyDataSuccess", () => {
    it("Should add a new property", () => {
      let state;
      state = reducer(state, postPropertyDataSuccess(property));
      state = reducer(state, postPropertyDataSuccess(property2));
      expect(state).toEqual({
        user: null,
        selectedProperty: null,
        properties: [property, property2],
        currentReservation: {
          propertyID: null,
          propertyName: "",
          username: "",
          start: "",
          end: ""
        },
        selectedReservation: {
          title: "",
          guest: "",
          start: "",
          end: "",
          id: null
        },
        reservations: [],
        showModal: false,
        error: null
      });
    });
  });

  describe("postReservationDataSuccess", () => {
    it("Should add a new reservation", () => {
      let state = {
        user: null,
        selectedProperty: null,
        properties: [property, property2],
        currentReservation: {
          propertyID: null,
          propertyName: "",
          username: "",
          start: "",
          end: ""
        },
        selectedReservation: {
          title: "",
          guest: "",
          start: "",
          end: "",
          id: null
        },
        reservations: [],
        showModal: false,
        error: null
      };
      state = reducer(state, postReservationDataSuccess(reservation));
      state = reducer(state, postReservationDataSuccess(reservation2));
      expect(state).toEqual({
        user: null,
        selectedProperty: null,
        properties: [property, property2],
        currentReservation: {
          propertyID: null,
          propertyName: "",
          username: "",
          start: "",
          end: ""
        },
        selectedReservation: {
          title: "",
          guest: "",
          start: "",
          end: "",
          id: null
        },
        reservations: [reservation, reservation2],
        showModal: false,
        error: null
      });
    });
  });
});
