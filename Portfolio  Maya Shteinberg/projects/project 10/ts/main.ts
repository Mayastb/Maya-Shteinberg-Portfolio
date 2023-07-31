interface Task {
    id: number;
    title: string | null;
    description: string | null;
    addedTime: string;
    priority: PriorityTypes;
    isCompleted: boolean;
}

enum PriorityTypes {
    low,
    medium,
    high,
}

// משימות ראשוניות על הלוח
class TaskManager {
    tasks: Task[] = [
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


    constructor() {
        this.showTasks();

        const elem = document.querySelector("header");

        // מגדירים שבלחיצה על הכפתור תופעל פונקציה המוסיפה משימה
        elem?.querySelector("button")?.addEventListener("click", ev => {
            const elemTitle = elem?.querySelector("input");
            const elemPriority = elem?.querySelector("select");

            const title = elemTitle?.value || '';
            const priority = elemPriority?.value || '';

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

    addTask(title: string, priority?: PriorityTypes) {
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
    editTask(taskId: number) {
        let title = prompt("please enter title");
        let description = prompt("please enter new description");

        let task = this.tasks[this.tasks.findIndex(x => x.id == taskId)];
        task.description = description;
        task.title = title;
    }

    removeTask(taskId: number) {
        const i = this.tasks.findIndex(x => x.id == taskId);
        this.tasks.splice(i, 1);

        this.showTasks();
    }

    completeTask(taskId: number) {
        const item = this.tasks.find(x => x.id == taskId);

        if (item) {
            item.isCompleted = true;
        }

        this.showTasks();
    }

    unCompleteTask(taskId: number) {
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
            const div = document.createElement("div");

            if (t.isCompleted) {
                div.classList.add('completed');
            }

            switch (t.priority) {
                case PriorityTypes.low : div.classList.add('low'); break;
                case PriorityTypes.medium : div.classList.add('medium'); break;
                case PriorityTypes.high : div.classList.add('high'); break;
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

            div.querySelector('.remove')?.addEventListener("click", () => this.removeTask(t.id));
            div.querySelector('.complete')?.addEventListener("click", () => this.completeTask(t.id));
            div.querySelector('.uncomplete')?.addEventListener("click", () => this.unCompleteTask(t.id));
            div.querySelector('.edit')?.addEventListener("click", () => this.editTask(t.id));

            elem?.appendChild(div);
        });
    }
}

const tasks = new TaskManager;