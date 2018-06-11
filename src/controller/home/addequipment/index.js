import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'AddEquipment',
  data() {
    return {
      listArr: [
        {
          icon: '../../../static/home/yk-icon.png',
          title: '遥控',
          arrow: '../../../static/home/arrow-right.png',
          query: 'remote'
        },
        {
          icon: '../../../static/home/open-icon.png',
          title: '智能开关',
          arrow: '../../../static/home/arrow-right.png',
          query: 'open'
        },
        {
          icon: '../../../static/home/sp-icon.png',
          title: '红外/射频按键',
          arrow: '../../../static/home/arrow-right.png',
          query: 'radio'
        },
        {
          icon: '../../../static/home/suo.png',
          title: '门锁',
          arrow: '../../../static/home/arrow-right.png',
          query: 'doorLock'
        },
        {
          icon: '../../../static/home/chazuo.png',
          title: '智能插座',
          arrow: '../../../static/home/arrow-right.png',
          query: 'socket'
        },
        {
          icon: '../../../static/home/scene-btn.png',
          title: '情景按钮',
          arrow: '../../../static/home/arrow-right.png',
          query: 'scene'
        },
        {
          icon: '../../../static/home/copy-icon.png',
          title: '从其他房间复制',
          arrow: '../../../static/home/arrow-right.png',
          query: 'copyRm'
        }
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