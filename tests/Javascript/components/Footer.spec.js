import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Footer from '@/components/Footer';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer', () => {
  let actions;
  let getters;
  let options;
  let $router;
  let push;

  // ストアのモック作成
  beforeEach(() => {
    // push をモック化しないとエラーが出る
    push = jest.fn();
    $router = {
      push: jest.fn(),
    };
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
      // $routerをモック化
      mocks: {
        $router,
      },
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

  it('apiStatus is false logout クリック', () => {
    const wrapper = shallowMount(Footer, {
      store: new Vuex.Store({
        state: {
          auth: {
            apiStatus: false,
          },
        },
        actions,
        getters,
      }),
      localVue,
      // $routerをモック化
      mocks: {
        $router,
      },
    });
    wrapper.find('button').trigger('click');
    expect(push).not.toBeCalled();
  });

  // スナップショットテスト
  it('renders correctly', () => {
    const wrapper = shallowMount(Footer, options);
    expect(wrapper.element).toMatchSnapshot();
  });
});
