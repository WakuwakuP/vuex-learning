import { createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';

import Login from '@/pages/Login';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Login Lifecycle', () => {
  let store;
  let clearError;
  beforeEach(() => {
    store = new Vuex.Store({});
    clearError = jest.fn();
  });

  it('test', () => {
    shallowMount(Login, { store, localVue, methods: { clearError } });
    expect(clearError).toHaveBeenCalled();
  });
});

describe('Login Props/VuexState', () => {
  let store;
  let clearError;
  beforeEach(() => {
    const auth = {
      state: {
        loginErrorMessages: null,
        registerErrorMessages: null,
      },
    };
    store = new Vuex.Store({
      modules: {
        auth,
      },
    });
    clearError = jest.fn();
  });
  it('Login', () => {
    const wrapper = mount(Login, { store, localVue, methods: { clearError } });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Register', () => {
    const wrapper = mount(Login, {
      store,
      localVue,
      methods: {
        clearError,
      },
      data: () => ({
        tab: 'RegisterPanel',
      }),
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('User Interaction', () => {
  let store;
  let clearError;
  beforeEach(() => {
    const auth = {
      state: {
        loginErrorMessages: null,
        registerErrorMessages: null,
      },
    };
    store = new Vuex.Store({
      modules: {
        auth,
      },
    });
    clearError = jest.fn();
  });

  it('Click Login and Register', () => {
    const wrapper = mount(Login, { store, localVue, methods: { clearError } });

    wrapper.find('.tab__item--register').trigger('click');
    expect(wrapper.vm.tab).toBe('RegisterPanel');

    wrapper.find('.tab__item--login').trigger('click');
    expect(wrapper.vm.tab).toBe('LoginPanel');
  });
});
