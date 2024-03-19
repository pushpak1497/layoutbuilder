import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNav = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeRightNav = () => {
        onToggleShowRightNavbar()
      }
      return (
        <div className="layout-container">
          <h1>Layout</h1>
          <input
            type="checkbox"
            id="content"
            checked={showContent}
            onChange={onChangeContent}
          />
          <label htmlFor="content">Content</label>
          <input
            type="checkbox"
            checked={showLeftNavbar}
            onChange={onChangeLeftNav}
            id="leftNav"
          />
          <label htmlFor="leftNav">Left NavBar</label>
          <input
            type="checkbox"
            checked={showRightNavbar}
            onChange={onChangeRightNav}
            id="rightNav"
          />
          <label htmlFor="rightNav">Right NavBar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
