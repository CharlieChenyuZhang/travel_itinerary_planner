import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import { format } from 'date-fns'
import { withStyles } from '@material-ui/core/styles'

import ResetPWButton from './ResetPWButton'
import AppStore from '../../AppStore'
import SearchAppBarActions from '../../appbar/SearchAppBarActions'
import SearchAppBar from '../../appbar/SearchAppBar'
// import { currencies } from './../../../utils/Fixtures.js'

const styles = theme => ({
  header: {
    display: 'flex',
    height: '20%',
    padding: 20
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto 0'
  },
  headerText: {
    padding: [[0, 20]],
    margin: 'auto 0'
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    overflow: 'auto'
  },
})
class UserProfile extends React.Component {
  constructor () {
    super()
    //SearchAppBarActions.userProfileClose()
    this.state = {
      user: AppStore.getState().user
    }
  }

  componentDidMount () {
    AppStore.on('change', this.updateState)
  }

  componentWillUnmount () {
    AppStore.removeListener('change', this.updateState)
  }

  updateState = () => { this.setState(AppStore.getState().user) }
  updateBirthday = () => true //fill in

  render () {
    const { classes } = this.props
    const { user } = this.state
    console.log(user);
    //const { birthday, location, currency, misc, editModeOn } = this.state

    return (
      <div className={classes.root}>
        <SearchAppBar page='userProfile'/>
        <div className={classes.header}>
          <Avatar alt='profile_pic'
            src={require('../../../images/avatar/kyle_quinlivan.png')}
            className={classes.avatar}
          />
          <div className={classes.headerText}>
            <Typography variant='h5' gutterBottom>
              {`${user.fullName}`}
            </Typography>
            <Typography variant='subtitle1' gutterBottom>
              {`@${user.username}`}
            </Typography>
            <Typography variant='subtitle1'>
              {`Birthday: ${format(user.birthday, 'MMMM do yyyy')}`}
            </Typography>
          </div>
        </div>
        <Divider />
        <div className={classes.body}>
          <div className={classes.infoLayout}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                margin='normal'
                name='birthday'
                label='Birthday'
                value={user.birthday}
                format='MMMM dd, yyyy'
                disableFuture
                openTo='year'
                views={['year', 'month', 'day']}
                onChange={this.updateBirthday}
                className={classes.textField}
              />
            </MuiPickersUtilsProvider>
            <ResetPWButton />
          </div>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(UserProfile)
