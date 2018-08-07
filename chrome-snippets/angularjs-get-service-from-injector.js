
/*
    Gets an angular service from current app

    Just specify the name of the service that you want
*/

var serviceId = 'customerService';

var service = angular
  .element(document.body)
  .injector()
  .get(serviceId);