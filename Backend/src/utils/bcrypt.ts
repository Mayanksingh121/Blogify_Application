import bcrypt from "bcrypt";

export const checkPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const result = await bcrypt.compare(password, hashedPassword);
        return result;
    } catch (e) {
        console.log("Error while comparing the password " + e);
        throw e;
    }
};


export const encryptPassword = async (password: string): Promise<string>=>{
    try{
        console.log(password,process.env.BCRYPT_SALT_ROUND)
        if(!process.env.BCRYPT_SALT_ROUND){
            throw new Error("Can't find salt rounds in env");
        }

        const salt: any= await bcrypt.genSalt(Number(process.env.BCRYPT_SALT_ROUND));
        const result = await bcrypt.hash(password, salt);
        return result;
    }catch(e){
        console.log("Error while encrypting password "+ e);
        throw e;
    }
}

