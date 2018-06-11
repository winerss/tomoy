import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'AddScene',
  data() {
    return {
      detailsArr: [
        {
          icon: '../../../static/home/open1-icon.png',
          title: '打开卧室灯',
          color: '#6C7DE8'
        },
        {
          icon: '../../../static/home/close1-icon.png',
          title: '关闭卧室灯',
          color: '#1AD0CD'
        },
        {
          icon: '../../../static/home/open2-icon.png',
          title: '打开吊灯',
          color: '#3AC86C'
        },
        {
          icon: '../../../static/home/close2-icon.png',
          title: '关闭吊灯',
          color: '#19B0FF'
        },
        {
          icon: '../../../static/home/open3-icon.png',
          title: '打开简灯',
          color: '#FFA400'
        },
        {
          icon: '../../../static/home/close3-icon.png',
          title: '关闭简灯',
          color: '#496179'
        },
        {
          icon: '../../../static/home/open4-icon.png',
          title: '打开背景灯',
          color: '#5F76A9'
        },
        {
          icon: '../../../static/home/close4-icon.png',
          title: '关闭背景灯',
          color: '#5F76A9'
        },
      ]
    }
  },
  computed: {
    data() {
      return this.$store.state.Home
    }
  },
  methods: {
    toPage(url) {
      this.$router.push({
        path: url
      })
    }
  },
  beforeMount() {

  },
  mounted() {
    this.$store.dispatch('HOME_DATA', {
      msg: 'this is home store'
    })

  },
  destroyed() {}
}