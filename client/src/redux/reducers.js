import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from './actions';

const initialState = {
    items: [
        {
            name: "Pineapple",
            description: "Sour",
            price: 10,
            image: "https://www.eatingwell.com/thmb/w7HHk8DRmM0QKmwvtP3Jd-6Vifw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pineapple-purple-background-gettyimages-932252212-hero-57df3fb128b045418c13aa1ff5c548ca.jpg"
        },
        {
            name: "Banana",
            description: "Useful when you need quick energy supplement",
            price: 3,
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg?quality=90&resize=440,400"
        }
    ],
};

export default function inventoryReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.item] };
        case DELETE_ITEM:
            return { ...state, items: state.items.filter((_, index) => index !== action.index) };
        case DELETE_ALL:
            return { ...state, items: [] };
        default:
            return state;
    }
}