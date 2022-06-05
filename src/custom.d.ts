type RecordItem = {
    tags: string[],
    notes: string,
    type: string,
    amount: number,// 类型
    createdAt?: Date // 类
}

type Tag = {
    id: string;
    name: string;
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    save: () => void
    remove: (id: string) => boolean
    update: (id: string, name: string) => 'success' | 'duplicated' | 'not found'
}

interface Window {
    store: {
        tagList: Tag[],
        createTag: (name: string) => void,
        removeTag: (id: string) => boolean,
        updateTag: (id: string, name: string) => 'success' | 'duplicated' | 'not found',
        findTag: (id: string) => Tag | undefined,
        recordList: RecordItem[],
        createRecord: (RecordItem) => void
    };
}
