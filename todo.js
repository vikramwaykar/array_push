// var tasks=[


//     {
//         taskHeading:'';
//     },
//     {
//         taskHeading:'';
//     },
//     {
//         taskHeading:'';
//     },
//     {
//         taskHeading:'';
//     },
//     {
//         taskHeading:'';
//     },
//     {
//         taskHeading:'';
//     }
// ]


// function addtodo(){







// }


var task = [

    {
        taskItem: "Wake up at 7AM"
    },
    {
        taskItem: "Brush teeth"
    },
    {
        taskItem: "Eat breakfast"
    }

]

function addTask() {



    var inputTask = document.querySelector('#inputTask').value;

    var Input_taskItem = {
        taskItem: inputTask
    }

    task.push(Input_taskItem);

    console.log(task);
}



task.forEach(item => {

    var taskItem = document.createElement('div');

    taskItem.className = "taskItem";

    var taskHeading = document.createElement('h1');

    taskHeading.textContent = item.taskItem;

    taskItem.appendChild(taskHeading);


    var tasklist = document.getElementById('listItems');

    tasklist.appendChild(taskItem);

});


