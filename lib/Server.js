import axios from "axios";

const serverHost = 'https://hssp.kmuwink.com';  //severHost라는 변수에 기본 url? 지정?

export const GetPxProducts = async () => {   //PXProducts api 받아오는 함수 ^^...
    return await axios.get(serverHost + '/api/px', {
        headers: {  //인증 코드는 headers 부분에 ~
            Authorization: "Bearer " + localStorage.getItem('token'),
        }
    });
};
export const GetFoods = async ()=> {
    return await axios.get(serverHost + '/api/food', {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
        }
    });
};

export const GetDiscountbenefits = async ()=> {
    return await axios.get(serverHost + '/api/discount', {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
        }
    });
};

export const login = async ({phone, password}) => {
    const loginResponse = await axios.post(serverHost + '/api/auth/login', {
        phone,
        password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch((err) => err.response);

    if (loginResponse.status === 200)
    {
        localStorage.setItem('token', loginResponse.data.token);
    }

    return loginResponse;
};

export const signUp = async ({phone, password, name, army}) => {
    return await axios.post(serverHost + '/api/user/', {
        phone,
        password,
        name,
        army,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).catch((err) => err.response);
};
export const dateInput = async ({start_date, end_date}) => {
    return await axios.patch(serverHost + '/api/user/', {
        start_date,
        end_date
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer " + localStorage.getItem('token'),
        }
    }).catch((err) => err.response);
};