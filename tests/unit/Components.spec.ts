import { shallowMount } from '@vue/test-utils'
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Home from '@/components/Home.vue';
import PostPreviewCard from '@/components/PostPreviewCard.vue';
import Projects from '@/components/Project.vue';
import Skills from '@/components/Skills.vue';

describe('Contact.vue', () => {
  test('Contact renders properly', () => {
    const wrapper = shallowMount(Contact);
    expect(wrapper.text()).toMatch(/linkedin/i);
  });
});


describe('PostPreviewCard.vue', () => {
  const mockData = { title: 'testTitle', description: 'testContent', link: 'testLink', pubDate: new Date('Wed Oct 06 2021 15:17:45') };
  test('PostPreviewCard renders properly', () => {
    const wrapper = shallowMount(PostPreviewCard, {
      propsData: { post: mockData }
    });
    expect(wrapper.text()).toMatch('testTitle');
    expect(wrapper.text()).toMatch('testContent');
    expect(wrapper.text()).toMatch('Wed Oct 06 2021');
  });
});

// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
