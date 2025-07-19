// library
// project
import logger from '../config/winston.js';
/**
 * common error handler for async an non-async functions
 */

export default function errorHandler(fun) {
  const async = fun.constructor.name == 'AsyncFunction';

  if (async) {
    Promise.resolve(fun()).catch((err) => {
      logger.error(err);
    });
  } else {
    try {
      fun();
    } catch (err) {
      logger.error(err);
    }
  }
}
