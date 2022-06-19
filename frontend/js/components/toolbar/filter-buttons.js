export class FilterButtons {

    constructor(currentOrder, completedFiltered) {
        this.currentOrder = currentOrder;
        this.completedFiltered = completedFiltered;
    }

    render() {
        const content = 
            `<div>
                ${this.renderOrderByButtons()}
             </div>
             ${this.renderFilterCompletedButton()}`

        return new Handlebars.SafeString(content);
    }

    renderOrderByButtons() {
        const buttons = [
            this.renderButton("orderByTitle", "Name", this.activeOrder('title')),
            this.renderButton("orderByDuedate", "By Due Date", this.activeOrder('duedate')),
            this.renderButton("orderByCreatedAt", "By Creation Date", this.activeOrder('createdAt')),
            this.renderButton("orderByImportance", "By Importance", this.activeOrder('importance'))
        ]
    
        return buttons.join("\n");
    }

    activeOrder(orderBy) {
        return this.currentOrder == orderBy;
    }

    renderFilterCompletedButton() {
        return this.renderButton("filterCompleted",
            "Filter Completed",
            this.completedFiltered);
    }

    renderButton(id, label, active) {
        const hiddenClass = active ? '' : 'hidden'
        const activeIndicator = `<i class="fa fa-caret-down ${hiddenClass}"></i>`;
        return `<button id="${id}">${label} ${activeIndicator}</button>`
    }
}
