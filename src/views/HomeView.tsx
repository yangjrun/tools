import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import { douyuHttp } from '@/common/netRequest'

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    // douyuHttp.get({
    //   url: 'https://www.douyu.com/lapi/live/getH5Play/71415?v=220120221206&did=d39022e1d5aace2879d79ee100041601&tt=1670293991&sign=7b6fa704d2339c41b7d943661c44a51a&cdn=&rate=-1&ver=Douyu_222082905&iar=1&ive=0&hevc=0&fa=0',
    // }).then(response => {

    // })
    onMounted(() => {
      console.log('onMounted执行了')
    })
  },
  render() {
    return (
      <div class="home">
        <img alt="Vue logo" src="img/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </div>
    );
  },
});
