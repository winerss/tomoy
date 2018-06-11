<template>
    <div class="equipment">
        <navbar :showArrowLeft="showArrowLeft" :showNext="showNext">
            <p class="better" slot="header-left" @click="changeBetter">
                <img src="../../assets/images/scene/better.png" alt="">
            </p>
        </navbar>
        <mt-navbar v-model="selected_detail">
            <mt-tab-item :id="index" v-for="(item, index) in sceneList" :key="index">{{ item }}</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected_detail">
            <mt-tab-container-item :id="index" v-for="(item, index) in sceneList" :key="index">

            </mt-tab-container-item>
        </mt-tab-container>
        <div class="module-entry">
            <ul class="list">
                <li class="list-item" v-for="(item, index) in detailsArr" :key="index">
                    <div :style="{'background': item.color}" class="list-wrap" @click="toPage('/scene/detail')" v-if="item.title">
                        <div class="inner">
                            <img class="item-icon" :src="item.icon" alt="">
                            <h3 class="item-text">{{ item.title }}</h3>
                        </div>
                    </div>
                    <div :style="{'background': item.color}" class="list-wrap dashed" @click="toPage('/scene/onekey')" v-else>
                        <div class="inner">
                            <img class="item-icon" :src="item.icon" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--左边侧边栏-->
        <div class="navbar-left" v-if="showBetter">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="(item, index) in navbar" :key="index" @click="toPage(item.url)">
                    <div class="inner">
                        <img class="item-icon" :src="item.icon" alt="">
                        <h3 class="nav-title">{{ item.title }}</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import controller from '@/controller/scene/';

export default controller;
</script>

<style scoped lang="scss">
@import '../../assets/style/home/addequipment/addscene.scss';
@import '../../assets/style/scene/index.scss';
</style>
