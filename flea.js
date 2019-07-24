
/* eslint-disable no-console */
/*global ACC,flea, Promise,XMLHttpRequest, window,return, browser, chrome*/

var flea = function(url, method, headers) {
  // Create the XHR request
  var request = new XMLHttpRequest();

  // Return it as a Promise
  return new Promise(function(resolve, reject) {
    // Setup our listener to process compeleted requests
    request.onreadystatechange = function() {
      // Only run if the request is complete
      if (request.readyState !== 4) {return;}

      // Process the response
      if (request.status >= 200 && request.status < 300) {
        // If successful
        resolve(request);
      } else {
        // If failed
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    };

    // Setup our HTTP request
    request.open(method || "GET", url, true);
    // 'XMLHttpRequest': The object's state must be OPENED.
    if (headers && headers.length > 0) {
      for (var index = 0; index < headers.length; index++) {
        var header = headers[index];
        for (var [key, value] of Object.entries(header)) {
            request.setRequestHeader(key, value);
          }
      }
    }

    // Send the request
    request.send();
  });
};


