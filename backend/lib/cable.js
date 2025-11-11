// Action cable connection for rails and redis
// Allows for pub/sub system to function

import { createConsumer } from '@rails/actioncable'
const cable = createConsumer("ws://localhost:3000/cable")
export default cable