import {  POST } from '../index'

export const POSTEmail = async (body) => {
    return await POST('/v1/emails/email', body, false);
}

