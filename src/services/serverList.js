if (process.env.NODE_ENV === 'development') {
    // require('../../mock/todolist')
}

const token = 'tokentokenljsdilfjs';

const postApi = (path, mock) => {
    return `${path + (mock ? '' : '.mock')}?token=${token}`;
};

export default {
    newsList: postApi('/api/order/news'),
    newsList2: postApi('/api/newsList2')
};
