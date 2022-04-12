import axios from "axios";
import { baseURL } from "./baseurl";

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  }


const main = async () => {
    
    console.log(await getSubscribers())
}
main()

console.log(main())