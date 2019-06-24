import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import LoginPanel from '@/components/LoginPanel';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('LoginPanel', () => {
  let actions;
  let options;
  let $router;

  // ストアのモック作成
  beforeEach(() => {
    // pushをモック化しないとエラーが出る
    $router = {
      push: jest.fn(),
    };
    actions = {
      'auth/login': jest.fn(),
    };
    const store = new Vuex.Store({
      state: {
        auth: {
          apiStatus: true,
          loginErrors: null,
        },
      },
      actions,
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

  it('is a Vue Instance', () => {
    const wrapper = shallowMount(LoginPanel, options);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders correctly', () => {
    const wrapper = shallowMount(LoginPanel, options);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('login Action', () => {
    const email = 'example@example.com';
    const password = 'jglr;akdjvnre:,f';
    const wrapper = shallowMount(LoginPanel, options);
    wrapper.find('#login-email').setValue(email);
    wrapper.find('#login-password').setValue(password);
    wrapper.find('form').trigger('submit.prevent');
    expect(actions['auth/login'])
      .toHaveBeenCalledWith(
        expect.anything(),
        { email, password },
        undefined,
      );
  });

  it('apiStatus is false', () => {
    const push = jest.fn();
    const store = new Vuex.Store({
      state: {
        auth: {
          apiStatus: false,
          loginErrors: null,
        },
      },
      actions: {
        'auth/login': jest.fn(),
      },
    });
    const mocks = {
      $$router: {
        push: jest.fn(),
      },
    };
    const email = 'example@example.com';
    const password = 'jglr;akdjvnre:,f';
    const wrapper = shallowMount(LoginPanel, {
      store,
      localVue,
      mocks,
    });
    wrapper.find('#login-email').setValue(email);
    wrapper.find('#login-password').setValue(password);
    wrapper.find('form').trigger('submit.prevent');
    expect(push).not.toBeCalled();
  });
});
