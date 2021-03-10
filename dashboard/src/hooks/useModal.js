import eventbus from '../utils/eventbus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  function open (payload = {}) {
    eventbus.emit(EVENT_NAME, { status: true, ...payload })
  }

  function close (payload = {}) {
    eventbus.emit(EVENT_NAME, { status: false, ...payload })
  }

  function listen (func) {
    eventbus.on(EVENT_NAME, func)
  }

  function off (func) {
    eventbus.off(EVENT_NAME, func)
  }

  return { open, close, listen, off }
}
