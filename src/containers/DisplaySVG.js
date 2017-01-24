import { connect } from 'react-redux'
import SVG from '../components/SVG'

const mapStateToProps = (state, ownProps) => ({
  recs: state.recs
})

const DisplaySVG = connect(
  mapStateToProps
)(SVG)

export default DisplaySVG
