﻿import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useTranslation } from 'react-i18next'

const CustomerDataForm = (props) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

    const [t, i18n] = useTranslation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { name, phoneNumber };

        const raw = await fetch("/api/customerdata/upload", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const response = await raw.json();

        alert(JSON.stringify(response));
    };

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup>
                <Label for="name">{ t("name")}: </Label>
                <Input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="phoneNumber">{t("phoneNumber")}:</Label>
                <Input type="tel" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </FormGroup>
            <FormGroup check={true}>
                <Input type="checkbox" id="privacyPolicy" checked={acceptedPrivacyPolicy} onChange={e => setAcceptedPrivacyPolicy(!acceptedPrivacyPolicy)} />
                <Label for="privacyPolicy">{t("privacyPolicyCheckbox")}</Label>
            </FormGroup>
            <Button type="submit" disabled={!(acceptedPrivacyPolicy && name !== "" && phoneNumber !== "")}>{t("submit")}</Button>
        </Form>
    );
}

export default CustomerDataForm;