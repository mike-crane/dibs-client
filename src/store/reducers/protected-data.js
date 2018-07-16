import {
  FETCH_PROPERTY_DATA_SUCCESS,
  FETCH_PROPERTY_DATA_ERROR
} from '../../actions/protected-data';

const initialState = {
  user: {
    firstName: "John",
    lastName: "Doe",
    username: "beachBum"
  },
  properties: [
    {
      id: 3423141,
      name: "Beach House",
      address: {
        street: "150 Ocean Blvd",
        state: "NC",
        city: "Wrightsville",
        zipcode: 28480
      },
      type: "house",
      owner: "beachBum"
    },
    {
      id: 9231230,
      name: "Downtown Apartment",
      address: {
        street: "210 Main Street",
        state: "NC",
        city: "Charlotte",
        zipcode: 28105
      },
      type: "apartment",
      owner: "globeTr0ttr"
    },
    {
      id: 7897234,
      name: "Mountain House",
      address: {
        street: "340 Eagles Nest Way",
        state: "NC",
        city: "Asheville",
        zipcode: 28715
      },
      type: "house",
      owner: "mommaD05"
    }
  ],
  reservations: [
    {
      propertyID: 3423141,
      username: "mommaD05",
      start: "5-2-2018",
      end: "5-6-2018"
    },
    {
      propertyID: 9231230,
      username: "beachBum",
      start: "6-22-2018",
      end: "6-31-2018"
    },
    {
      propertyID: 7897234,
      username: "globeTr0ttr",
      start: "8-12-2018",
      end: "8-16-2018"
    },
    {
      propertyID: 7897234,
      username: "beachBum",
      start: "8-25-2018",
      end: "8-28-2018"
    },
    {
      propertyID: 3423141,
      username: "globeTr0ttr",
      start: "9-2-2018",
      end: "9-10-2018"
    },
    {
      propertyID: 9231230,
      username: "mommaD05",
      start: "10-8-2018",
      end: "10-10-2018"
    }
  ]
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROPERTY_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_PROPERTY_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}