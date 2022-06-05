import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const  store = {
    //Record
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),
    // Tag
    findTag: (id: string) => {
        return window.store.tagList.filter(t => t.id === id)[0];
    },
    tagList: tagListModel.fetch(),
    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === 'duplicated') {
            window.alert('标签重复');
        } else if (message === 'success') {
            window.alert('创建成功');
        }
    },

    removeTag: (id: string) => {
        return tagListModel.remove(id);
    },

    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name);
    }
};

export default store