// This file is auto gererated by build/build-entry.js

import YwVeCheckbox from './ve-checkbox';
import YwVeCheckboxGroup from './ve-checkbox-group';
import YwVeContextmenu from './ve-contextmenu';
import YwVeDropdown from './ve-dropdown';
import YwVeIcon from './ve-icon';
import YwVeLoading from './ve-loading';
import YwVeLocale from './ve-locale';
import YwVePagination from './ve-pagination';
import YwVeRadio from './ve-radio';
import YwVeSelect from './ve-select';
import YwVeTable from './ve-table';


const version = '2.27.1';
const components = [
  YwVeCheckbox,
  YwVeCheckboxGroup,
  YwVeContextmenu,
  YwVeDropdown,
  YwVeIcon,
  YwVeLoading,
  YwVeLocale,
  YwVePagination,
  YwVeRadio,
  YwVeSelect,
  YwVeTable
];

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component);
  });

  Vue.prototype.$veLoading = YwVeLoading;
  Vue.prototype.$veLocale = YwVeLocale;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  YwVeCheckbox,
  YwVeCheckboxGroup,
  YwVeContextmenu,
  YwVeDropdown,
  YwVeIcon,
  YwVeLoading,
  YwVeLocale,
  YwVePagination,
  YwVeRadio,
  YwVeSelect,
  YwVeTable
};

export default {
  install,
  version,
  YwVeCheckbox,
  YwVeCheckboxGroup,
  YwVeContextmenu,
  YwVeDropdown,
  YwVeIcon,
  YwVeLoading,
  YwVeLocale,
  YwVePagination,
  YwVeRadio,
  YwVeSelect,
  YwVeTable
};
