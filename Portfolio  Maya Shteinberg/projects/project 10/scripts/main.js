"use strict";
var PriorityTypes;
(function (PriorityTypes) {
    PriorityTypes[PriorityTypes["low"] = 0] = "low";
    PriorityTypes[PriorityTypes["medium"] = 1] = "medium";
    PriorityTypes[PriorityTypes["high"] = 2] = "high";
})(PriorityTypes || (PriorityTypes = {}));
// משימות ראשוניות על הלוח
class TaskManager {
    constructor() {
        var _a;
        this.tasks = [
            {
                id: 3,
                title: 'task 1',
                addedTime: '30-06-2023',
                description: 'finish Type-Script project',
                isCompleted: false,
                priority: PriorityTypes.low,
            },
            {
                id: 8,
                title: 'task 2',
                addedTime: '31-07-2023',
                description: 'add finished project to portfolio',
                isCompleted: false,
                priority: PriorityTypes.high,
            },
            {
                id: 15,
                title: 'task 3',
                addedTime: '29-06-2023',
                description: '',
                isCompleted: false,
                priority: PriorityTypes.medium,
            },
        ];
        this.showTasks();
        const elem = document.querySelector("header");
        // מגדירים שבלחיצה על הכפתור תופעל פונקציה המוסיפה משימה
        (_a = elem === null || elem === void 0 ? void 0 : elem.querySelector("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", ev => {
            const elemTitle = elem === null || elem === void 0 ? void 0 : elem.querySelector("input");
            const elemPriority = elem === null || elem === void 0 ? void 0 : elem.querySelector("select");
            const title = (elemTitle === null || elemTitle === void 0 ? void 0 : elemTitle.value) || '';
            const priority = (elemPriority === null || elemPriority === void 0 ? void 0 : elemPriority.value) || '';
            // איפוס התיבה של הכותרת
            if (elemTitle) {
                elemTitle.value = "";
            }
            // איפוס התיבה של רמת העדיפות
            if (elemPriority) {
                elemPriority.value = "";
            }
            this.addTask(title, +priority);
        });
    }
    addTask(title, priority) {
        // מערך של ה-ids
        const ids = this.tasks.map(x => x.id);
        const max = Math.max(...ids);
        const now = new Date();
        const y = now.getFullYear();
        const m = now.getMonth() + 1;
        const d = now.getDate();
        const addedTime = `${d}-${(m < 10 ? '0' + m : m)}-${y}`;
        this.tasks.push({
            id: max + 1,
            title,
            addedTime,
            description: '',
            isCompleted: false,
            priority: priority || PriorityTypes.low,
        });
        this.showTasks();
    }
    // פונקציה המאפשרת לערוך את תוכן המשימה
    editTask(taskId) {
        let title = prompt("please enter title");
        let description = prompt("please enter new description");
        let task = this.tasks[this.tasks.findIndex(x => x.id == taskId)];
        task.description = description;
        task.title = title;
    }
    removeTask(taskId) {
        const i = this.tasks.findIndex(x => x.id == taskId);
        this.tasks.splice(i, 1);
        this.showTasks();
    }
    completeTask(taskId) {
        const item = this.tasks.find(x => x.id == taskId);
        if (item) {
            item.isCompleted = true;
        }
        this.showTasks();
    }
    unCompleteTask(taskId) {
        const item = this.tasks.find(x => x.id == taskId);
        if (item) {
            item.isCompleted = false;
        }
        this.showTasks();
    }
    showTasks() {
        const elem = document.querySelector("div.tasks");
        if (elem) {
            elem.innerHTML = "";
        }
        this.tasks.forEach(t => {
            var _a, _b, _c, _d;
            const div = document.createElement("div");
            if (t.isCompleted) {
                div.classList.add('completed');
            }
            switch (t.priority) {
                case PriorityTypes.low:
                    div.classList.add('low');
                    break;
                case PriorityTypes.medium:
                    div.classList.add('medium');
                    break;
                case PriorityTypes.high:
                    div.classList.add('high');
                    break;
            }
            div.innerHTML = `
                <h3>${t.title}</h3>
                <p><b>Added Time:</b> ${t.addedTime}</p>
                <p><b>Description:</b> ${t.description || '*No comment* click to change'}</p>

                <footer>
                    <button class="remove">Delete</button>
                    ${t.isCompleted ? '<button class="uncomplete">Uncomplete</button>' : '<button class="complete">Done</button>'}
                    <button class="edit">Edit</button>
                </footer>
            `;
            (_a = div.querySelector('.remove')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => this.removeTask(t.id));
            (_b = div.querySelector('.complete')) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => this.completeTask(t.id));
            (_c = div.querySelector('.uncomplete')) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => this.unCompleteTask(t.id));
            (_d = div.querySelector('.edit')) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => this.editTask(t.id));
            elem === null || elem === void 0 ? void 0 : elem.appendChild(div);
        });
    }
}
const tasks = new TaskManager;
