const task1={
    description: "do hw",
    priority: "high"
}

const task2={
description: "play zelda",
priority: "medium"
}
const task3={
    description: "study js",
    priority: "low"
}

console.log(task1);
console.log(task2);
console.log(task3);

class task {
    constructor(description, priority) {
        this.description = description;
        this.priority = priority;
    }
}
const t1=new Task("do CR","high");
const t2=new Task("medium","hw");
const t3=new Task("play mario","low");
console.log(t1.description);
console.log(t2);
console.log(t3);