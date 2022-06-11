import Vue from "vue"

import Component from 'vue-class-component';
const errorMap:{[key:string]:string} = {
    "tag name duplicated":"标签名重复"
}
@Component
export class TagHelper extends Vue{
    createTag(){
        const name = window.prompt('请输入要新增的标签');
        if (!name) {
            return window.alert('标签名不能为空');
        }
        this.$store.commit("createTag",name);
        if(this.$store.state.createTagError){
            window.alert(errorMap[this.$store.state.createTagError.message]||"未知错误")
        }
    }
}

export default TagHelper