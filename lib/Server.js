import axios from "axios";

const serverHost = 'https://hssp.kmuwink.com';  //severHost라는 변수에 기본 url? 지정?

export const GetPxProducts = async ()=> {   //PXProducts api 받아오는 함수 ^^...
    return await axios.get(serverHost + '/api/px', {
        headers: {  //인증 코드는 headers 부분에 ~
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjAxMDY1MzgxNzg4IiwiaWF0IjoxNTk5ODQ0NTEwLCJleHAiOjE2MDA0NDkzMTB9.Jn1XYXGhcBLWMaylkYPKeTckPk3DnJJ03BLrVj-Do3w"
        }
    });
};