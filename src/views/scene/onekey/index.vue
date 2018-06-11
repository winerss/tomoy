<template>
    <div class="onekey">
        <navbar :showNext="showNext">
            <p slot="header-right" style="color: #19B0FF;" @click="toPage('/scene')">完成</p>
        </navbar>
        <div class="onekey-name border_bottom">
            <p class="onekey-title">场景名称 : </p>
            <input type="text" class="onekey-input" placeholder="请输入场景名称">
        </div>
        <div class="content">
            <div class="onekey-icon">
                <p class="icon-title">场景图标: </p>
                <div class="icon-wrap">
                    <div class="inner">
                        <img src="../../../../static/home/open2-icon.png" />
                    </div>
                </div>
            </div>

            <h3 class="icon-title">关联布撤防</h3>
            <div class="relate-tab">
                <ul class="related-list">
                    <li class="list-item" v-for="(item, index) in relatedList" :key="index" :class="{'is-select': item.select}" @click="changeTab(index)">{{ item.title }}</li>
                </ul>
            </div>

            <h3 class="icon-title">小智主机</h3>
            <div class="machine-select" style="width: 340px;">
                <select v-model="modelSelect" class="select-list" style="width: 340px;">
                    <option style="width: 340px;" :value="modelSelect" class="default-item">{{ modelSelect | selectmac }}</option>
                    <option style="width: 340px;" class="select-item" v-for="(item, index) in selectArr" :key="index" :value="item.id">{{ item.title }}</option>
                </select>
                <img class="select-icon" src="../../../assets/images/scene/icon4.png" alt="">
            </div>

            <h3 class="icon-title"> 编辑动作</h3>
            <div class="switch-day" v-for="(item, index) in editArr" :key="index">
                <img class="iconurl" :src="item.iconUrl" alt="">
                <p class="switch-title">{{ item.title }}</p>
                <p class="switch-btn">
                    <img :src="item.switchUrl1" alt="" v-if="item.switchDay">
                    <img :src="item.switchUrl2" alt="" v-else>
                    <input type="checkbox" class="switch-check" v-model="item.switchDay">
                </p>
                <img class="delicon" :src="item.delUrl" alt="" @click="delItem(index)">
            </div>

            <h3 class="icon-title">定时设置</h3>
            <div class="time-wrap">
                <p class="time-title">执行时间： 08:00</p>
                <p class="time-icon">
                    <img src="../../../assets/images/scene/date.png" alt="">
                </p>
            </div>
            <ul class="every-day">
                <li class="day-item" v-for="(item, index) in dayArr" :key="index" :class="{'is-select': item.select}" @click="selectDay(index)">{{ item.title }}</li>
            </ul>
            <div class="switch-day">
                <p class="switch-title">每周重复</p>
                <p class="switch-btn">
                    <img src="../../../assets/images/scene/switch1.png" alt="" v-if="switchDay">
                    <img src="../../../assets/images/scene/switch2.png" alt="" v-else>
                    <input type="checkbox" class="switch-check" v-model="switchDay">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/onekey';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/onekey.scss';
</style>

