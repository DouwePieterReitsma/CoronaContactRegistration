import React, { useState } from 'react'
import { Container, Row, Col, Navbar, NavbarBrand, UncontrolledDropdown, Nav, NavbarToggler, Collapse, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import ContactInformationForm from './ContactInformationForm'
import { useTranslation } from 'react-i18next'
import ThankYouMessage from './ThankYouMessage'

const Home = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [t, i18n] = useTranslation();
    const [uploaded, setUploaded] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">CoronaForm 1.0</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar right>
                            <DropdownToggle nav caret>
                                {t("language")}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={e => i18n.changeLanguage("en")}>English</DropdownItem>
                                <DropdownItem onClick={e => i18n.changeLanguage("de")}>Deutsch</DropdownItem>
                                <DropdownItem onClick={e => i18n.changeLanguage("nl")}>Nederlands</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="content" style={{ marginTop: '15px' }}>
                <Container>
                    <Row>
                        <Col md={{ size: 4, offset: 4 }}>
                            {uploaded ? <ThankYouMessage /> : <ContactInformationForm onUpload={() => setUploaded(true)} />}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;