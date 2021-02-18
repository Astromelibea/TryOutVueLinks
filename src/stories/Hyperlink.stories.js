import MyHyperlink from './Hyperlink.vue';

export default {
    title: 'Example/Hyperlink',
    component: MyHyperlink
};

export const Hyper = () => ({
    components: { MyHyperlink },
    template: '<my-hyperlink isDisabled= "true" />'
});

Hyper.storyName = 'I am Hyper';