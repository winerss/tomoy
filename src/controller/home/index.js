import $ from '@/utils'
import Mint from 'mint-ui'

export default {
  name: 'Home',
  data() {
    return {
      test: 'this is a home page',
      selected_detail: 0,
      roomArr: ['客厅', '厨房', '阳台', '主卧', '...'],
      listIconArr: [{
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon1.png',
        text: '电视遥控器1',
        showDel: false,
        isShake: false
      }, {
        icon: '../../../static/home/icon-add.png',
        text: '',
        showDel: false,
        isShake: false,
        isAdd: true
      }],
      Loop: null
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
    },
    delListItem(index) {
      setTimeout(() => {
        this.listIconArr.splice(index, 1);
      }, 50)
    },
    showDeleteButton(index) {
      clearInterval(this.Loop);
      this.Loop = setTimeout(() => {
        this.listIconArr[index].showDel = true;
        this.listIconArr[index].isShake = true;
      }, 1000);
    },
    clearLoop() {
      clearInterval(this.Loop);
    },
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