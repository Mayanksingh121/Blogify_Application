import {OAuth2Client, TokenPayload} from "google-auth-library";
const client = new OAuth2Client();


export async function verifyGoogleToken(token: string) {
    try{
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.WEB_CLIENT_ID,
        });
        const payload : TokenPayload | undefined = ticket.getPayload();
        return payload;
    }catch(e){
        console.log("Error while verifying the google token ",e);
        return null;
    }
}
