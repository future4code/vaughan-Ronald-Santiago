import { connection } from "../connection";

export default async function selectAllUsers(
    sort: string,
    order: string
):Promise<any> {
    const result = await connection('Pokemon_Go')
        .orderBy(sort, order);
 
    return result;
};