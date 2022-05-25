<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
<!--  <router-view/>-->
  <div class="sidebar_left">
    <div class="chapter_1">
      <div class="logo" @click="goTo('/')"><img alt="logo" src="@/assets/img/logo.svg"></div>
      <div class="numb-1 jbm-300">
        <div>01</div>
      </div>
      <div class="race_title jbm-300">
        <div>Раса</div>
      </div>
      <div class="race">
        <div>Полурослик</div>
      </div>
      <div class="arrows">
        <div><img alt="arrow_left" src="@/assets/img/icon/arrow_left.svg"></div>
        <div><img alt="arrow_right" src="@/assets/img/icon/arrow_right.svg"></div>
      </div>
      <div class="delimiter">
        <div></div>
      </div>

      <div class="menu-1">

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Этнос</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Коренастый</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Пол</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Женщина, гетеро</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Цвет кожи</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Белый</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Цвет глаз</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Зеленый</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Цвет волос</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Русый</div>
          </div>
        </div>

      </div>

      <div class="menu-2">

        <div class="column">
          <div class="menu-2_title jbm-300">
            <div>Возраст</div>
          </div>
          <div class="menu-2_link int-400">
            <div>34 г. <span>Взрослый</span></div>
          </div>
        </div>

        <div class="column">
          <div class="menu-2_title jbm-300">
            <div>Рост</div>
          </div>
          <div class="menu-2_link int-400">
            <div>100 см. <span>Маленький</span></div>
          </div>
        </div>

        <div class="column">
          <div class="menu-2_title jbm-300">
            <div>Вес</div>
          </div>
          <div class="menu-2_link int-400">
            <div>18 кг.</div>
          </div>
        </div>

      </div>

    </div>
    <div class="next_chapter">
      <div class="numb-2 jbm-300">
        <div>02</div>
      </div>
      <div class="class_title jbm-300">
        <div>Класс</div>
        <div><img alt="arrow_down" src="@/assets/img/icon/arrow_down.svg"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
body {
  background-color: #0E1518;
}

#app {
  /*font-family: 'JetBrains Mono', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.sidebar_left {
  width: 320px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /*border-right: 2px solid rgba(255, 255, 255, 0.1);*/
  outline: 2px solid rgba(255, 255, 255, 0.1);
}

.chapter_1 {
  padding-left: 32px;
  flex: 1 1 auto;
}

.logo {
  padding-top: 32px;
  text-align: left;
}

.jbm-300 {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 10.95px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.int-400 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.numb-1 {
  padding-top: 18px;
}
.numb-1 div{
  text-align: left;
  height: 18px;
}

.race_title {
  padding-top: 36px;
}

.race_title div {
  text-align: left;
  height: 18px;
}

.race {
  padding-top: 4px;
}

.race div {
  text-align: left;
  height: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.arrows {
  padding-top: 18px;
  width: 52px;
  display: flex;
  justify-content: space-between;
}

.delimiter {
  padding-top: 40px;
}


.delimiter div {
  width: 256px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.menu-1 {
  width: 256px;
  height: 122px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.column {
  height: 18px;
  display: flex;
  align-items: center;
}

.menu-1_title {
  width: 120px;
  text-align: left;
}

.menu-1_link {
  width: 110px;
  margin-left: 4px;
  text-align: left;
  position: relative;
}

.menu-1_link::after {
  content: url(@/assets/img/icon/arrow_down_small.svg);
  position: absolute;
  right: -22px;
  top: -2px;
}

.menu-2 {
  width: 256px;
  height: 70px;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-2_title {
  width: 120px;
  text-align: left;
}

.menu-2_link {
  width: 110px;
  margin-left: 4px;
  text-align: left;
  position: relative;
}

.menu-2_link span {
  color: rgba(255, 255, 255, 0.2);
}

.menu-2_link::after {
  content: url(@/assets/img/icon/arrow_slider.svg);
  position: absolute;
  right: -22px;
  top: -2px;
}
.next_chapter {
  width: 320px;
  height: 118px;
  background: #0047FF;
  padding-left: 32px;
}

.numb-2 {
  margin-top: 32px;
  height: 18px;
  text-align: left;
}

.class_title {
  margin-top: 18px;
  display: flex;
  width: 256px;
  height: 18px;
  justify-content: space-between;
}

</style>
