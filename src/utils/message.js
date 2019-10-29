/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 10:32:28
 * @LastEditTime: 2019-08-19 10:49:47
 * @LastEditors: Please set LastEditors
 */
import { message } from 'antd';

// import moment from 'moment';

class Message {
    success = msg => message.success(msg);

    error = msg => message.error(msg);

    warning = msg => message.warning(msg);

    info = msg => message.info(msg);

    // dateTimeFormater = (datetime, formatString) => {
    //     return moment(datetime).format(formatString);
    // };
}

export default new Message();
