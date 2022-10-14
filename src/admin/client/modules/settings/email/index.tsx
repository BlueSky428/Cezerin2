import { useAppDispatch, useAppSelector } from "lib/hooks"
import { connect } from "react-redux"
import { fetchEmailSettings } from "../actions"
import Form from "./components/form"

const Redux = props => {
  const {} = useAppSelector()
  const dispatch = useAppDispatch()

  return null
}

const mapStateToProps = state => {
  return {
    emailSettings: state.settings.emailSettings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(fetchEmailSettings())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
