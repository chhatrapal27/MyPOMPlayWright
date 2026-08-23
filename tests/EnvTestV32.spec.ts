// v32 env set ,Dev ,QA
import{test} from '@playwright/test'
import { ConfigReader } from '../utils/ReadConfigUtil' ///v33

test('EnvTest' , async ({page}) => 
{
   // console.log(process.env.URL);  // v32 me kia tha or ye hader coded tha 
   // console.log(process.env.USERNAME); // v32 me kia tha or ye hader coded tha 
   //console.log(process.env.PASSWORD); // v32 me kia tha or ye hader coded tha 
 
   console.log(ConfigReader.url);  // v33. ye dynamic hai jo hum utilis folder se read kre he hai 
   console.log(ConfigReader.username); // v33. ye dynamic hai jo hum utilis folder se read kre he hai 
   console.log(ConfigReader.password); // v33. ye dynamic hai jo hum utilis folder se read kre he hai 
})