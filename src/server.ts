import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)

    logger.info('🛢 Database is connected successfully')
    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('failed to connect', error)
  }
}

bootstrap()
