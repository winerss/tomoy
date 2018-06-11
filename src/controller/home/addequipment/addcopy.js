import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'AddCopy',
  data() {
    return {
      roomList: [
        {
          title: '空调遥控',
          selected: false
        },
        {
          title: '客厅遥控',
          selected: false
        },
        {
          title: '卧室遥控',
          selected: false
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