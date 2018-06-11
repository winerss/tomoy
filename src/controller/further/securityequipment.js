import $ from '@/utils'
import security from '@/assets/images/further/security-icon.png'
import databackup from '@/assets/images/further/databackup-icon.png'
import share from '@/assets/images/further/share-icon.png'
import record from '@/assets/images/further/record-icon.png'
import upgrade from '@/assets/images/further/upgrade-icon.png'
import network from '@/assets/images/further/network-icon.png'

export default {
  name: 'securityequipment',
  data() {
    return {
      selected: '1',
      items: [
        {
          title: '门锁',
          userImg: security,
          value: false
        }, {
          title: '红外卧室',
          userImg: databackup,
          value: false
        }, {
          title: '红外卫生间',
          userImg: share,
          value: false
        }, {
          title: '客厅插座',
          userImg: record,
          value: false
        }, {
          title: '卧室灯开关',
          userImg: upgrade,
          value: false
        }, {
          title: '门锁2',
          userImg: network,
          value: false
        }
      ],
      otheritems: [
        {
          title: '烟雾传感',
          userImg: security,
          value: false
        }, {
          title: '煤气传感',
          userImg: databackup,
          value: false
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
  },
  beforeMount() {

  },
  mounted() {
  },
  destroyed() {
  }
}
