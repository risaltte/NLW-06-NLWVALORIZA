import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";



class ListUserReceiveComplimentsService {

    async execute(user_id: string) {
        const complimentsResitories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentsResitories.find({
            where: {
               user_receiver: user_id 
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }
}

export { ListUserReceiveComplimentsService }