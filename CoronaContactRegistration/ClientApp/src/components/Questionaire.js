import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import LocalizedStrings from 'react-localization'

const Questionaire = (props) => {
	const strings = new LocalizedStrings({
		nl: {
			name: "Naam",
			phoneNumber: "Telefoonnummer",
			email: "E-mail",
			complaints: {

			},
			question1: "Heb je een of meerdere van deze klachten (gehad in de afgelopen 24 uur)?",
			question2: "Heb je op dit moment een huisgenoot met koorts en/of benauwheidsklachten?",
			question3: "Heb je het nieuwe coronavirus gehad en is dit de afgelopen 7 dagen vastgesteld (in een lab)?",
			question4: "Heb je een huisgenoot/gezinslid met het nieuwe coronavirus en heb je in de afgelopen 14 dagen contact met hem/ haar gehad terwijl hij/ zij nog klachten had ?",
			question5: "Ben je in quarantaine omdat je direct contact hebt gehad met iemand waarbij het nieuwe coronavirus is vastgesteld?",
			yes: "Ja",
			no: "Nee"
		},
		en: {
			name: "Name",
			phoneNumber: "Phone number",
			email: "email",
			complaints: {
			},
			question1: "Did you have one or more of these complaints in the past 24 hours?",
			question2: "Do you currently have a roommate with a fever and/or shortness of breath?",
			question3: "Did you have the coronavirus and has it been diagnosed in the past 7 days (in a laboratory)?",
			question4: "Do you have a roommate/family member with the new coronavirus and have you had contact with him / her in the past 14 days while he / she still had complaints?",
			question5: "Are you in quarantine because you had direct contact with someone who has been diagnosed with the new coronavirus ?",
			yes: "Yes",
			no: "No"
		}
	});

    return (
        <Form>
            <FormGroup>
				<Label for="name">{ strings.name}:</Label>
				<Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
				<Label for="phoneNumber">{strings.phoneNumber}:</Label>
				<Input type="tel" name="phoneNumber" id="phoneNumber" />
			</FormGroup>
			<FormGroup tag="fieldset">
				<Label>{strings.question1}</Label>
				<FormGroup check>
                    <Label check>
						<Input type="radio" name="question1" /> { strings.yes}
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question1" defaultChecked /> {strings.no}
					</Label>
				</FormGroup>
			</FormGroup>

			<FormGroup tag="fieldset">
				<Label>{strings.question2}</Label>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question2" /> {strings.yes}
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question2" defaultChecked /> {strings.no}
					</Label>
				</FormGroup>
			</FormGroup>

			<FormGroup tag="fieldset">
				<Label>{strings.question3}</Label>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question3" /> {strings.yes}
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question3" defaultChecked /> {strings.no}
					</Label>
				</FormGroup>
			</FormGroup>

			<FormGroup tag="fieldset">
				<Label>{strings.question4}</Label>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question4" /> {strings.yes}
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question4" defaultChecked /> {strings.no}
					</Label>
				</FormGroup>
			</FormGroup>

			<FormGroup tag="fieldset">
				<Label>{strings.question5}</Label>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question5" /> {strings.yes}
					</Label>
				</FormGroup>
				<FormGroup check>
					<Label check>
						<Input type="radio" name="question5" defaultChecked /> {strings.no}
					</Label>
				</FormGroup>
			</FormGroup>
        </Form>);
};

export default Questionaire;