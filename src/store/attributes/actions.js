import { getDatabase, ref, set, update, child } from "firebase/database";

function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return newGuid;
}

export default {

    createPost(context, data) {
        data.id = generateUUID();
        const db = getDatabase();
        set(ref(db, 'news/'+data.id), data);
    },

    updatePost(context, data) {
        const updates = {};
        updates['/news/' + data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },

    deletePost(context, id) {
        const updates = {};
        updates['/news/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    }
}