<template>
    <div class="details">
        <navbar :showNext="showNext">
            <img style="vertical-align: middle;" src="../../../assets/images/scene/better.png" slot="header-right" alt="">
        </navbar>
        <div class="detail-content">
            <div class="icon-wrap">
                <img src="../../../assets/images/scene/elect.png" alt="">
            </div>
            <h3 class="icon-title">场景设置</h3>
            <div class="relate-tab">
                <ul class="related-list">
                    <li class="list-item" v-for="(item, index) in relatedList" :key="index" :class="{'is-select': item.select}" @click="changeTab(index)">{{ item.title }}</li>
                </ul>
            </div>
            <div class="switch-day" v-for="(item, index) in editArr" :key="index">
                <img class="iconurl" :src="item.iconUrl" alt="">
                <p class="switch-title">{{ item.title }}</p>
                <p class="open-status">{{ item.openStatus | openStatus }}</p>
            </div>
            <h3 class="icon-title">定时设置</h3>
            <div class="time-wrap">
                <p class="time-title">08:00</p>
                <ul class="day-list">
                    <li class="day-item" :class="{'is-select': item.select}" v-for="(item, index) in dayArr" :key="index" @click="selectDay(index)">{{ item.title }}</li>
                </ul>
                <p class="time-icon">
                    <img src="../../../assets/images/scene/renewal.png" alt="">
                </p>
            </div>
            <h3 class="icon-title action">动作执行</h3>
            <div class="relate-tab">
                <div class="related-list">
                    <span class="title-left">灯</span>
                    <span class="title-mid">------------</span>
                    <span class="title-right">动作：打开</span>
                </div>
            </div>
            <div class="add-btn temp">
                温度小于10%
            </div>
            <div class="add-btn">
                <img src="../../../assets/images/scene/add1.png" alt="">
            </div>
            <div class="add-btn save">
                保存
            </div>
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/scenedetail/';

export default controller;
</script>

<style scoped lang="scss">
@import '../../../assets/style/scene/detail.scss';
</style>

