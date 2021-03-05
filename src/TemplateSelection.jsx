import React from 'react';

const TemplateSelection = () => {
    return (
        <div className="template-selection">
            <label className="selection-label">Repository template</label>
            <p className="explanation">
                Start your repository with a template repository's contents.
            </p>
            <details className="select-details">
                <summary className="btn">No template</summary>
                <details-menu>
                    <div>
                        <label>
                            No template
                        </label>
                    </div>
                </details-menu>
            </details>
        </div>
    )
}

export default TemplateSelection;