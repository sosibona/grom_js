

export function createLogger() {
   let logger = [];

  function warn(warning) {
      const warn = {}
      warn.message = warning;
      warn.dataTime = new Date();
      warn.type = 'warning';
      logger.push(warn);
      return logger;
  }

  function error(messageError) {
    const error = {};
    error.message = messageError;
    error.dataTime = new Date();
    error.type = 'error';
    logger.push(error);
    return logger;
}

function log(message) {
  const log = {};
  log.message = message;
  log.dataTime = new Date();
  log.type = 'log';
  logger.push(log);
  return logger;
}

function getRecords(typeOfMeassage){

  switch(typeOfMeassage) {
    case 'warn':
      console.log(logger.filter(el => el.type === 'warning').reverse());
      break;
    case 'error':
      console.log(logger.filter(el => el.type === 'error').reverse());
      break;
    case 'message':
      console.log(logger.filter(el => el.type === 'log').reverse());
      break;
    default:
      console.log(logger.reverse());
      
      
  }
  // console.log(logger);
}

  return {
    warn,
    error,
    log,
    getRecords,
  }
}

// const warning1 = createLogger();
// const warning2 = createLogger();

// console.log(warning1);
// warning1.warn('bbbbbbbbb');
// setTimeout(warning2.warn('cccc'), 2000);
// warning1.warn('dddd');
// warning1.log('test');
// // warning1.getRecords();
// warning1.getRecords('warn');
// warning1.getRecords();
// warning1.getRecords('error');
// // console.log(warning1.error('ffff'));
// // console.log(warning1.logger);
