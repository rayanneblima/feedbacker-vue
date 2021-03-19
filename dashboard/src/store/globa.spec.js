import UseStore from '../hooks/useStore'
import { cleanCurrentUser, resetUserStore, setApiKey, setCurrentUser } from './user'

describe('User Store', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = UseStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
  })

  it('should set api_key on current user', () => {
    const store = UseStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('should clean current user', () => {
    const store = UseStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
