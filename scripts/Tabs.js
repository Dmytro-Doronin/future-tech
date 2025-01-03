const rootSelector = '[data-js-tabs]'
class Tabs {
    selectors = {
        root: rootSelector,
        button: '[data-js-tabs-button]',
        content: '[data-js-tabs-content]'
    }

    stateClasses = {
        isActive: 'is-active',
    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }
}

class TabCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((tab) => {
            new Tabs(tab)
        })
    }
}

export default TabCollection