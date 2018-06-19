import Vue from 'vue';
import { Loading } from 'vant';
import { Toast } from 'vant';
import axios from 'axios'

import errorMeaage from '../errorToast/errorToast';


Vue.use(Loading).use(Toast);
function getAjax(url,data){
    Toast.loading({
        mask: true,
        mask:false,
        forbidClick:true,
        duration:0
    });

    let result = axios.get(url,{
        data:data
    }
    )
    .then(function (response) {
        if(!response.data.length){
            Toast.clear();
        }
       return response.data
    })
    .catch(function (error) {
        Toast.clear();
        errorMeaage("失败");
    });
    return result;
}
export default getAjax;
