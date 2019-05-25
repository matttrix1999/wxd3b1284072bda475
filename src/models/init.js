import leancloud from '../utils/leancloud'
import UserBookMap from './user_book_map'
import Book from './book'

const { LEANCLOUD_APP_ID, LEANCLOUD_APP_KEY } = process.env

leancloud.init({
  appId: LEANCLOUD_APP_ID,
  appKey: LEANCLOUD_APP_KEY
})

leancloud.Object.register(UserBookMap)
leancloud.Object.register(Book)
