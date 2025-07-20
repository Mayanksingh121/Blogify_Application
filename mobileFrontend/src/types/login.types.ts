interface ILoginCustomBackButton {
    handleBackPress: ()=>void;
    buttonData: IBackButtonData
}
interface IBackButtonData {
    buttonText: string;
}

interface ICreateAccountBody {
    authType: string,
    name: string, 
    phoneNumber: number,
    password: string,
    gender: string,
    dob: Date,
    emailID: string
}