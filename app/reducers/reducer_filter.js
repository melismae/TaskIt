import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from '../actions/index';

const initialState = {
  filter: 'all'
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOW_ALL:
            return Object.assign({}, state, {
                filter: 'all'
            });
        case SHOW_COMPLETED:
            return Object.assign({}, state, {
                filter: 'completed'
            });
        case SHOW_INCOMPLETE:
            return Object.assign({}, state, {
                filter: 'incomplete'
            });        
    }
    return state;
}
