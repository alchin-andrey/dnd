<template>
  <div class="sidebar_left">
    <div class="chapter">
      <div class="main_chapter">
        <div class="logo" @click="goTo('/')">
          <img alt="logo" src="@/assets/img/logo.svg" />
        </div>

        <my-slider numb="01" title="Раса" arr="Полурослик"></my-slider>

        <div class="delimiter"></div>

        <div class="selection_menu">
          <my-selection 
            @click="showEthnos()"
            title="Этнос"
            :type="ethnos_select.type"
            :rare="ethnos_select.rare"
          ></my-selection>
          <my-selection title="Пол" type="Женщина, гетеро"></my-selection>
          <my-selection title="Цвет кожи" type="Белый"></my-selection>
          <my-selection title="Цвет глаз" type="Зеленый"></my-selection>
          <my-selection title="Цвет волос" type="Русый"></my-selection>
        </div>

        <div class="selection_menu">
          <my-controller
            title="Возраст"
            value="34"
            unit="г"
            note="Взрослый"
          ></my-controller>
          <my-controller
            title="Рост"
            value="100"
            unit="см"
            note="Маленький"
          ></my-controller>
          <my-controller
            title="Вес"
            value="18"
            unit="кг"
            note=""
          ></my-controller>
        </div>

        <div class="selection_menu">
          <my-selection title="Характеристики" type="Сил, Лов"></my-selection>
          <my-selection title="Навыки" type="Арк, Ана"></my-selection>
          <my-selection title="Языки" type="Акван"></my-selection>
        </div>
      </div>

      <my-button v-if="shown_home" numb="02" title="Класс"></my-button>
      <my-button-back v-if="!shown_home" @click="showHome()"></my-button-back>
    </div>

    <!-- Этнос -->
    <div v-if="shown_ethnos" class="selection_item">
      <div class="ethnos_attributes">
        <div class="feature jbm-300">
          <my-attribute
            title="Сила"
            type="Базовая"
            plus
            :numb="attributes_main.strength"
            icon="strength"
            ethnos
          >
          </my-attribute>

          <my-attribute
            title="Ловкость"
            type="Базовая"
            plus
            :numb="attributes_main.agility"
            icon="agility"
            ethnos
          >
          </my-attribute>

          <my-attribute
            title="Телосложение"
            type="Базовое"
            plus
            :numb="attributes_main.constitution"
            icon="constitution"
            ethnos
          ></my-attribute>

          <my-attribute
            title="Интеллект"
            type="Базовый"
            plus
            :numb="attributes_main.intellect"
            icon="intellect"
            ethnos
          ></my-attribute>

          <my-attribute
            title="Мудрость"
            type="Базовая"
            plus
            :numb="attributes_main.wisdom"
            icon="wisdom"
            ethnos
          ></my-attribute>

          <my-attribute
            title="Харизма"
            type="Базовая"
            plus
            :numb="attributes_main.charisma"
            icon="charisma"
            ethnos
          ></my-attribute>

          <my-attribute
            title="Скорость"
            type="Пешком"
            :numb="attributes_travel.speed"
            feet
            icon="speed"
            ethnos
          ></my-attribute>

          <my-attribute
            title="Темное зрение"
            type=""
            :numb="attributes_travel.dark_vision"
            feet
            icon="dark_vision"
            ethnos
          ></my-attribute>
        </div>

        <div class="inventory">
          <my-inventory
            title="Оружие"
            :item="inventory.weapon"
            ethnos
          ></my-inventory>
          <my-inventory
            title="Доспехи"
            :item="inventory.armor"
            ethnos
          ></my-inventory>
          <my-inventory
            title="Инструменты"
            :item="inventory.tools"
            ethnos
          ></my-inventory>
          <my-inventory
            title="Языки"
            :item="inventory.languages"
            ethnos
          ></my-inventory>
        </div>

        <div class="fines">
          <my-fines
            v-for="item in fines"
            :key="item"
            :effect="item.effect"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
          ></my-fines>
        </div>
      </div>
      <div class="ethnos_cards_menu">
        <div class="ethnos_card">
        <div>
          <img
            src="@/assets/img/characters/halfling/ethhnos/image.png"
            :alt="image"
          />
        </div>
        <div class="feature jbm-300">
          <my-attribute
            title="Мудрость"
            type="Базовая"
            plus
            :numb="attributes_main.wisdom"
            icon="wisdom"
          >
          </my-attribute>
        </div>

        <div class="fines">
          <my-fines
            v-for="item in fines"
            :key="item"
            :effect="item.effect"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
          ></my-fines>
        </div>
        <div class="ethnos_text int-400">
          <h3>Призрачный полурослик</h3>
          <p>
            Из-за того, что их народ имеет закрытую, клановую культуру,
            недоверчивую ко всему чужому, призрачные полурослики в качестве
            искателей приключений встречаются редко.
            <br />
            <br />
            <span
              >Спросите своего Мастера, можете ли Вы играть представителем этой
              подрасы.</span
            >
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- character -->
  <div class="represent">
    <div class="character">
      <div class="skin">
        <img
          alt="halfling_skin"
          src="@/assets/img/characters/halfling/halfling_skin_2_0_1.png"
        />
      </div>
      <div class="hair">
        <img
          alt="halfling_hair"
          src="@/assets/img/characters/halfling/halfling_hair_0_6_1.png"
        />
      </div>
      <div class="eyes">
        <img
          alt="halfling_eyes"
          src="@/assets/img/characters/halfling/halfling_eyes_8_2_1.png"
        />
      </div>
    </div>

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
  <div v-if="shown_home" class="sidebar_right">
    <div class="feature jbm-300">
      <my-attribute
        title="Сила"
        type="Базовая"
        plus
        :numb="attributes_main.strength"
        icon="strength"
      >
      </my-attribute>

      <my-attribute
        title="Ловкость"
        type="Базовая"
        plus
        :numb="attributes_main.agility"
        icon="agility"
      >
      </my-attribute>

      <my-attribute
        title="Телосложение"
        type="Базовое"
        plus
        :numb="attributes_main.constitution"
        icon="constitution"
      ></my-attribute>

      <my-attribute
        title="Интеллект"
        type="Базовый"
        plus
        :numb="attributes_main.intellect"
        icon="intellect"
      ></my-attribute>

      <my-attribute
        title="Мудрость"
        type="Базовая"
        plus
        :numb="attributes_main.wisdom"
        icon="wisdom"
      ></my-attribute>

      <my-attribute
        title="Харизма"
        type="Базовая"
        plus
        :numb="attributes_main.charisma"
        icon="charisma"
      ></my-attribute>
    </div>

    <div class="gap"></div>
    <!-- special_feature -->

    <div class="feature jbm-300">
      <my-attribute
        v-for="item in attributes_race"
        :key="item"
        :title="item.name"
        plus
        :numb="item.value"
        :icon="item.icon"
        cube_zero
      ></my-attribute>
    </div>

    <div class="gap"></div>

    <!-- extra_feature -->

    <div class="feature jbm-300">
      <my-attribute
        title="Скорость"
        type="Пешком"
        :numb="attributes_travel.speed"
        feet
        icon="speed"
      ></my-attribute>

      <my-attribute
        title="Темное зрение"
        type=""
        :numb="attributes_travel.dark_vision"
        feet
        icon="dark_vision"
      ></my-attribute>
    </div>

    <div class="gap"></div>

    <!-- inventory -->

    <div class="inventory">
      <my-inventory title="Оружие" :item="inventory.weapon"></my-inventory>
      <my-inventory title="Доспехи" :item="inventory.armor"></my-inventory>
      <my-inventory title="Инструменты" :item="inventory.tools"></my-inventory>
      <my-inventory title="Языки" :item="inventory.languages"></my-inventory>
    </div>

    <div class="gap"></div>

    <!-- fines -->
    <div class="fines">
      <my-fines
        v-for="item in fines"
        :key="item"
        :effect="item.effect"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
      ></my-fines>
    </div>

    <div class="gap"></div>

    <!-- text -->

    <div class="story int-400">
      <p>
        Целью большинства полуросликов является домашний уют. Место, где можно
        поселиться в покое и тишине, подальше от мародёрствующих чудовищ и
        сражающихся армий. Огонь очага, сытная пища, добрая выпивка и добрая
        беседа. Хотя некоторые полурослики проживают свой век в удалённых
        сельских общинах, другие сбиваются в постоянно кочующие общины, влекомые
        открытыми дорогами, широкими горизонтами и возможностью открыть чудеса
        новых мест и новых людей. Но даже такие кочевники любят покой, вкусную
        еду, свой очаг и свой дом, даже если это повозка, трясущаяся по пыльной
        дороге или плот, плывущий по течению реки.
      </p>

      <h3>Маленькие и практичные</h3>
      <p>
        Крошечные полурослики выживают в мире, полном более крупных существ,
        стараясь избегать внимания, а если это оказывается невозможным, то
        избегая враждебности. Они кажутся относительно безвредными, и благодаря
        этому успешно существуют столетиями, оставаясь в тени империй, войн и
        политической борьбы. Они склонны к полноте.
        <br />
        <br />
        Кожа у полуросликов встречается от смуглой до бледной, с румянцем.
        Волосы обычно коричневые или рыже-коричневые, вьющиеся. Глаза
        полуросликов карие или ореховые. Мужчины часто отпускают длинные
        бакенбарды, но бороды носят редко, а усы тем более. Они любят носить
        простую, удобную одежду, предпочитая яркие цвета.
        <br />
        <br />
        Практичность полуросликов распространяется не только на их одежду. Они
        довольствуются удовлетворением основных потребностей и простых радостей,
        уделяя совсем мало внимания роскоши. Даже богатейшие из них предпочитают
        хранить своё добро в закрытых сундуках и подвалах, а не выставлять его
        на всеобщее обозрение. Полурослики умеют находить простые решения своих
        проблем, и являются весьма решительными.
      </p>

      <h3>Добрые и любопытные</h3>
      <p>
        Приветливый и дружелюбный народ. Ценят дружбу и родственные связи так же
        как собственный дом и очаг, лишь в тайне мечтая о золоте и славе. И даже
        те из них, кто стали искателями приключений, обычно отправляются в путь,
        преследуя цели дружбы или общества, тяги к переменам или любопытства.
        Они любят открывать для себя что-то новое, даже если это совсем простые
        вещи, вроде экзотической еды или незнакомого стиля одежды.
        <br />
        <br />
        Легко поддаются жалости, и не выносят вида чужих страданий. Они щедры, и
        с радостью делятся тем, что имеют, даже в трудные времена.
      </p>

      <h3>Единые с толпой</h3>
      <p>
        Полурослики легко вливаются в сообщества людей, дварфов или эльфов, где
        их ценят и всегда им рады. Сочетание их врождённых скрытности и
        скромности позволяют им легко избегать ненужного внимания.
        <br />
        <br />
        Полурослики охотно работают с другими, и они верны своим друзьям, вне
        зависимости от их вида. Однако, если кто-то из их друзей, семьи или
        общины оказывается под угрозой, они способны проявить удивительную
        свирепость.
      </p>

      <h3>Приветливые и положительные</h3>
      <p>
        Полурослики стараются поладить с кем угодно, и не склонны выносить
        поспешные суждения — особенно отрицательные.
      </p>

      <h3>Пасторальные удовольствия</h3>
      <p>
        Большинство полуросликов живёт в маленьких, мирных общинах с большими
        фермами, среди ухоженных рощ. Они редко создают собственные королевства,
        и не держат земель за пределами своих тихих владений. Они обычно не
        признают среди себя какого-либо рода знати или королевской власти,
        вместо этого прислушиваясь к семейным старейшинам, руководствуясь их
        мнением. Семьи сохраняют свой традиционный уклад, несмотря на подъёмы и
        падения империй.
        <br />
        <br />
        Множество полуросликов живёт среди других рас, где усердная работа и
        надёжные перспективы принесут им обильное вознаграждение и земные блага.
        Некоторые общины полуросликов ведут кочевой образ жизни, путешествуя на
        повозках или плавая на суднах от одного места к другому, не оседая на
        одном месте постоянно.
      </p>

      <h3>Поиск возможностей</h3>
      <p>
        Из-за того, что их народ имеет закрытую, клановую культуру, недоверчивую
        ко всему чужому, призрачные полурослики в качестве искателей приключений
        встречаются редко.
      </p>

      <h3>Призрачный полурослик</h3>
      <p>
        Из-за того, что их народ имеет закрытую, клановую культуру, недоверчивую
        ко всему чужому, призрачные полурослики в качестве искателей приключений
        встречаются редко.
        <br />
        <br />
        <span
          >Спросите своего Мастера, можете ли Вы играть представителем этой
          подрасы.</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import MyInventory from "./components/ui/MyInventory.vue";
export default {
  components: { MyInventory },
  data() {
    return {
      shown_ethnos: false,
      shown_home: true,
      ethnos_select: {
        type: "Коренастый",
        rare: "Спросите своего Мастера, можете ли Вы играть представителем этой подрасы.",
      },

      attributes_main: {
        strength: 0,
        agility: 2,
        constitution: 0,
        intellect: 0,
        wisdom: 1,
        charisma: 0,
      },

      attributes_race: [
        {
          name: "Акробатика",
          value: 2,
          icon: "agility",
        },
        {
          name: "Анализ",
          value: 2,
          icon: "intellect",
        },
      ],

      attributes_travel: {
        speed: 25,
        dark_vision: 120,
      },

      inventory: {
        weapon: "Боевые топоры, Ручные топоры, Легкие молоты, Боевые молоты",
        armor: null,
        tools: "Кузнеца, Пивовара, Каменщика",
        languages: "Всеобщий, Дварфийский, Подземный",
      },

      fines: [
        {
          effect: "positive",
          icon: "plus",
          title: "Преимущество",
          description: "против Яда",
        },
        {
          effect: "positive",
          icon: "shield",
          title: "Сопротивление",
          description: "урону Ядом",
        },
        {
          effect: "positive",
          icon: "corner",
          title: "2×Мастерства ",
          description: "к проверке Истории на теме связанной с камнем",
        },
        {
          effect: "negative",
          icon: "minus",
          title: "Помеха",
          description: "на Восприятие под прямым солнечным светом",
        },
        {
          effect: "negative",
          icon: "minus",
          title: "Помеха",
          description: "на атаку под прямым солнечным светом",
        },
      ],
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
    showEthnos() {
      this.shown_ethnos = true;
      this.shown_home = false;
    },
    showHome() {
      this.shown_home = true;
      this.shown_ethnos = false;
    }
  },
};
</script>

<style>
body {
  background-color: #0e1518;
}

#app {
  /*font-family: 'JetBrains Mono', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.jbm-300 {
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 10.95px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
}

.int-400 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.sidebar_left {
  min-height: 100%;
  display: flex;
  outline: 2px solid rgba(255, 255, 255, 0.1);
}

.chapter {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main_chapter {
  width: 320px;
  padding-left: 32px;
  flex: 1 1 auto;
}

.logo {
  height: 32px;
  margin: 32px 0 18px 0;
}

.delimiter {
  width: 256px;
  height: 1px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.2);
}

.selection_menu {
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 34px;
}

.selection_item {
  width: 426px;
  padding-top: 32px;
  overflow-y: scroll;
}

.selection_item::-webkit-scrollbar {
  width: 0;
}

.ethnos_attributes {
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-left: 16px;
}

.ethnos_cards_menu {
  padding: 32px 0 28px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ethnos_card {
  padding: 16px;
  width: 394px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.ethnos_text {

}

.ethnos_text {
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
}

.ethnos_text h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 4px;
}

.ethnos_text span {
  color: #ffc93d;
}

/* ---------------------characters----------------------*/

.represent {
  padding-bottom: 32px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  position: relative;
  text-align: center;
}

.character {
  flex: 1 1 auto;
  padding: 0px 5px 0 5px;
  position: relative;
}

.skin {
  /* -webkit-filter : hue-rotate(520deg);
  filter : hue-rotate(520deg); */
}

.hair {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.eyes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.character {
  flex: 1 1 auto;
  padding: 0px 5px 0 5px;
}

.size {
  position: absolute;
  right: 0;
  width: 35px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
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
  background: #ffffff;
}

.division_filling_back {
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.division_filling_front {
  background: #ffffff;
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
  width: 362px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gap {
  width: 362px;
  height: 1px;
  margin: 26px 0;
  background: rgba(255, 255, 255, 0.2);
}

.inventory {
  color: rgba(255, 255, 255, 0.2);
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  color: #ffffff;
}

.fines {
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fines_column {
  display: flex;
  min-height: 18px;
}

.fines_icon {
}

.fines_text {
  margin-left: 4px;
  padding: 2px 0 1px 0;
  text-align: start;
}

.positive {
  color: #05ff00;
}

.negative {
  color: #ff0000;
}

.story {
  max-width: 362px;
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
}

.story h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 5px;
}

.story span {
  color: #ffc93d;
}
</style>
