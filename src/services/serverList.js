import todoList from '../mock/todolist'
if (process.env.NODE_ENV === 'development') {
	console.log(111111)
	// require('../../mock/todolist')
}

let token = 'tokentokenljsdilfjs';

let postApi = (path, mock) => {
	return path + (mock ? '' : '.mock') + '?token=' + token;
};

export default {
	"newsList": postApi("/api/order/news"),
	"newsList2": postApi("/api/newsList2"),
	"todoList": postApi("/todoList", 0)
}