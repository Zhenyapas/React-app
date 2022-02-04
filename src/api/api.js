import * as axios from 'axios';

const instance = axios.create({

    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'68644ca4-f82b-4ce5-80ab-bdf757ea9237'
    }

});
const folowAndUnfollow = axios.create({

    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/follow/',
    headers: {
        'API-KEY':'68644ca4-f82b-4ce5-80ab-bdf757ea9237'
    }

});
const logIn = axios.create({

    withCredentials:true,
    headers: {
        'API-KEY':'68644ca4-f82b-4ce5-80ab-bdf757ea9237'
    }

});
const profileInstance = axios.create({

    withCredentials:true,
    headers: {
        'API-KEY':'68644ca4-f82b-4ce5-80ab-bdf757ea9237'
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

        return profileAPI.getUserProfile(userId);
    },
    authLogIn() {

        return loginAPI.authLogIn();

    }
}

export const profileAPI = {

    getUserProfile(userId){

        return profileInstance.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then((response) => {
            
            return response;
             
         });
    },
    getStatusProfile(userId){
        return profileInstance.get(`https://social-network.samuraijs.com/api/1.0/profile/status/`+ userId)
        .then ((response) => {

            return response;
        });
    },
    updateStatusProfile(status){
        return profileInstance.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status})
        .then ((response) => {

            return response;
        });
    },
    updatePhotoProfile(file){
        var formData = new FormData();
        formData.append('image', file);
        return profileInstance.post(`https://social-network.samuraijs.com/api/1.0/profile/photo`,formData, {

            headers: {
                'Content-Type':'multipart/form-data'
            }

        })
        .then ((response) => {

            return response;
        });
    }
}
export const loginAPI = {

    authLogIn() {

        return logIn.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
        .then((response) => {
            
            return response;
             
         });

    },

    logIn(email,password, rememberMe = false){
        return logIn.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe});
    },
    
    logOut(){
        return logIn.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`);
    },

}

