import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'

import LandingStore from './LandingStore'
import LandingActions from './LandingActions'
import AppStore from '../AppStore'
import LoginStates from '../../LoginStates'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  avatar: {
    alignSelf: 'center',
    marginTop: '16px',
    backgroundColor: '#E10050'
  },

  content: {
    padding: '0px 20px 20px 20px'
  },

  title: {
    textAlign: 'center'
  },
}

class SigninDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getNewState()
  }

  componentDidMount () {
    LandingStore.on('change', this.updateState)
    AppStore.on('change', this.updateState)
  }

  componentWillUnmount () {
    LandingStore.removeListener('change', this.updateState)
    AppStore.removeListener('change', this.updateState)
  }

  getNewState = () => {
    const { signin } = LandingStore.getState()
    return Object.assign({}, signin, AppStore.getState())
  }

  updateState = () => this.setState(this.getNewState())

  updateEmail = name => event => {
    LandingActions.signinDialogEmailChange(event.target.value)
  }
  //
  updatePassword = name => event => {
    LandingActions.signinDialogPasswordChange(event.target.value)
  }

  createAccountOpen = () => LandingActions.createAccountOpen()

  cancel = () => LandingActions.signinDialogCancel()

  doLogin = () => {
    LandingActions.signinDialogSigninStart({
      username: this.state.email,
      password: this.state.password
    })
  }

  render () {
    return (
      <Dialog
        open={this.state.open && this.state.loggedInState !== LoginStates.loggedIn}
        onClose={this.cancel}
        className={this.props.classes.root}>
        <Avatar className={this.props.classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <DialogTitle
          id='signinDialogTitle'
          className={this.props.classes.title}>
          Sign In
        </DialogTitle>
        <DialogContent className={this.props.classes.content}>
          <DialogContentText>
            {this.state.dialogText}
          </DialogContentText>
          <form>
            <TextField
              autoComplete='username email'
              value={this.state.email}
              onChange={this.updateEmail('Email Address')}
              autoFocus
              margin='dense'
              id='email'
              label='Email Address'
              type='email'
              fullWidth
            />
            <TextField
              autoComplete='current-password'
              value={this.state.password}
              onChange={this.updatePassword('Password')}
              margin='dense'
              id='password'
              label='Password'
              type='password'
              fullWidth
            />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.forgotPassword} color='primary'>
            Forgot Password?
          </Button>
          <Button onClick={this.createAccountOpen} color='primary'>
            Sign Up
          </Button>
          <Button variant='contained' onClick={this.doLogin} color='primary'>
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(SigninDialog)
