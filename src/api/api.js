import * as axios from 'axios';

const instance = axios.create({

    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'e5f5c064-7205-4d67-9ab2-9013a651f465'
    }

});
const folowAndUnfollow = axios.create({

    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY':'e5f5c064-7205-4d67-9ab2-9013a651f465'
    }

});
const logIn = axios.create({

    withCredentials:true,
    headers: {
        'API-KEY':'e5f5c064-7205-4d67-9ab2-9013a651f465'
    }

});



export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10 ) {
        return  instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
        return response.data;
         })
    },
    unfollowUser(id) {
    
        return folowAndUnfollow.delete(`${id}`)
        .then((response) => {
            return response.data;
        })
        
    },
    followUser(id) {
    
        return folowAndUnfollow.post(`${id}`)
        .then((response) => {
            return response.data;
        })
        
    },
    getUserProfile(userId){

        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then((response) => {
            
            return response;
             
         });
    },
    authLogIn() {

        return logIn.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then((response) => {
            
            return response;
             
         });

    }
}


