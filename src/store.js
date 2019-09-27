import {creatStore} from 'redux'
import reducer from './ducks/reducer'





export default creatStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )