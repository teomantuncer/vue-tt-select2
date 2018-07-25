import Vue from 'vue'
import TTSelect from './TTSelect.vue'
const Select2Component = {};
Select2Component.install = function (Vue, options) {
    Vue.component('TTSelect', TTSelect)
};
export default Select2Component;