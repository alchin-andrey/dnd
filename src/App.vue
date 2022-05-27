<template>

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
            <div>34 г <span>Взрослый</span></div>
          </div>
        </div>

        <div class="column">
          <div class="menu-2_title jbm-300">
            <div>Рост</div>
          </div>
          <div class="menu-2_link int-400">
            <div>100 см <span>Маленький</span></div>
          </div>
        </div>

        <div class="column">
          <div class="menu-2_title jbm-300">
            <div>Вес</div>
          </div>
          <div class="menu-2_link int-400">
            <div>18 кг</div>
          </div>
        </div>
      </div>

      <div class="menu-3">
        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Характеристики</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Сил, Лов</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Навыки</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Арк, Ана</div>
          </div>
        </div>

        <div class="column">
          <div class="menu-1_title jbm-300">
            <div>Языки</div>
          </div>
          <div class="menu-1_link int-400">
            <div>Акван</div>
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

  <!-- character -->
  <div class="represent">
    <div class="character"><img alt="halfling" src="@/assets/img/characters/halfling.png"></div>

    <div class="size">

      <div class="skale">
        <div class="division_numb_top"></div>
        <div class="skale_division division_off">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top">210</div>
        <div class="skale_division division_off">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top">180</div>
        <div class="skale_division division_off">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top">150</div>
        <div class="skale_division division_off">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top">120</div>
        <div class="skale_division division_filling_back">
          <div class="division_filling_front"></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top">90</div>
        <div class="skale_division division_active">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_top"></div>
        <div class="skale_division division_active">
          <div class=""></div>
        </div>
      </div>

      <div class="skale">
        <div class="division_numb_down">0</div>
        <div class="skale_division division_active">
          <div class=""></div>
        </div>
      </div>

    </div>

  </div>

  <!-- sidebar_right -->
  <div class="sidebar_right">
    <div class="feature jbm-300">
      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.5" y="5.5" width="7" height="7" stroke="white" fill="" stroke-opacity="0.2" />
            </svg>
          </div>
          <div class="feature_item">Сила<span>Базовая</span></div>
          <div class="feature_numb">+0</div>
        </div>
        <div class="feature_column_visual">
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.80902 12.5L9 6.11803L12.191 12.5H5.80902Z" stroke="white" fill="" stroke-opacity="1" />
            </svg>
          </div>
          <div class="feature_item feature_active">Ловкость<span>Базовая</span></div>
          <div class="feature_numb feature_active">+2</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.191 5.5L9 11.882L5.80902 5.5L12.191 5.5Z" stroke="white" fill="" stroke-opacity="0.2" />
            </svg>
          </div>
          <div class="feature_item">Телосложение<span>Базовое</span></div>
          <div class="feature_numb">+0</div>
        </div>
        <div class="feature_column_visual">
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5.5" y="5.5" width="7" height="7" rx="3.5" stroke="white" fill="" stroke-opacity="0.2" />
            </svg>
          </div>
          <div class="feature_item">Интеллект<span>Базовый</span></div>
          <div class="feature_numb">+0</div>
        </div>
        <div class="feature_column_visual">
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4.7071" y="9" width="6.07108" height="6.07108" transform="rotate(-45 4.7071 9)" stroke="white"
                fill="" stroke-opacity="1" />
            </svg>
          </div>
          <div class="feature_item feature_active">Мудрость<span>Базовая</span></div>
          <div class="feature_numb feature_active">+1</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 4L10.1803 7.81966H14L10.9098 10.1803L12.0902 14L9 11.6393L5.90983 14L7.09017 10.1803L4 7.81966H7.81966L9 4Z"
                stroke="white" fill="" stroke-opacity="0.2" />
            </svg>
          </div>
          <div class="feature_item">Харизма<span>Базовая</span></div>
          <div class="feature_numb">+0</div>
        </div>
        <div class="feature_column_visual">
        </div>
      </div>

    </div>

    <div class="gap">
      <div></div>
    </div>
    <!-- special_feature -->

    <div class="feature jbm-300">

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <img alt="acrobatics" src="@/assets/img/icon/special_feature/acrobatics.svg">
          </div>
          <div class="feature_item feature_active">Акробатика</div>
          <div class="feature_numb feature_active">+2</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <img alt="analysis" src="@/assets/img/icon/special_feature/analysis.svg">
          </div>
          <div class="feature_item feature_active">Анализ</div>
          <div class="feature_numb feature_active">+2</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
          <div class="cube_zero"></div>
        </div>
      </div>
    </div>

    <div class="gap">
      <div></div>
    </div>

    <!-- extra_feature -->

    <div class="feature jbm-300">
      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5H7L9 9L7 13H4L6 9L4 5Z" fill="white" fill-opacity="1" />
              <path d="M9 5H12L14 9L12 13H9L11 9L9 5Z" fill="white" fill-opacity="1" />
            </svg>
          </div>
          <div class="feature_item feature_active">Скорость<span>Пешком</span></div>
          <div class="feature_numb feature_active">25 футов</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>

      <div class="feature_column">
        <div class="feature_column_value">
          <div class="feature_icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="2.5" stroke="white" stroke-opacity="1" />
              <!-- Для не активного параметра stroke-opacity="0.2" -->
              <path d="M14 9L11 7V11L14 9Z" fill="white" fill-opacity="1" />
              <!-- Для не активного параметра fill-opacity="0.2" -->
              <path d="M4 9L7 11L7 7L4 9Z" fill="white" fill-opacity="1" />
              <!-- Для не активного параметра fill-opacity="0.2" -->
            </svg>
          </div>
          <div class="feature_item feature_active">Темное зрение<span></span></div>
          <div class="feature_numb feature_active">120 футов</div>
        </div>
        <div class="feature_column_visual">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
      </div>

    </div>

    <div class="gap">
      <div></div>
    </div>

    <!-- inventory -->

    <div class="inventory">

      <div class="inventory_column">
        <div class="inventory_item jbm-300 inventory_icon inventory_active">Оружие<span>:</span></div>
        <div class="inventory_text int-400 inventory_active">Боевые топоры, Ручные топоры, Легкие молоты, Боевые молоты
        </div>
      </div>

      <div class="inventory_column">
        <div class="inventory_item jbm-300">Доспехи<span>:</span></div>
        <div class="inventory_text int-400">—</div>
      </div>

      <div class="inventory_column">
        <div class="inventory_item jbm-300 inventory_icon inventory_active">Инструменты<span>:</span></div>
        <div class="inventory_text int-400 inventory_active">Кузнеца, Пивовара, Каменщика</div>
      </div>

      <div class="inventory_column">
        <div class="inventory_item jbm-300 inventory_icon inventory_active">Языки<span>:</span></div>
        <div class="inventory_text int-400 inventory_active">Всеобщий, Дварфийский, Подземный</div>
      </div>

    </div>

    <div class="gap">
      <div></div>
    </div>

    <!-- fines -->

    <div class="fines">

      <div class="fines_column">
        <div class="fines_icon"><img alt="plus" src="@/assets/img/icon/fines/plus.svg"></div>
        <div class="fines_text int-400"><span class="positive">Преимущество </span>против Яда</div>
      </div>

      <div class="fines_column">
        <div class="fines_icon"><img alt="shield" src="@/assets/img/icon/fines/shield.svg"></div>
        <div class="fines_text int-400"><span class="positive">Сопротивление </span>урону Ядом</div>
      </div>

      <div class="fines_column">
        <div class="fines_icon"><img alt="corner" src="@/assets/img/icon/fines/corner.svg"></div>
        <div class="fines_text int-400"><span class="positive">2×Мастерства </span>к проверке Истории на теме связанной
          с камнем</div>
      </div>

      <div class="fines_column">
        <div class="fines_icon"><img alt="minus" src="@/assets/img/icon/fines/minus.svg"></div>
        <div class="fines_text int-400"><span class="negative">Помеха </span>на Восприятие под прямым солнечным светом
        </div>
      </div>

      <div class="fines_column">
        <div class="fines_icon"><img alt="minus" src="@/assets/img/icon/fines/minus.svg"></div>
        <div class="fines_text int-400"><span class="negative">Помеха </span>на атаку под прямым солнечным светом</div>
      </div>

    </div>

    <div class="gap">
      <div></div>
    </div>

    <!-- text -->

    <div class="story int-400">
      <p>Целью большинства полуросликов является домашний уют. Место, где можно поселиться в покое и тишине, подальше от
        мародёрствующих чудовищ и сражающихся армий. Огонь очага, сытная пища, добрая выпивка и добрая беседа. Хотя
        некоторые полурослики проживают свой век в удалённых сельских общинах, другие сбиваются в постоянно кочующие
        общины, влекомые открытыми дорогами, широкими горизонтами и возможностью открыть чудеса новых мест и новых
        людей. Но даже такие кочевники любят покой, вкусную еду, свой очаг и свой дом, даже если это повозка, трясущаяся
        по пыльной дороге или плот, плывущий по течению реки.</p>

      <h3>Маленькие и практичные</h3>
      <p>
        Крошечные полурослики выживают в мире, полном более крупных существ, стараясь избегать внимания, а если это
        оказывается невозможным, то избегая враждебности. Они кажутся относительно безвредными, и благодаря этому
        успешно существуют столетиями, оставаясь в тени империй, войн и политической борьбы. Они склонны к полноте.
        <br />
        <br />
        Кожа у полуросликов встречается от смуглой до бледной, с румянцем. Волосы обычно коричневые или рыже-коричневые,
        вьющиеся. Глаза полуросликов карие или ореховые. Мужчины часто отпускают длинные бакенбарды, но бороды носят
        редко, а усы тем более. Они любят носить простую, удобную одежду, предпочитая яркие цвета.
        <br />
        <br />
        Практичность полуросликов распространяется не только на их одежду. Они довольствуются удовлетворением основных
        потребностей и простых радостей, уделяя совсем мало внимания роскоши. Даже богатейшие из них предпочитают
        хранить своё добро в закрытых сундуках и подвалах, а не выставлять его на всеобщее обозрение. Полурослики умеют
        находить простые решения своих проблем, и являются весьма решительными.
      </p>

      <h3>Добрые и любопытные</h3>
      <p>Приветливый и дружелюбный народ. Ценят дружбу и родственные связи так же как собственный дом и очаг, лишь в
        тайне мечтая о золоте и славе. И даже те из них, кто стали искателями приключений, обычно отправляются в путь,
        преследуя цели дружбы или общества, тяги к переменам или любопытства. Они любят открывать для себя что-то новое,
        даже если это совсем простые вещи, вроде экзотической еды или незнакомого стиля одежды.
        <br />
        <br />
        Легко поддаются жалости, и не выносят вида чужих страданий. Они щедры, и с радостью делятся тем, что имеют, даже
        в трудные времена.
      </p>

      <h3>Единые с толпой</h3>
      <p>Полурослики легко вливаются в сообщества людей, дварфов или эльфов, где их ценят и всегда им рады. Сочетание их
        врождённых скрытности и скромности позволяют им легко избегать ненужного внимания.
        <br />
        <br />
        Полурослики охотно работают с другими, и они верны своим друзьям, вне зависимости от их вида. Однако, если
        кто-то из их друзей, семьи или общины оказывается под угрозой, они способны проявить удивительную свирепость.
      </p>

      <h3>Приветливые и положительные</h3>
      <p>Полурослики стараются поладить с кем угодно, и не склонны выносить поспешные суждения — особенно отрицательные.
      </p>

      <h3>Пасторальные удовольствия</h3>
      <p>Большинство полуросликов живёт в маленьких, мирных общинах с большими фермами, среди ухоженных рощ. Они редко
        создают собственные королевства, и не держат земель за пределами своих тихих владений. Они обычно не признают
        среди себя какого-либо рода знати или королевской власти, вместо этого прислушиваясь к семейным старейшинам,
        руководствуясь их мнением. Семьи сохраняют свой традиционный уклад, несмотря на подъёмы и падения империй.
        <br />
        <br />
        Множество полуросликов живёт среди других рас, где усердная работа и надёжные перспективы принесут им обильное
        вознаграждение и земные блага. Некоторые общины полуросликов ведут кочевой образ жизни, путешествуя на повозках
        или плавая на суднах от одного места к другому, не оседая на одном месте постоянно.
      </p>

      <h3>Поиск возможностей</h3>
      <p>Из-за того, что их народ имеет закрытую, клановую культуру, недоверчивую ко всему чужому, призрачные
        полурослики в качестве искателей приключений встречаются редко.</p>

      <h3>Призрачный полурослик</h3>
      <p>Из-за того, что их народ имеет закрытую, клановую культуру, недоверчивую ко всему чужому, призрачные
        полурослики в качестве искателей приключений встречаются редко.
        <br />
        <br />
        <span>Спросите своего Мастера, можете ли Вы играть представителем этой подрасы.</span>
      </p>

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
  height: 100%;
  display: flex;
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

.numb-1 div {
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

.menu-3 {
  width: 256px;
  height: 70px;
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

/* ---------------------characters----------------------*/

.represent {
  padding-bottom: 32px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.character {
  flex: 1 1 auto;
  padding: 0px 5px 0 5px;
}

.size {
  position: absolute;
  right: 0;
  width: 35px;
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #FFFFFF;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.skale {
  display: flex;
  gap: 4px 0;
}

.division_numb_down {
  margin-right: 12px;
  margin-bottom: -5px;
  align-self: flex-end;
}

.division_numb_top {
  margin-right: 12px;
  margin-top: -5px;
  align-self: flex-start;
}

.skale_division {
  width: 1px;
  height: 96px;
}

.division_off {
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.division_active {
  background: #FFFFFF;
}

.division_filling_back {
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.division_filling_front {
  background: #FFFFFF;
  height: 33%;
}




/* ---------------------sidebar_right----------------------*/

.sidebar_right {
  /* width: 426px; */
  min-width: 426px;
  padding: 32px 0 32px 32px;
  overflow-y: scroll;
}

/* .sidebar_right::-webkit-scrollbar {
  width: 20px;
  background-color: #0E1518;
}

.sidebar_right::-webkit-scrollbar-thumb {
  border-radius: 3px;
  border: 8px solid #0E1518;
  background-color: #ffffff;
}

.sidebar_right::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: #0E1518;
  margin: 25px;
} */

.sidebar_right::-webkit-scrollbar {
  width: 0;
}

.feature {
  color: rgba(255, 255, 255, 0.2);
  max-width: 362px;
}

.feature_column {
  display: flex;
  min-height: 18px;
  margin-bottom: 4px;

}

.feature_column_value {
  display: flex;
  width: 252px;
}

.feature_icon {
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
}

.feature_item {
  margin-left: 4px;
}

.feature_item span {
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.2);
}

.feature_active {
  color: #FFFFFF;
}

.feature_numb {
  flex: 1 1 auto;
  text-align: end;
}

.feature_column_visual {
  width: 98px;
  display: flex;
  align-items: center;
  margin-left: 12px;
  flex-wrap: wrap;
  padding: 5px 0 5px 0;
  gap: 2px 2px;
}

.cube {
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
  border-radius: 2px;
}

.cube_zero {
  width: 8px;
  height: 8px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.gap {
  width: 362px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.gap div {
  width: 362px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.inventory {
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 4px;
}

.inventory_column {
  display: flex;
  min-height: 18px;
  /* margin-bottom: 4px; */
}

.inventory_item span {
  color: rgba(255, 255, 255, 0.2);
}

.inventory_item {
  margin-left: 22px;
  color: rgba(255, 255, 255, 0.2);
}

.inventory_icon {
  position: relative;
}

.inventory_icon::before {
  content: url(@/assets/img/icon/check.svg);
  position: absolute;
  left: -22px;
}

.inventory_text {
  width: 100%;
  margin-left: 12px;
  padding: 1px 0 2px 0;
  text-align: start;
  color: rgba(255, 255, 255, 0.2);
}

.inventory_active {
  color: #FFFFFF;
}

.fines {
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 4px;
}

.fines_column {
  display: flex;
  min-height: 18px;
}

.fines_icon {}

.fines_text {
  margin-left: 4px;
  padding: 2px 0 1px 0;
  text-align: start;
}

.positive {
  color: #05FF00;
}

.negative {
  color: #FF0000;
}

.story {
  max-width: 362px;
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
}

.story h3 {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-top: 25px;
  margin-bottom: 5px;
}

.story span {
  color: #FFC93D;
}
</style>
