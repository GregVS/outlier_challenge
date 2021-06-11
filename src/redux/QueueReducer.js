import { MOCK_QUEUE_DATA } from 'MockQueue';

const INITIAL_STATE = {
    queue: MOCK_QUEUE_DATA,
    nowPlaying: null,
    isDragging: false,
};

const UPDATE_DRAG_ACTION = 'queue/UPDATE_DRAG';
const PLAY_ACTION = 'queue/PLAY_ACTION';
const REORDER_ACTION = 'queue/REORDER';
const REMOVE_ACTION = 'queue/REMOVE';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REORDER_ACTION:
            return {
                ...state,
                queue: action.queue,
            };
        case REMOVE_ACTION:
            return {
                ...state,
                queue: state.queue.filter(video => video.id !== action.videoID),
            };
        case PLAY_ACTION:
            return {
                ...state,
                nowPlaying: state.queue.find(video => video.id === action.videoID),
                queue: state.queue.filter(video => video.id !== action.videoID),
            };
        case UPDATE_DRAG_ACTION:
            return {
                ...state,
                isDragging: action.isDragging,
            };
        default:
            return state;
    }
}

export const SetDraggingAction = isDragging => ({
    type: UPDATE_DRAG_ACTION,
    isDragging,
});

export const PlayVideoAction = id => ({
    type: PLAY_ACTION,
    videoID: id,
});

export const RemoveVideoAction = id => ({
    type: REMOVE_ACTION,
    videoID: id,
});

export const ReorderQueueAction = queue => ({
    type: REORDER_ACTION,
    queue,
});
