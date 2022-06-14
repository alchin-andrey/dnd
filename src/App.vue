<template>
  <div class="sidebar_left">
    <div class="chapter">
      <div class="main_chapter">
        <div class="logo" @click="showMY()">
          <img alt="logo" src="@/assets/img/logo.svg" />
        </div>

        <my-slider numb="01" :title="t('race')" :arr="Object.keys(this.race)" :type="MY.race"> </my-slider>

        <div class="delimiter"></div>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_ethnos')"
            :active="shown_ethnos"
            :title="t('ethnos')"
            :type="t(MY.ethnos)"
            :rare="ethnos_select.rare"
          ></my-selection>
          <my-selection
            @click="show('shown_gender')"
            :active="shown_gender"
            :title="t('gender')"
            :type="getGenderName()"
          ></my-selection>
          <my-selection
            @click="show('shown_skin_color')"
            :active="shown_skin_color"
            :title="t('color_skin')"
            :type="t(MY.color.skin.name)"
          >
          </my-selection>
          <my-selection
            @click="show('shown_eyes_color')"
            :active="shown_eyes_color"
            :title="t('color_eyes')"
            :type="t(MY.color.eyes.name)"
          >
          </my-selection>
          <my-selection
            @click="show('shown_hair_color')"
            :active="shown_hair_color"
            :title="t('color_hair')"
            :type="t(MY.color.hair.name)"
          >
          </my-selection>
        </div>

        <div class="selection_menu">
          <my-controller
            @click="show('shown_age')"
            :active="shown_age"
            :title="t('age')"
            :value="age"
            age
            note="Взрослый"
          ></my-controller>
          <my-controller
            @click="show('shown_growth')"
            :active="shown_growth"
            :title="t('height')"
            value="100"
            unit="см"
            note="Маленький"
          ></my-controller>
          <my-controller
            @click="show('shown_weight')"
            :active="shown_weight"
            :title="t('weight')"
            :value="weight"
            unit="кг"
            note=""
          >
          </my-controller>
        </div>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_characteristics')"
            :active="shown_characteristics"
            title="Характеристики"
            type="Сил, Лов"
          ></my-selection>
          <my-selection
            @click="show('shown_skills')"
            :active="shown_skills"
            title="Навыки"
            type="Арк, Ана"
          >
          </my-selection>
          <my-selection
            @click="show('shown_languages')"
            :active="shown_languages"
            title="Языки"
            type="Акван"
          >
          </my-selection>
        </div>
      </div>

      <my-button v-if="shown_home" numb="02" title="Класс"></my-button>
      <my-button-back v-if="!shown_home" @click="showHome()"></my-button-back>
    </div>
    <!-- Этнос-->
    <my-selection-box :shown="shown_ethnos">
      <div class="ethnos_attributes">
        <!-- Этнос_attributes_main -->
        <div class="feature jbm-300">
          <my-attribute
            v-for="item in attributes_main"
            :key="item"
            :title="item.name"
            :type="item.type"
            plus
            :numb="item.value"
            :icon="item.icon"
            ethnos
            :base="item.base"
          >
          </my-attribute>
          <my-attribute
            v-for="item in attributes_travel"
            :key="item"
            :title="item.name"
            :type="item.type"
            :numb="item.value"
            feet
            :icon="item.icon"
            ethnos
            :base="item.base"
          ></my-attribute>
        </div>
        <!-- Этнос_attributes_main -->

        <!-- Этнос_inventory -->
        <div class="inventory">
          <my-inventory
            v-for="item in inventory"
            :key="item"
            :title="item.name"
            :item="item.type"
            ethnos
          >
          </my-inventory>
        </div>
        <!-- Этнос_inventory -->

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
        <my-selection-card
          v-for="race of ethnos_card"
          :key="race"
          @click="ethnosName(race.name, race.rare)"
          :class="{ selection_card_active: ethnos_select.name === race.name }"
        >
          <div>
            <img
              src="@/assets/img/characters/halfling/ethhnos/image.png"
              :alt="image"
            />
          </div>
          <div class="feature jbm-300">
            <my-attribute
              v-for="item of race.attributes_main"
              :key="item"
              :title="item.name"
              :type="item.type"
              plus
              :numb="item.value"
              :icon="item.icon"
            >
            </my-attribute>
          </div>

          <div class="fines">
            <my-fines
              v-for="item of race.fines"
              :key="item"
              :effect="item.effect"
              :icon="item.icon"
              :title="item.title"
              :description="item.description"
            ></my-fines>
          </div>
          <my-card-text :title="race.name" :text="race.story" :rare="race.rare">
          </my-card-text>
        </my-selection-card>
      </div>
    </my-selection-box>
    <!-- Этнос -->

    <!-- Гендр -->
    <my-selection-box :shown="shown_gender">
      <Genders />
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="shown_skin_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('skin_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('skin_hower', color, i, j)"
              @click="choiceColor('skin', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="MY.color.skin.hex"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text
          :title="t(skin_hower ? skin_hower.name : MY.color.skin.name)"
          :text="`${t('characteristic')} ${t('for_ethnos')}`"
        ></my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="shown_eyes_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('eyes_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('eyes_hower', color, i, j)"
              @click="choiceColor('eyes', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="MY.color.eyes.hex"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text
          :title="t(eyes_hower ? eyes_hower.name : MY.color.eyes.name)"
          :text="`${t('characteristic')} ${t('for_ethnos')}`"
        ></my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="shown_hair_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('hair_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('hair_hower', color, i, j)"
              @click="choiceColor('hair', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="MY.color.hair.hex"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text
          :title="t(hair_hower ? hair_hower.name : MY.color.hair.name)"
          :text="`${t('characteristic')} ${t('for_ethnos')}`"
        ></my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет волос -->

    <!-- Возраст -->
    <my-selection-box :shown="shown_age">

    <AgeWeight :value="age" :arr="age_arr" age/>

    </my-selection-box>
    <!-- Возраст -->

    <!-- Рост -->
    <my-selection-box :shown="shown_growth">
      <div class="flex_options">
        <div class="slider_growth_back">
          <div class="slider_growth">
            <div class="slider_knob"></div>
            <div class="slider_value">100 см</div>
          </div>
        </div>

        <div class="size_growth">
          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">120</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">90</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_down"></div>
          </div>
        </div>
      </div>
    </my-selection-box>
    <!-- Рост -->

    <!-- Вес -->
    <my-selection-box :shown="shown_weight">

    <AgeWeight :value="weight" :arr="weight_arr"/>
    
    </my-selection-box>
    <!-- Вес -->

    <!-- Характеристики -->
    <my-selection-box :shown="shown_characteristics">
      <div class="jbm-300">Характеристики</div>
    </my-selection-box>
    <!-- Характеристики -->

    <!-- Навыки -->
    <my-selection-box :shown="shown_skills">
      <div class="jbm-300">Навыки</div>
    </my-selection-box>
    <!-- Навыки -->

    <!-- Языки -->
    <my-selection-box :shown="shown_languages">
      <div class="jbm-300">Языки</div>
    </my-selection-box>
    <!-- Языки -->
  </div>
  <!-- character -->
  <div class="represent">
    <div
      class="character"
      :class="{
        active_eyes: shown_eyes_color || shown_hair_color,
        active_skin: shown_skin_color,
      }"
    >
      <!-- <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('skin', skin_hower)"
        alt="skin"
      />

      <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('hair', hair_hower)"
        alt="hair"
      />

      <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('eyes', eyes_hower)"
        alt="eyes"
      /> -->
    </div>
    <transition name="slide-fade">
      <div class="size" v-if="hideRuler()">
        <div class="skale_division_top">
          <div class="division_numb_top"></div>
          <div class="skale_division_top division_off">
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
    </transition>
  </div>

  <!-- sidebar_right -->
  <div v-if="shown_home" class="sidebar_right">
    <!-- attributes_main -->
    <div class="feature jbm-300">
      <my-attribute
        v-for="(val, name) in MY.stats"
        :key="name"
        :title="name"
        :type="`${name}_base`"
        plus
        :numb="getNumbStats(name)"
        :icon="name"
      >
      </my-attribute>




      <!-- <my-attribute
        v-for="item in attributes_main"
        :key="item"
        :title="item.name"
        :type="item.type"
        plus
        :numb="item.value"
        :icon="item.icon"
      >
      </my-attribute> -->
    </div>

    <div class="gap"></div>
    <!-- attributes_main -->

    <!-- attributes_race -->
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
    <!-- attributes_race -->

    <!-- attributes_travel -->
    <div class="feature jbm-300">

      <my-attribute
        v-for="(val, name) in MY.qualities"
        :key="name"
        :title="name"
        :type="`${name}_details`"
        :numb="getRaceObj()[name]"
        feet
        :icon="name"
      ></my-attribute>
      
      
      
      
      
      <!-- <my-attribute
        v-for="item in attributes_travel"
        :key="item"
        :title="item.name"
        :type="item.type"
        :numb="item.value"
        feet
        :icon="item.icon"
      ></my-attribute> -->
    </div>

    <div class="gap"></div>
    <!-- attributes_travel -->

    <!-- inventory -->

    <div class="inventory">
      <my-inventory
        v-for="item in inventory"
        :key="item"
        :title="item.name"
        :item="item.type"
      >
      </my-inventory>
    </div>

    <div class="gap"></div>
    <!-- inventory -->

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
    <!-- fines -->

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
import MY from "@/assets/catalog/MY.js";
import default_MY from "@/assets/catalog/default_MY.js";

import color from "@/assets/catalog/base_data/colors.js";
import genders from "@/assets/catalog/base_data/genders.js";
import race from "@/assets/catalog/base_data/races.js";
import clas from "@/assets/catalog/base_data/classes.js";
import past from "@/assets/catalog/base_data/pasts.js";

import Genders from "@/components/Genders.vue";
import AgeWeight from "@/components/AgeWeight.vue";

export default {
  name: "App",
  components: {
    Genders,
    AgeWeight,
  },
  data() {
    return {
      MY: MY,
      default_MY: default_MY,

      genders: genders,
      color: color,
      race: race,
      clas: clas,
      past: past,

      shown_ethnos: false,
      shown_gender: false,
      shown_skin_color: false,
      shown_eyes_color: false,
      shown_hair_color: false,
      shown_age: false,
      shown_growth: false,
      shown_weight: false,
      shown_characteristics: false,
      shown_skills: false,
      shown_languages: false,

      shown_home: true,

      skin_hower: null,
      hair_hower: null,
      eyes_hower: null,


      active: false,

      age_arr: [0, 20, 'x', 'x', 75, 'x', 'x', 130, 150],
      weight_arr: [0, 'x', 'x', 15, 20],

      age: 34,
      weight: 15,

      ethnos_select: {
        name: "Коренастый",
        rare: "",
      },

      attributes_main: [
        {
          name: "сила",
          type: "базовая",
          value: 0,
          icon: "strength",
          base: false,
        },
        {
          name: "ловкость",
          type: "базовая",
          value: 2,
          icon: "dexterity",
          base: true,
        },
        {
          name: "телосложение",
          type: "базовое",
          value: 0,
          icon: "constitution",
          base: false,
        },
        {
          name: "интелект",
          type: "базовый",
          value: 0,
          icon: "intelligence",
          base: false,
        },
        {
          name: "мудрость",
          type: "базовая",
          value: 0,
          icon: "wisdom",
          base: false,
        },
        {
          name: "харизма",
          type: "базовая",
          value: 0,
          icon: "charisma",
          base: false,
        },
      ],


      attributes_race: [
        {
          name: "Акробатика",
          value: 2,
          icon: "dexterity",
        },
        {
          name: "Анализ",
          value: 2,
          icon: "intelligence",
        },
      ],

      attributes_travel: [
        {
          name: "скорость",
          type: "пешком",
          value: 25,
          icon: "speed",
          base: true,
        },
        {
          name: "Анализ",
          value: 0,
          icon: "vision_night",
        },
      ],

      inventory: [
        {
          name: "оружие",
          type: null,
        },
        {
          name: "доспехи",
          type: null,
        },
        {
          name: "инструменты",
          type: null,
        },
        {
          name: "языки",
          type: "Всеобщий, Полуросликов",
        },
      ],

      fines: [
        {
          effect: "positive",
          icon: "plus",
          title: "Переброс",
          description: 'любого кубика при "1"',
        },
        {
          effect: "positive",
          icon: "plus",
          title: "Преимущество",
          description: "против Испуга",
        },
        {
          effect: "positive",
          icon: "corner",
          title: "Проскальзывание",
          description: "Проскальзывание среди существ выше среднего",
        },
      ],

      ethnos_card: [
        {
          name: "Коренастый",
          attributes_main: [
            {
              name: "телосложение",
              type: "базовое",
              value: 1,
              icon: "constitution",
              base: false,
            },
          ],
          fines: [
            {
              effect: "positive",
              icon: "plus",
              title: "Преимущество",
              description: "против Яда",
            },
            {
              effect: "positive",
              icon: "plus",
              title: "Сопротивление",
              description: "урону Ядом",
            },
          ],
          img: "@/assets/img/characters/halfling/ethhnos/image.png",
          story:
            "Из-за того, что их народ имеет закрытую, клановую культуру, недоверчивую ко всему чужому, призрачные полурослики в качестве искателей приключений встречаются редко.",
        },
        {
          name: "Легконогий",
          attributes_main: [
            {
              name: "харизма",
              type: "базовая",
              value: 1,
              icon: "charisma",
              base: false,
            },
          ],
          fines: [
            {
              effect: "positive",
              icon: "corner",
              title: "Скрытность",
              description: "за существом выше среднего",
            },
          ],
          img: "@/assets/img/characters/halfling/ethhnos/image.png",
          story:
            "Умеют отлично скрываться, в том числе используя других существ как укрытие. Они приветливы и хорошо ладят с другими. В мире Забытых Королевств легконогие являются самой распространённой ветвью полуросликов. Более других склонны к перемене мест, и часто селятся по соседству с другими народами, или ведут кочевую жизнь. В мире Серого Ястреба таких полуросликов называют мохноногими или великанчиками.",
        },
        {
          name: "Призрачный",
          attributes_main: [
            {
              name: "мудрость",
              type: "базовая",
              value: 1,
              icon: "wisdom",
              base: false,
            },
          ],
          fines: [
            {
              effect: "positive",
              icon: "corner",
              title: "Телепатия",
              description: "на известных языках",
            },
          ],
          img: "@/assets/img/characters/halfling/ethhnos/image.png",
          story:
            "Умеют отлично скрываться, в том числе используя других существ как укрытие. Они приветливы и хорошо ладят с другими. В мире Забытых Королевств легконогие являются самой распространённой ветвью полуросликов. Более других склонны к перемене мест, и часто селятся по соседству с другими народами, или ведут кочевую жизнь. В мире Серого Ястреба таких полуросликов называют мохноногими или великанчиками.",
          rare: "Спросите своего Мастера, можете ли Вы играть представителем этого этноса.",
        },
      ],
    };
  },
  methods: {
    getGenderName() {
      if (this.MY.gender.feel === this.genders.feel.cisgender) {
        return this.t(this.MY.gender.phisiological);
      } else {
        return `${this.t(this.MY.gender.phisiological)} *`;
      }
    },

    ethnosName(name, rare) {
      this.ethnos_select.name = name;
      this.ethnos_select.rare = rare;
    },

    goTo(route) {
      this.$router.push(route);
    },

    close() {
      this.shown_ethnos = false;
      this.shown_gender = false;
      this.shown_skin_color = false;
      this.shown_eyes_color = false;
      this.shown_hair_color = false;
      this.shown_age = false;
      this.shown_growth = false;
      this.shown_weight = false;
      this.shown_characteristics = false;
      this.shown_skills = false;
      this.shown_languages = false;
    },

    show(name) {
      if (this[name] === false) {
      this.close();
      this[name] = true;
      this.shown_home = false;
      } else {
      this.close();
      this.shown_home = true;
      }
    },

    showHome() {
      this.close();
      this.shown_home = true;
    },

    showMY() {
      console.log(this.MY);
    },

    choiceColor(name, obj, i, j) {
      this.MY.color[name] = obj[i][j];
    },

    hoverStop(name) {
      this[name] = null;
    },

    hoverColor(name, obj, i, j) {
      this[name] = obj[i][j];
    },

    hideRuler() {
      if (
        this.shown_skin_color ||
        this.shown_eyes_color ||
        this.shown_hair_color
      ) {
        return false;
      } else {
        return true;
      }
    },

    getCharImg(vale, hower) {
      let race = this.MY.race;
      let ethnos = this.MY.ethnos;
      let phisiological = this.MY.gender.phisiological;
      let img = hower ? hower.img : this.MY.color[vale].img;
      let sex;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
      }
      return require(`@/assets/img/characters/${race}/${ethnos}/${sex}/${vale}/${img}.png`);
    },

    calcImg() {
      if (
        this.shown_skin_color ||
        this.shown_eyes_color ||
        this.shown_hair_color
      ) {
        return `100%`;
      } else {
        return `calc(100% / 700 * (300 + 3.2 * 10))`;
      }
    },

    getNumbStats(name) {
      let i = 0;
      // let j = 0;
      this.getRaceObj()[name] == null ? i = 0 : i = this.getRaceObj()[name];
      // this.getethnosObj()[name] == null ? j = 0 : j = this.getethnosObj()[name];
      console.log()
      return i;
    }, 

    getBaseQualities() {
      let arr = [];
      let qualities = Object.keys(this.MY.qualities);
      for (let kay in this.MY.qualities) {
        if (kay in this.race[this.MY.race]) {
          arr.push(kay);
        }
        console.log()
      }
      return arr;
    }, 

    getRaceObj() {
      return this.race[this.MY.race];
    }, 
    getethnosObj() {
      return this.race[this.MY.race].settings.ethnos[this.MY.ethnos];
    }, 
  },

  computed: {
    // getColor() {
    //   let arr = [];
    //   for (let i in this.color) {
    //     for (let j in this.color[i]) {
    //       arr.push(this.color[i][j]);
    //     }
    //   }
    //   return arr;
    // },
  },

  created() {
    this.default_MY.race = Object.keys(this.race)[0]
    this.default_MY.ethnos = Object.keys(this.race[this.default_MY.race].settings.ethnos)[0];
    this.default_MY.color = this.race[this.default_MY.race].settings.ethnos[this.default_MY.ethnos].settings.color;
    this.MY = this.default_MY;
    console.log(this.race[this.MY.race].proficiencies.languages[0].name)
    // console.log(this.race.halfling.settings.ethnos);
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
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
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

.ethnos_attributes {
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 0 26px 16px;
}

.ethnos_cards_menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px !important;
}

/* ---------------------characters----------------------*/

.represent {
  padding: 32px;
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;
}

.character {
  width: 100%;
  height: 100%;
  position: relative;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.character img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.active_eyes {
  align-self: flex-start;
  height: 200%;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.active_skin {
  align-self: flex-start;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.size {
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
  height: 100%;
  background-color: transparent;
  position: absolute;
  right: 0;
  padding-top: 36px;
  bottom: 32px;
}

.skale {
  height: 100%;
  display: flex;
}

.division_numb_down {
  margin-right: 12px;
  margin-bottom: -4px;
  align-self: flex-end;
}

.division_numb_top {
  margin-right: 12px;
  margin-top: -4px;
}

.skale_division {
  width: 1px;
  /* min-height: 96px; */
  flex: 1 1 auto;
}

.skale_division_top {
  width: 1px;
  height: 32px;
  flex: 1 1 auto;
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
  height: calc(100% / 30 * 10);
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

.gap {
  width: 362px;
  height: 1px;
  margin: 26px 0;
  background: rgba(255, 255, 255, 0.2);
}

.feature {
  color: rgba(255, 255, 255, 0.2);
  width: 362px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.inventory {
  color: rgba(255, 255, 255, 0.2);
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fines {
  max-width: 362px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

.colors_box {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.colors_row {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* -------------slider-grwwth------------------- */

.slider_growth_back {
  width: 344px;
  height: calc(100% / 700 * 396);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.slider_growth {
  width: 100%;
  height: calc(100% / 396 * (300 + 3.2 * 10));
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slider_knob {
  width: 96px;
  height: 6px;
  background: #0e1518;
  opacity: 0.2;
  border-radius: 4px;
  margin: 0 auto;
  cursor: ns-resize;
}

.slider_value {
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
}

.flex_options {
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.size_growth {
  width: 42px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  gap: 4px;
  background-color: transparent;
  height: 100%;
  padding-top: 4px;
}

.skale {
  height: 100%;
  display: flex;
}

.skale_numb_down {
  text-align: end;
  margin-bottom: -4px;
  align-self: flex-end;
  flex: 1 1 auto;
}

.skale_numb_top {
  text-align: end;
  margin-top: -4px;
  align-self: flex-start;
  flex: 1 1 auto;
}


.slider_age_back {
  width: 344px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.slider_age {
  width: 100%;
  height: calc(100% / 150 * 34);
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.size_age {
  width: 42px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  text-align: end;
  background-color: transparent;
  height: 100%;
}


.slider_weight_back {
  width: 344px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.slider_weight {
  width: 100%;
  height: calc(100% / 20 * 18);
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}





/* -------------slider-grwwth------------------- */
</style>
