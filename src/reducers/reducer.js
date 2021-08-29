function reducer (state ={a:0, b:0, c:0}, action) {
    console.log(action);

        switch (action.act) {
        case '+': {
            switch (action.obj) {
                case 'a': {
                    return {...state, a: state.a++}
                }
                case 'b': {
                    return {...state, b: state.b++}
                }
                case 'c': {
                    return {...state, c: state.c++}
                }
                default:
                    return state
            }
        }
            case '-': {
                switch (action.obj) {
                    case 'a': {
                            return{...state, a: state.a--}
                    }
                    case 'b': {
                            return{...state, b: state.b--}
                    }
                    case 'c': {
                             return{...state, c: state.c--}
                    }
                    default:
                        return state
                }
            }
    }
}

export default reducer;
