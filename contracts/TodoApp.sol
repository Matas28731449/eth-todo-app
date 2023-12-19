pragma solidity ^0.5.0;

contract TodoApp {
    uint public taskCount = 0;

    struct Task {
        uint id;
        bool completed;
        string content;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        bool completed,
        string content
    );

    event TaskCompleted(
        uint id,
        bool completed
    );

    constructor() public {
        createTask("Hi, welcome to my Todo page");
    }

    function createTask(string memory _content) public {
        taskCount ++;
        tasks[taskCount] = Task(taskCount, false, _content);
        emit TaskCreated(taskCount, false, _content);
    }

    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }
    
}