import { addDecorator, configure } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';

import Vue from 'vue'
import Vuex from 'vuex' // 追加

import '../public/css/app.css';
import 'ionicons/dist/css/ionicons.min.css';

Vue.use(Vuex)

const req = require.context('../resources/js/stories', true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(withInfo);
addDecorator(withKnobs);

configure(loadStories, module);
