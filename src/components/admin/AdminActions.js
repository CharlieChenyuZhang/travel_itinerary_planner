import dispatcher from '../../utils/Dispatcher'
import ActionTypes from '../../utils/ActionTypes'
import { getAllUsers, patchUser, getUser } from '../../utils/ServerMethods'

const AdminActions = {
  clickSubmit () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_CLICK_SUBMIT
    })
  },

  changePWDialogOpen () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_OPEN
    })
  },

  changePWDialogClose () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_CANCEL
    })
  },

  changePWClickSubmit () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_CLICK_SUBMIT
    })
  },

  changePWSubmit (formData) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_SUBMIT
    })
  },

  changePWPassword (password) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_PASSWORD,
      value: password
    })
  },

  changePWRetype (retype) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_PW_RETYPE,
      value: retype
    })
  },

  deleteUserDialogOpen () {//TODO: 
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_DELETE_DIALOG_OPEN
    })
  },

  deleteUserDialogCancel () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_DELETE_DIALOG_CANCEL
    })
  },

  deleteUserDialogSubmit (user) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_DELETE_DIALOG_SUBMIT,
      value: user
    })
  },

  editModeOn () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_EDIT_USER_ON
    })
  },

  editModeCancel (user) {//TODO: 
    // get the current user
    getUser(user)
    .then((res) => {
      console.log("-----", res)
      console.log("++++", res.value)
      patchUser(res.value)
    })
    .then((res) => {
      dispatcher.dispatch({
        type: ActionTypes.ADMIN_EDIT_USER_CANCEL
      })
    })
    .catch((error) => console.log(error))
  },

  editModeSave () {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_EDIT_USER_SAVE
    })
  },

  editUserBirthday (birthday) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_EDIT_USER_BIRTHDAY,
      value: birthday
    })
  },

  editUserLocation (location) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_EDIT_USER_LOCATION,
      value: location
    })
  },

  editUserMisc (misc) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_EDIT_USER_MISC,
      value: misc
    })
  },

  startLoad () {
    getAllUsers().then((res) => {
      dispatcher.dispatch({
        type: ActionTypes.ADMIN_USER_LOAD,
        value: res
      })
      // dispatcher.waitFor([searchappbarStore.dispatcherToken])
    }).catch((err) => {
      console.log(err)
    })
    // dispatcher.dispatch({
    //   type: ActionTypes.ADMIN_USER_LOAD
    // })
  },

  changeUserDisplayed (user) {
    dispatcher.dispatch({
      type: ActionTypes.ADMIN_CHANGE_USER_DISPLAYED,
      value: user
    })
  },

  userSearchChange (query) {
    dispatcher.dispatch({
      type: ActionTypes.USERSEARCH_CHANGE,
      value: query
    })
  },

  userSearch (query) {
    dispatcher.dispatch({
      type: ActionTypes.USERSEARCH_SEARCH,
      value: query
    })
  }
}

export default AdminActions
