import React from 'react';

const ConfigField = () => {
    return (
        <div>
            <p>Great repository names are short and memorable. Need inspiration? How about <strong>bug-free-eureka?</strong></p>
            <dl>
                <dt>
                    <label>
                        Description (optional)
                    </label>
                </dt>
                <dd style={{ margin: '0' }}>
                    <input style={{ width: '100%' }} />
                </dd>
            </dl>
            <hr className="separator" />
            <div>
                <label style={{ marginTop: '16px', display: 'block' }}>
                    <input type="radio" checked value="public" />
                    Public
                </label>
                <span>
                    Anyone on the internet can see this repository. You choose who can commit.
                </span>
            </div>
            <div>
                <label style={{ marginTop: '16px', display: 'block' }}>
                    <input type="radio" checked value="public" />
                    Private
                </label>
                <span>
                    You choose who can see and commit to this repository.
                </span>
            </div>
            <hr className="separator" />
            <div>
                <h3>Initialize this repository with:</h3>
                <p>Skip this step if you’re importing an existing repository.</p>
                <div>
                    <label style={{ marginTop: '16px', display: 'block' }}>
                        <input type="radio" value="public" />
                    Add a README file
                    </label>
                    <span>
                        This is where you can write a long description for your project. Learn more.
                    </span>
                </div>
                <div>
                    <label style={{ marginTop: '16px', display: 'block' }}>
                        <input type="radio" value="public" />
                        Add .gitignore
                    </label>
                    <span>
                        Choose which files not to track from a list of templates. Learn more.
                    </span>
                </div>
                <div>
                    <label style={{ marginTop: '16px', display: 'block' }}>
                        <input type="radio" value="public" />
                        Choose a license
                    </label>
                    <span>
                        A license tells others what they can and can't do with your code. Learn more.
                    </span>
                </div>
                <hr className="separator" />
                <button>Create repository</button>
            </div>
        </div>
    )
}

export default ConfigField;