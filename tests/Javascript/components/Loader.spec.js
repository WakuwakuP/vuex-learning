import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import Loader from '@/components/Loader';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Loader', () => {
  // マウントテスト
  it('is a Vue Instance', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  // スナップショットテスト
  it('renders correctly', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.element).toMatchSnapshot();
  });
});
