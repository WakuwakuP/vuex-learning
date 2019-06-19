import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { text, boolean, object } from '@storybook/addon-knobs';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Photo from '../components/Photo';

const stories = storiesOf('Organisms', module);

stories.add(
  'NavBar',
  () => ({
    components: {
      NavBar: {
        extends: NavBar, // 継承して外部がかかわる部分をオーバーライドしてモック化
        computed: {
          isLogin: () => boolean('isLogin', true), // addon-knobsでモックする
          username: () => text('username', 'username'), // addon-knobsでモックする
        },
      },
    },
    template: '<NavBar />',
  }),
  {
    info: {},
  },
);

stories.add(
  'Footer',
  () => ({
    components: {
      Footer: {
        extends: Footer,
        computed: {
          isLogin: () => boolean('isLogin', true),
        },
        methods: {
          logout: action('logout'),
        },
      },
    },
    template: '<Footer />',
  }),
  {
    info: {},
  },
);

stories.add(
  'Photo',
  () => ({
    components: { Photo },
    props: {
      item: {
        default: object(
          'item', {
            id: 'hDsJGRVr9URi',
            liked_by_user: false,
            likes_count: 1,
            owner: {
              name: 'name',
            },
            url: '',
          },
        ),
      },
    },
    methods: {
      like: (e) => {
        action('like', e);
      },
    },
    template: '<div class="grid"><Photo @like="like" :item="item" /></div>',
  }),
  {
    info: {},
  },
);
