import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

function errorMessage(info){
    Toast.fail(info);
}

export default errorMessage;