import axios from "axios";

const serverHost = 'https://hssp.kmuwink.com';  //severHost라는 변수에 기본 url? 지정?

export const GetPxProducts = async ()=> {   //PXProducts api 받아오는 함수 ^^...
    return await axios.get(serverHost + '/api/px', {
        headers: {  //인증 코드는 headers 부분에 ~
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjAxMDEyMzQ1Njc4IiwiaWF0IjoxNjAxNjE5ODU2LCJleHAiOjE2MDIyMjQ2NTZ9.1ayaCC62z6D-tPBqhqwnWJkwsescxWGctD1UbjBrfSU"
        }
    });
};

export const GetDiscountbenefits = async ()=> {
    return await axios.get(serverHost + '/api/discount', {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjAxMDEyMzQ1Njc4IiwiaWF0IjoxNjAxNjE5ODU2LCJleHAiOjE2MDIyMjQ2NTZ9.1ayaCC62z6D-tPBqhqwnWJkwsescxWGctD1UbjBrfSU"
        }
    });
};