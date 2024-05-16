const { PythonShell } = require('python-shell');

PythonShell.run('Downloads/modelpurchase.py', null, (err, result) => {
    if (err) throw err;
    t
    const dataFromPython = result[0];
    console.log('Data from Python:', dataFromPython);
});

module.exports=PythonShell

