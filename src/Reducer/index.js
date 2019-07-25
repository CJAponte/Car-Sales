import { ADD_FEATURE, REMOVE_FEATURE } from '../Action/index'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FEATURE:
        const addPrice = state.additionalPrice+action.payload.price
        const filteredStore = state.store.filter(item => {
        return item.id !== action.payload.id
      })
      return {
        ...state,
        additionalPrice: addPrice,
        car: {...state.car, features: [...state.car.features, action.payload]},
        store: filteredStore
      }
        case REMOVE_FEATURE:
            const feature = state.car.features.filter( feat => {
                return feat.id !== action.payload.id
            })

            const removePrice = state.additionalPrice-action.payload.price
            return {
              ...state,
              car: {...state.car, features: feature},
              additionalPrice: removePrice,
              store: [...state.store, action.payload]
            }
        default:
            return state;
    }
}