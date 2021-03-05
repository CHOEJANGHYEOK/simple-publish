import React from 'react';
import Subhead from './Subhead'
import TemplateSelection from './TemplateSelection'
import NameInput from './NameInput'
import ConfigField from './ConfigField.jsx'

const CreatePage = () => {
    return (
        <div className="container">
            <Subhead />
            <TemplateSelection />
            <hr className="separator" />
            <NameInput />
            <ConfigField />
        </div>
    )
}

export default CreatePage;