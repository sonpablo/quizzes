
export const gameReducer = (state, action) => {

    switch (action.type) {
        case 'CATEGORY':
            return {
                ...state,
                category: action.category,
                configured: state.difficulty ? true : false,
            }
        case 'DIFFICULTY':
            return {
                ...state,
                difficulty: action.difficulty,
                configured: state.category ? true : false
            }
        case 'INIT':
            return {
                configured: false,
                dategory: null,
                difficulty: null,
                earnedPoints: 0
            }
        default:
            return state
    }
}