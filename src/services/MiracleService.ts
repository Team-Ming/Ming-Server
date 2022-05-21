import { MiracleResponseDto } from "../interfaces/miracle/MiracleResponseDto";
import User from "../models/user/User";
import dayjs from "dayjs";
import Miracle from "../models/miracle/Miracle";

const getMiracle = async (user_id:string, _date:string) : Promise< Miracle | null>  => { 
    try{
        //todayDate, tomorrowDate 만들기
        //유저찾아서 writer가 맞고, date 맞는 정보 리턴하기 
        const user = await User.findById(user_id);
        if(user?.$isEmpty){
            return null;
        }
        
        const todayDate = dayjs(_date);
        const tomorrowDate = dayjs(_date).add(1, "day");
        console.log(todayDate);
        console.log(tomorrowDate);

        //db.posts.find({"created_on": {"$gte": start, "$lt": end}})
        const miracle = await Miracle.findOne(
            {
                "created_on": {"$gte": todayDate, "$lt": tomorrowDate}
            }
        );
        console.log(miracle);

        // const data = {
        //     userId: user?._id,
        //     content: miracle?.content
        // };
        

        return miracle;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export default {
    getMiracle
};
