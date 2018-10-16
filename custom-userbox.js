import CustomUserBox from './components/CustomUserBox.vue';

// eslint-disable-next-line no-undef
kiwi.plugin('custom-welcome', (kiwi) => {
    kiwi.replaceModule('components/UserBox', CustomUserBox)
});
