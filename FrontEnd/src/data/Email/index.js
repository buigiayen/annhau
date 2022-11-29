import {  POST } from '../index'

export const POSTEmail = async (body) => {
    console.log(body)
    return await POST('/v1/emails/email', body, true);
}

