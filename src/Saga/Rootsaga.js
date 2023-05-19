import { all } from 'redux-saga/effects'
import usersaga from './UsersSaga'
  import { productsaga } from './ProductSaga'
import authenticationsaga from './AuthenticationSaga'
import storesaga from './StoreSaga'

export default function* rootSaga() {
  yield all([
    usersaga(),
    productsaga(),
    authenticationsaga(),
    storesaga()
  ])
}