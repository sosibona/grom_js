

export function createLogger() {
  let logger = [];

  function warn(warning) {

    logger.push({message: warning, dateTime: new Date(), type: 'warn'})
    // const warningObj = {};     
    // warningObj.message = warning;
    // warningObj.dataTime = new Date();
    // warningObj.type = 'warn';
    // logger.push(warningObj);
      // return logger;
  }

  function error(messageError) {
    const error = {};
    error.message = messageError;
    error.dateTime = new Date();
    error.type = 'error';
    logger.push(error);
}

  function log(message) {
    const log = {};
    log.message = message;
    log.dateTime = new Date();
    log.type = 'log';
    logger.push(log);
  }

  function getRecords(typeOfMeassage){
    if (typeOfMeassage === undefined) return logger;

    return logger.filter(el => el.type === typeOfMeassage);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  }
}
