import User from "../models/user/User";
import dayjs from "dayjs";
import Miracle from "../models/miracle/Miracle";
import { MiracleCreateDto } from "../interfaces/miracle/MiracleCreateDto";

const createMiracle = async (miracleCreateDto: MiracleCreateDto) => {
  try {
    const miracle = new Miracle({
      writer: miracleCreateDto.writer,
      content: miracleCreateDto.content,
    });

    await miracle.save();

    return miracle;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getAllMiracles = async () => {
  try {
    const miracles = await Miracle.find().sort({ createdAt: -1 });
    return miracles;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getMiracle = async (user_id:string, _date:string) : Promise< Miracle | null>  => { 
    try{
        //todayDate, tomorrowDate 만들기
        //유저찾아서 writer가 맞고, date 맞는 정보 리턴하기 
        const user = await User.findById(user_id);
        if(user?.$isEmpty){
            return null;
        }
        
        console.log(_date);
        const todayDate = dayjs(_date).add(9,'hour').toDate();
        const tomorrowDate = dayjs(_date).add(1, "day").add(9,'hour').toDate();
        console.log(todayDate);
        console.log(tomorrowDate);

        //db.posts.find({"createdAt": {"$gte": start, "$lt": end}})
        const miracle = await Miracle.findOne(
            {
                "createdAt": {"$gte": todayDate, "$lt": tomorrowDate}
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

export default { createMiracle, getAllMiracles, getMiracle };
