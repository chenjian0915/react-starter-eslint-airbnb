// types
export const types = {};

const getHeaderDataTest = () => {
    console.log('开始异步请求并返回请求数据');
};

// actions
export const actions = {
    loadData: () => {
        return () => {
            getHeaderDataTest();
        };
    }
};
console.log(actions);
// reducer
const reducer = (state = {}) => {
    return state;
};
export default reducer;
