import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import strings from '../i18n';

const Questionaire = (props) => {
    const [answer1, setAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState(false);
    const [answer4, setAnswer4] = useState(false);
    const [answer5, setAnswer5] = useState(false);

    return (
        <Form>
            <FormGroup tag="fieldset">
                <Label>{strings.question1}</Label>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="question1" /> {strings.yes}
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

            <Button type="submit">{strings.submit}</Button>
        </Form>);
};

export default Questionaire;