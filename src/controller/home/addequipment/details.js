import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'AddEquipment',
  data() {
    return {
      detailsArr: [
        {
          icon: '../../../static/home/air-icon.png',
          title: '空调',
        },
        {
          icon: '../../../static/home/tv-icon.png',
          title: '电视',
        },
        {
          icon: '../../../static/home/air-icon.png',
          title: '机顶盒',
        },
        {
          icon: '../../../static/home/air-icon.png',
          title: '窗帘',
        },
        {
          icon: '../../../static/home/air-icon.png',
          title: '风扇',
        },
        {
          icon: '../../../static/home/air-icon.png',
          title: '音响',
        },
        {
          icon: '../../../static/home/customize-icon.png',
          title: '自定义',
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