// utility - v33
import dotenv from 'dotenv'
//Load the specific .env file based on that variable
dotenv.config({
  path: `./env/.env.${process.env.ENV}`,
   override: true 
    });

    export class ConfigReader 
    {

      static readonly url = ConfigReader.getEnv('URL');
      static readonly username = ConfigReader.getEnv('USERNAME');
      static readonly password = ConfigReader.getEnv('PASSWORD');
      
      private static getEnv(key:string):string
      {
        const value = process.env[key]
        if(!value)
      {
        throw new Error(`Environment ${key} is not available`)
      }
        else
      {
        return value;
      }
      }
    }