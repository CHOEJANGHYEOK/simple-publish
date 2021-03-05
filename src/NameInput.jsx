import React from 'react';

const TemplateSelection = () => {
    return (
        <div className="owner-name-container">
            <dl className="form-group">
                <dt className="form-group-header">
                    <label>
                        Owner
                    </label>
                </dt>
                <dd className="form-group-body">
                    <details>
                        <summary>
                            <img className="avatar" src="https://avatars.githubusercontent.com/u/63543189?s=40&v=4" />
                            CHOEJANGHYEOK
                        </summary>
                        <details-menu>
                            <div className="select-menu-list">
                                <label className="select-menu-item" role="menuitemradio" tabIndex="0">
                                    <input id="owner" type="radio" checked value="CHOEJANGHYEOK"/>
                                    <label for="owner">CHOEJANGHYEOK</label>
                                </label>
                            </div>
                        </details-menu>
                    </details>
                </dd>
            </dl>
            <span className="slash">/</span>
            <dl className="form-group">
                <dt className="form-group-header">
                    <label>
                        Repository name
                    </label>
                </dt>
                <dd className="form-group-body">
                    <input />
                </dd>
            </dl>
        </div>
    )
}

export default TemplateSelection;