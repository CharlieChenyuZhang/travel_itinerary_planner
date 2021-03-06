const ActionTypes = {
  ADMIN_CHANGE_PW_CANCEL: 'ADMIN_CHANGE_PW_CANCEL',
  ADMIN_CHANGE_PW_OPEN: 'ADMIN_CHANGE_PW_OPEN',
  ADMIN_CHANGE_PW_PASSWORD: 'ADMIN_CHANGE_PW_PASSWORD',
  ADMIN_CHANGE_PW_RETYPE: 'ADMIN_CHANGE_PW_RETYPE',
  ADMIN_CHANGE_PW_CLICK_SUBMIT: 'ADMIN_CHANGE_PW_CLICK_SUBMIT',
  ADMIN_CHANGE_PW_SUBMIT: 'ADMIN_CHANGE_PW_SUBMIT',
  ADMIN_CHANGE_USER_DISPLAYED: 'ADMIN_CHANGE_USER_DISPLAYED',
  ADMIN_DELETE_DIALOG_CANCEL: 'ADMIN_DELETE_DIALOG_CANCEL',
  ADMIN_DELETE_DIALOG_OPEN: 'ADMIN_DELETE_DIALOG_OPEN',
  ADMIN_DELETE_DIALOG_SUBMIT: 'ADMIN_DELETE_DIALOG_SUBMIT',
  ADMIN_EDIT_USER_BIRTHDAY: 'ADMIN_EDIT_USER_BIRTHDAY',
  ADMIN_EDIT_USER_LOCATION: 'ADMIN_EDIT_USER_LOCATION',
  ADMIN_EDIT_USER_MISC: 'ADMIN_EDIT_USER_MISC',
  ADMIN_EDIT_USER_FULLNAME: 'ADMIN_EDIT_USER_FULLNAME',
  ADMIN_EDIT_USER_ON: 'ADMIN_EDIT_USER_ON',
  ADMIN_EDIT_USER_PROFILE_PICTURE: 'ADMIN_EDIT_USER_PROFILE_PICTURE',
  ADMIN_EDIT_USER_SAVE: 'ADMIN_EDIT_USER_SAVE',
  ADMIN_PROFILE_PIC_DIALOG_OPEN: 'ADMIN_PROFILE_PIC_DIALOG_OPEN',
  ADMIN_TOGGLE_SNACKBAR: 'ADMIN_TOGGLE_SNACKBAR',
  ADMIN_USER_LOAD: 'ADMIN_USER_LOAD',
  APPBAR_USER_PROFILE_OPEN: 'APPBAR_USER_PROFILE_OPEN',
  APPBAR_USER_PROFILE_CLOSE: 'APPBAR_USER_PROFILE_CLOSE',
  CREATE_ACCOUNT_CANCEL: 'CREATE_ACCOUNT_CANCEL',
  CREATE_ACCOUNT_CHANGE: 'CREATE_ACCOUNT_CHANGE',
  CREATE_ACCOUNT_DUPLICATE_ACCOUNT: 'CREATE_ACCOUNT_DUPLICATE_ACCOUNT',
  CREATE_ACCOUNT_CLICK_SUBMIT: 'CREATE_ACCOUNT_CLICK_SUBMIT',
  CREATE_ACCOUNT_OPEN: 'CREATE_ACCOUNT_OPEN',
  CREATE_ACCOUNT_SUBMIT: 'CREATE_ACCOUNT_SUBMIT',
  CREATE_ACCOUNT_CONFIRM_TOGGLE: 'CREATE_ACCOUNT_CONFIRM_TOGGLE',
  CREATE_ACCOUNT_PROFILE_PICTURE_TOGGLE: 'CREATE_ACCOUNT_PROFILE_PICTURE_TOGGLE',
  CREATE_ACCOUNT_PROFILE_PICTURE_CANCEL: 'CREATE_ACCOUNT_PROFILE_PICTURE_CANCEL',
  CREATE_ACCOUNT_PROFILE_PICTURE_SELECT: 'CREATE_ACCOUNT_PROFILE_PICTURE_SELECT',
  ITINERARY_CLEAR: 'ITINERARY_CLEAR',
  ITINERARY_LOAD: 'ITINERARY_LOAD',
  ITINERARY_EVENT_ADD: 'ITINERARY_EVENT_ADD',
  ITINERARY_EVENT_REMOVE: 'ITINERARY_EVENT_REMOVE',
  ITINERARY_EVENT_INFO_OPEN: 'ITINERARY_EVENT_INFO_OPEN',
  ITINERARY_EVENT_INFO_CLOSE: 'ITINERARY_EVENT_INFO_CLOSE',
  ITINERARY_NAME_CHANGE: 'ITINERARY_NAME_CHANGE',
  ITINERARY_DELETE_SUCCESS: 'ITINERARY_DELETE_SUCCESS',
  ITINERARY_DELETE_FAILURE: 'ITINERARY_DELETE_FAILURE',
  ITINERARY_SAVE_SUCCESS: 'ITINERARY_SAVE_SUCCESS',
  ITINERARY_PATCH_SUCCESS: 'ITINERARY_PATCH_SUCCESS',
  ITINERARY_PATCH_FAILURE: 'ITINERARY_PATCH_FAILURE',
  ITINERARY_SAVE_FAILURE: 'ITINERARY_SAVE_FAILURE',
  PREFERENCES_DRAWER_OPEN: 'PREFERENCES_DRAWER_OPEN',
  PREFERENCES_DRAWER_CLOSE: 'PREFERENCES_DRAWER_CLOSE',
  PREFERENCES_CHANGE: 'PREFERENCES_CHANGE',
  PREFERENCES_TOGGLE_CATEGORY: 'PREFERENCES_TOGGLE_CATEGORY',
  RECOMMENDATION_ADD: 'RECOMMENDATION_ADD',
  RECOMMENDATION_REMOVE: 'RECOMMENDATION_REMOVE',
  RECOMMENDATIONS_LOAD: 'RECOMMENDATIONS_LOAD',
  SEARCHBAR_CHANGE: 'SEARCHBAR_CHANGE',
  SEARCHBAR_SEARCH: 'SEARCHBAR_SEARCH',
  SIGNIN_DIALOG_OPEN: 'SIGNIN_DIALOG_OPEN',
  SIGNIN_DIALOG_CANCEL: 'SIGNIN_DIALOG_CANCEL',
  SIGNIN_DIALOG_EMAIL_CHANGE: 'SIGNIN_DIALOG_EMAIL_CHANGE',
  SIGNIN_DIALOG_PASSWORD_CHANGE: 'SIGNIN_DIALOG_PASSWORD_CHANGE',
  SIGNIN_DIALOG_SIGNIN_FAILURE: 'SIGNIN_DIALOG_SIGNIN_FAILURE',
  SIGNIN_DIALOG_SIGNIN_SUCCESS: 'SIGNIN_DIALOG_SIGNIN_SUCCESS',
  SIGNIN_DIALOG_USERNAME_NOT_FOUND: 'SIGNIN_DIALOG_USERNAME_NOT_FOUND',
  SIGNIN_DIALOG_INVALID_PASSWORD: 'SIGNIN_DIALOG_INVALID_PASSWORD',
  SIGNOUT: 'SIGNOUT',
  TRAVEL_DATE_CHANGE: 'TRAVEL_DATE_CHANGE',
  USERPROFILE_EDIT: 'USERPROFILE_EDIT',
  USERPROFILE_EXPAND_PANEL: 'USERPROFILE_EXPAND_PANEL',
  USERPROFILE_TOGGLE_DELETE_ACCOUNT_DIALOG: 'USERPROFILE_TOGGLE_DELETE_ACCOUNT_DIALOG',
  USERPROFILE_TOGGLE_ITINERARY_SAVE_SNACKBAR: 'USERPROFILE_TOGGLE_ITINERARY_SAVE_SNACKBAR',
  USERPROFILE_TOGGLE_EDIT_PROFILE_PICTURE_BUTTON: 'USERPROFILE_TOGGLE_EDIT_PROFILE_PICTURE_BUTTON',
  USERPROFILE_TOGGLE_PROFILE_PICTURE_DIALOG: 'USERPROFILE_TOGGLE_PROFILE_PICTURE_DIALOG',
  USERPROFILE_TOGGLE_RENAME_ITINERARY_DIALOG: 'USERPROFILE_TOGGLE_RENAME_ITINERARY_DIALOG',
  USERPROFILE_ITINERARY_NAME_CHANGE: 'USERPROFILE_ITINERARY_NAME_CHANGE',
  USERPROFILE_ITINERARY_RENAME_CANCEL: 'USERPROFILE_ITINERARY_RENAME_CANCEL',
  USERPROFILE_ITINERARY_RENAME_CONFIRM: 'USERPROFILE_ITINERARY_RENAME_CONFIRM',
  USERPROFILE_CHANGES_SUBMITTED: 'USERPROFILE_CHANGES_SUBMITTED',
  USERPROFILE_DELETE_ACCOUNT: 'USERPROFILE_DELETE_ACCOUNT',
  USERPROFILE_CANCEL_PROFILE_PICTURE: 'USERPROFILE_CANCEL_PROFILE_PICTURE',
  USERSEARCH_CHANGE: 'USERSEARCH_CHANGE',
  USERSEARCH_SEARCH: 'USERSEARCH_SEARCH',
  USER_CHANGE_PW_OPEN: 'USER_CHANGE_PW_OPEN',
  USER_CHANGE_PW_CLICK_SUBMIT: 'USER_CHANGE_PW_CLICK_SUBMIT',
  USER_CHANGE_PW_CANCEL: 'USER_CHANGE_PW_CANCEL',
  USER_CHANGE_PW_SUBMIT: 'USER_CHANGE_PW_SUBMIT',
  USER_CHANGE_PW_PASSWORD: 'USER_CHANGE_PW_PASSWORD',
  USER_CHANGE_PW_RETYPE: 'USER_CHANGE_PW_RETYPE'
}

export default ActionTypes
