import { EventEmitter } from 'events'
import dispatcher from '../../utils/Dispatcher'

import ActionTypes from '../../utils/ActionTypes'

class AdminStore extends EventEmitter {
  constructor () {
    super()
    this.userQuery = ''
    this.userDisplayed = '@kquinlivan'
    this.changePW = {
      open: false,
      submit: false,
      password: '',
      retype: ''
    }
    this.editUser = {
      birthday: '1991-11-11',
      location: 'Florida, USA',
      currency: {
        value: 'USD',
        label: '$'
      },
      misc: '',
      save: false,
      editModeOn: false
    }
    this.deleteUser = {
      open: false,
      delete: false
    }
  }

  getState = () => {
    return {
      userQuery: this.userQuery,
      userDisplayed: this.userDisplayed,
      changePW: this.changePW,
      editUser: this.editUser,
      deleteUser: this.deleteUser
    }
  }

  handleActions (action) {
    switch (action.type) {
      case ActionTypes.ADMIN_CHANGE_PW_OPEN: {
        this.changePW.open = true
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_CHANGE_PW_CANCEL: {
        this.changePW = {
          open: false,
          submit: false,
          password: '',
          retype: ''
        }
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_CHANGE_PW_CLICK_SUBMIT: {
        this.changePW.submit = true
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_CHANGE_PW_SUBMIT: {
        this.changePW = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_CHANGE_PW_PASSWORD: {
        this.changePW.password = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_CHANGE_PW_RETYPE: {
        this.changePW.retype = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_ON: {
        this.editUser.editModeOn = true
        this.editUser.save = false
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_CANCEL: {
        this.editUser.editModeOn = false
        this.editUser.save = true
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_CURRENCY: {
        this.editUser.currency = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_MISC: {
        this.editUser.misc = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_LOCATION: {
        this.editUser.location = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_EDIT_USER_BIRTHDAY: {
        this.editUser.birthday = action.value
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_DELETE_DIALOG_OPEN: {
        this.deleteUser.open = true
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_DELETE_DIALOG_CANCEL: {
        this.deleteUser.open = false
        this.emit('change')
        break
      }

      case ActionTypes.ADMIN_DELETE_DIALOG_SUBMIT: {
        this.deleteUser = {
          open: false,
          delete: true
        }
        this.emit('change')
        break
      }

      default:
    }
  }
}

const adminStore = new AdminStore()
dispatcher.register(adminStore.handleActions.bind(adminStore))
export default adminStore