import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer} from './reducers/productReducers'
import {userLoginReducer} from './reducers/userReducers'

const reducer = combineReducers({
  productList: productListReducer, 
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  userLogin: userLoginReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
  (localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store