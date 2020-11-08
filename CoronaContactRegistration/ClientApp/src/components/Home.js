﻿import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import LanguageSelect from './LanguageSelect'
import Questionaire from './Questionaire';

const Home = (props) => {
	const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

	return (
		<Container>
			<Row>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<LanguageSelect />
				</Col>
			</Row>
			<Row>
				<Col sm="12" md={{ size: 6, offset: 3 }}>
					<Questionaire />
				</Col>
			</Row>
		</Container>);
}

export default Home;