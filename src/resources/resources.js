import Vue from 'vue';
import Resource from 'vue-resource';

Vue.use(Resource);

const url = `http://test.stavregion.ru/api/`;

const getAll = (path,args) => {
    // args = {pageSize:6,pageIndex:0,filter:{}};
    // console.log(args,  `${url}${path}/?data=` + JSON.stringify(args));
    return Vue.http.get(`${url}${path}?data=` + JSON.stringify(args));
};

const getMax = (path) => {
    return Vue.http.get(`${url}${path}/count`);
}
    
// vote(doc_id: string, action: string) {
//     let actionObj = {action: action};
//     return this.http.put(`${environment.apiUrl}/documents/vote/` + doc_id, actionObj);        
// }

const getById = (path,id) => {
    return Vue.http.get(`${url}${path}/${id}`);
};

const create = (path,data) => {

    return Vue.http.post(`${url}${path}`, data);
};

const update = (path, id, data) => {
    return Vue.http.put(`${url}${path}/${id}`, data);
};

const remove = (path, id) => {
    return Vue.http.delete(`${url}${path}/${id}`);
};

const search = (path, term) => {
    return Vue.http.get(`${url}${path}/search/${term}`);
};

export {
    getAll,
    getById,
    create,
    update,
    remove,
    search
}
