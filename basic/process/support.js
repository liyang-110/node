console.log("进程 " + process.argv[2] + " 执行。");
setTimeout(function() {
    console.log("进程 " + process.argv[2] + " 结束。");
}, 2000);