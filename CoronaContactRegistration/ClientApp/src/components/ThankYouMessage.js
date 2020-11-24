import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ThankYouMessage = (props) => {
    const [t, i18n] = useTranslation();

    return (
        <div>
            <h1>{ t("thankyou")}</h1>
        </div>
    );
}

export default ThankYouMessage;