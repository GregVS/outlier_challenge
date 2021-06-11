import { MOCK_QUEUE_DATA } from 'MockQueue';

const INITIAL_STATE = {
    queue: MOCK_QUEUE_DATA,
    nowPlaying: null,
    isDragging: false,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REORDER':
            return {
                ...state,
                queue: action.queue,
            };
        case 'REMOVE':
            return {
                ...state,
                queue: state.queue.filter(video => video.id !== action.videoID),
            };
        case 'PLAY':
            return {
                ...state,
                nowPlaying: state.queue.find(video => video.id === action.videoID),
                queue: state.queue.filter(video => video.id !== action.videoID),
            };
        case 'UPDATE_DRAG':
            return {
                ...state,
                isDragging: action.isDragging,
            };
        default:
            return state;
    }
}

export const SetDraggingAction = isDragging => ({
    type: 'UPDATE_DRAG',
    isDragging,
});

export const PlayVideoAction = id => ({
    type: 'PLAY',
    videoID: id,
});

export const RemoveVideoAction = id => ({
    type: 'REMOVE',
    videoID: id,
});

export const ReorderQueueAction = queue => ({
    type: 'REORDER',
    queue,
});
