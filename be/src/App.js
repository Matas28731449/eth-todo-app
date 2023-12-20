App = {
  loading: false,
  contracts: {},
  load: async () => {
    await App.loadWeb3();
    await App.loadAccount();
    await App.loadContract();
    await App.render();
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  loadWeb3: async () => {
    if (typeof web3 !== "undefined") {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      window.alert("Please connect to Metamask.");
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.enable();
        // Acccounts now exposed
        web3.eth.sendTransaction({
          /* ... */
        });
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider;
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
      web3.eth.sendTransaction({
        /* ... */
      });
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  },

  loadAccount: async () => {
    const accounts = await web3.eth.getAccounts();
    App.account = accounts[0];
  },

  loadContract: async () => {
    const todoApp = await $.getJSON("TodoApp.json");
    App.contracts.TodoApp = TruffleContract(todoApp);
    App.contracts.TodoApp.setProvider(App.web3Provider);

    App.todoApp = await App.contracts.TodoApp.deployed();
  },

  render: async () => {
    if (App.loading) {
      return;
    }

    App.setLoading(true);

    $("#account").html(App.account);

    await App.renderTasks();

    App.setLoading(false);
  },

  renderTasks: async () => {
    const taskCount = await App.todoApp.taskCount();
    const $taskTemplate = $(".taskTemplate");

    for (var i = 1; i <= taskCount; i++) {
      const task = await App.todoApp.tasks(i);
      const taskId = task[0].toNumber();
      const taskContent = task[2];
      const taskCompleted = task[1];

      const $newTaskTemplate = $taskTemplate.clone();
      $newTaskTemplate.find(".content").html(taskContent);
      $newTaskTemplate
        .find("input")
        .prop("name", taskId)
        .prop("checked", taskCompleted)
        .on("click", App.toggleCompleted);

      if (taskCompleted) {
        $("#completedTaskList").append($newTaskTemplate);
      } else {
        $("#taskList").append($newTaskTemplate);
      }

      $newTaskTemplate.show();
    }
  },

  createTask: async () => {
    App.setLoading(true);
    const content = $("#newTask").val();
    await App.todoApp.createTask(content, { from: App.account });
    window.location.reload();
  },

  toggleCompleted: async (e) => {
    App.setLoading(true);
    const taskId = e.target.name;
    try {
      await App.todoApp.toggleCompleted(taskId, { from: App.account });
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  },

  setLoading: (value) => {
    App.loading = value;
    const loader = $("#loader");
    const content = $("#content");
    if (value) {
      loader.show();
      content.hide();
    } else {
      loader.hide();
      content.show();
    }
  },
};

$(() => {
  $(window).load(() => {
    App.load();
  });
});
