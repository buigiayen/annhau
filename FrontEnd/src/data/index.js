
import  axios  from 'axios';
import { message } from 'antd';
import { useEffect } from 'react';
import {Config} from '../Config/GetConfig'

const Connection = (URI, method = 'GET', body, params = null) => {

    const UrlBase = Config.urlbackend + URI;
    return axios(UrlBase, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("ITOKEN"),
        },
        params: {
            ...params,
        },
        data: body,
    }).catch();
}
const TimeOutLoading = () => {
    setTimeout(() => {
        message.destroy();
    }, Config.Timeout)
}

const ShowMessenger = (typeMessenger, Title) => {
    message.destroy();
    switch (typeMessenger) {
        case "Info":
            message.info(Title);
            break;
        case "warning":
            message.warning(Title);
            break;
        case "error":
            message.error(Title);
            break;
        default: break;

    }
}

export const GET = async (URI, body, messageShow = false, params) => {

    var data = [];
    if (messageShow) {
        const hide = message.loading('Loading data ...', 0);
        setTimeout(hide, Config.Timeout);
    };
    try {
        data = await Connection(URI, 'GET', body, params);
        if (data !== undefined) {
            if (data.code === 200) {
                ShowMessenger("Info", data.messenger);
            } else if (data.code === 403) {
                ShowMessenger("warning", data.messenger);
            } else {
                ShowMessenger("error", data.messenger);
            }

        } else {
            ShowMessenger("error", 'Loading error!');
        }
    }
    catch {
        ShowMessenger("error", 'erver is not running!');
    }
    return data;
}
export const POST = async (URI, body, messageShow) => {

    var data = {};
    if (messageShow) {
        const hide = message.loading('Loading data ...', 0);
        setTimeout(hide, Config.Timeout);
    };
    try {
        data = await Connection(URI, 'POST', body);
        if (data !== undefined) {
            if (data.code === 200) {
                ShowMessenger("Info", data.messenger);
            } else if (data.code === 403) {
                ShowMessenger("warning", data.messenger);

            } else {
                ShowMessenger("error", data.messenger);
            }

        } else {
            ShowMessenger("error", 'Loading error!');
        }
    }
    catch {
        ShowMessenger("error", 'Server is not running!');
    }
    return data;
}
export const DELETE = async (URI, body, messageShow = false, params) => {

    var data = [];
    if (messageShow) {
        const hide = message.loading('Loading data ...', 0);
        setTimeout(hide, Config.Timeout);
    };
    try {
        data = await Connection(URI, 'DELETE', body, params);
        if (data !== undefined) {
            if (data.code === 200) {
                ShowMessenger("Info", data.messenger);
            } else if (data.code === 403) {
                ShowMessenger("warning", data.messenger);

            } else {
                ShowMessenger("error", data.messenger);
            }

        } else {
            ShowMessenger("error", 'Loading error!');
        }
    }
    catch {
        ShowMessenger("error", 'erver is not running!');
    }
    return data;
}
export const PUT = async (URI, body, messageShow = false, params) => {

    var data = [];
    if (messageShow) {
        const hide = message.loading('Loading data ...', 0);
        setTimeout(hide, Config.Timeout);
    };
    try {
        data = await Connection(URI, 'PUT', body, params);
        if (data !== undefined) {
            if (data.code === 200) {
                ShowMessenger("Info", data.messenger);
            } else if (data.code === 403) {
                ShowMessenger("warning", data.messenger);

            } else {
                ShowMessenger("error", data.messenger);
            }

        } else {
            ShowMessenger("error", 'Loading error!');
        }
    }
    catch {
        ShowMessenger("error", 'erver is not running!');
    }
    return data;
}
