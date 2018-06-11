import $ from '@/utils'
import Mint from 'mint-ui'
import AddIcon from '../../assets/images/scene/add.png'
import gloIcon from '../../assets/images/scene/globle.png'
import macIcon1 from '../../assets/images/scene/machine1.png'
import macIcon2 from '../../assets/images/scene/machine2.png'
import macIcon3 from '../../assets/images/scene/machine3.png'

export default {
    name: 'Scene',
    data() {
        return {
            detailsArr: [{
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
                {
                    icon: AddIcon,
                    title: '',
                    color: '#fff',
                    isLast: true
                }
            ],
            sceneList: [
                '一键场景',
                '定时场景',
                '联动场景'
            ],
            navbar: [
                {
                    title: '全局场景',
                    icon: gloIcon,
                    url: '/scene/global'
                },
                {
                    title: '小智主机1',
                    icon: macIcon1,
                    url: '/scene/global'
                },
                {
                    title: '小智主机2',
                    icon: macIcon2,
                    url: '/scene/global'
                },
                {
                    title: '小智主机3',
                    icon: macIcon3,
                    url: '/scene/global'
                },
            ],
            selected_detail: 0,
            showNext: false,
            showArrowLeft: false,
            showBetter: false
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
        changeBetter() {
            this.showBetter = !this.showBetter;
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