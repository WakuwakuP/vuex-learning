import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Footer from '@/components/Footer';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer', () => {
  let actions;
  let getters;
  let options;

  beforeEach(() => {
    actions = {
      'auth/logout': jest.fn(),
    };
    getters = {
      'auth/check': () => true,
    };
    const store = new Vuex.Store({
      state: {
        auth: {
          apiStatus: true,
        },
      },
      actions,
      getters,
    });
    options = {
      store,
      localVue,
    };
  });

  // マウントテスト
  it('is a Vue Instance', () => {
    const wrapper = shallowMount(Footer, options);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // アクション発火テスト
  it('logout クリック', () => {
    const wrapper = shallowMount(Footer, options);
    wrapper.find('button').trigger('click');
    expect(actions['auth/logout']).toHaveBeenCalled();
  });

  // スナップショットテスト
  it('renders correctly', () => {
    const wrapper = shallowMount(Footer, options);
    expect(wrapper.element).toMatchSnapshot();
  });
});
