import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import PhotoList from '../pages/PhotoList';

const stories = storiesOf('Templates', module);

stories.add(
  'PhotoList',
  () => ({
    components: {
      PhotoList: {
        extends: PhotoList,
        data() {
          return {
            photos: [
              {
                id: 'hDsJGRVr9URi',
                url: '',
                likes_count: 1,
                liked_by_user: true,
                owner: {
                  name: 'user',
                },
              },
              {
                id: 'JKaUL9gM_Zp2',
                url: '',
                likes_count: 0,
                liked_by_user: false,
                owner: {
                  name: 'user',
                },
              },
            ],
            currentPage: 1,
            lastPage: 1,
          };
        },
        methods: {
          fetchPhotos: () => action('fetchPhotos'),
          onLikeClick({ id, liked }) {
            if (liked) {
              this.unlike(id);
            } else {
              this.like(id);
            }
          },
          like: action('like'),
          unlike: action('unlike'),
        },
      },
    },
    props: {
      page: {
        default: 1,
      },
    },
    template: '<PhotoList :page="page" />',
  }),
  {
    info: {},
  },
);
