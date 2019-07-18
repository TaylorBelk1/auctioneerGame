const workercode = () => {
    let self = this;
    self.onmessage = function(e) {
        let count = e.data
        console.log('from main', e.data)
        setInterval(() => {
            if(count >= 0) {
                self.postMessage(count);
                count = count-1
            } else {
                clearInterval();
            }
        }, 1000)
    }
  };

  // needed to serialize the results
  let code = workercode.toString();
  code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

  const blob = new Blob([code], {type: "application/javascript"});
  const worker_script = URL.createObjectURL(blob);

  module.exports = worker_script;