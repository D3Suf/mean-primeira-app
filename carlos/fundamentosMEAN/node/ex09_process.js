process.stdout.write("are you linking the curse?\n");
process.stdin.on('data', function(data){
    process.stdout.write(`Your asnwer are ${data.toString()} Thanks!\n`);
    process.exit();
});