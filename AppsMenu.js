import React from 'react'
import { Navbar, DropdownButton, Dropdown } from 'react-bootstrap'
import { MdApps } from 'react-icons/md'

import './AppsMenu.css'

class AppsMenu extends React.Component {

    constructor( props ) {
        super( props )
        this.props = props
        this.renderButton = this.renderButton.bind(this)
    }

    renderButton() {
        return(
            <DropdownButton alignRight id="apps-button" className={this.props.color === "light" ? "dark-bg" : ""} title={<MdApps size="1.5em"/>}>
				{this.props.apps.map((app, i) => (
					<Dropdown.Item key={i} className="app-icon" href={app.link} target="_blank">
						{this.renderIcon(app.icon)}<br />
						{app.text}
					</Dropdown.Item>
				), this )}
            </DropdownButton>
        )
    }

	renderIcon( Icon ) {
		return(
			<Icon size="3rem" />
		)
	}

    render() {
        return (
            this.props && this.props.display && this.props.display === "fixed" ?
                <Navbar id="apps-bar" className="justify-content-end" bg="light" expand="lg">
                    { this.renderButton() }
                </Navbar>
            : this.props && this.props.display && this.props.display === "icon" ?
                this.renderButton()
            :
                <Navbar style={{position:"absolute"}} className="justify-content-end" bg={this.props.color === "light" ? "dark" : "light"} expand="lg">
                    { this.renderButton() }
                </Navbar>
        )
    }

}

export default AppsMenu
