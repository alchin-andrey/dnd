<template>
  <div class="sidebar_left">
    <div class="chapter">
      <div class="main_chapter">
        <div class="logo" @click="showMY()">
          <img alt="logo" src="@/assets/img/logo.svg" />
        </div>

        <my-slider numb="01" :title="t('race')" :arr="t(MY.race)"> </my-slider>

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
            title="Возраст"
            value="34"
            unit="г"
            note="Взрослый"
          ></my-controller>
          <my-controller
            @click="show('shown_growth')"
            :active="shown_growth"
            title="Рост"
            value="100"
            unit="см"
            note="Маленький"
          ></my-controller>
          <my-controller
            @click="show('shown_weight')"
            :active="shown_weight"
            title="Вес"
            value="18"
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
        <div class="colors_box jbm-300">
          <!-- <my-color-block
            v-for="color in getColorsArr"
            :key="color"
            @click="choiceSkinColor(color)"
            :color="color.hex"
            :active_link="color.name"
            :select_link="MY.color.skin.name"
          >
          </my-color-block> -->

          <div v-for="(val, i) in color" :key="i" class="colors_row"
          @mouseleave="hoverStop('skin_hower')">
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
        <div class="colors_box jbm-300">
          <!-- <my-color-block
            v-for="color in getColorsArr"
            :key="color"
            @click="choiceEyesColor(color)"
            :color="color.hex"
            :active_link="color.name"
            :select_link="MY.color.eyes.name"
          >
          </my-color-block> -->

          <div v-for="(val, i) in color" :key="i" class="colors_row"
          @mouseleave="hoverStop('eyes_hower')">
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
      <my-selection-card 
      passive 
      colors_card 
>
        <div class="colors_box jbm-300">
          <!-- <my-color-block
            v-for="color in getColorsArr"
            :key="color"
            @click="choiceHairColor(color)"
            :color="color.hex"
            :active_link="color.name"
            :select_link="MY.color.hair.name"
          >
          </my-color-block> -->

          <div v-for="(val, i) in color" :key="i" class="colors_row" @mouseleave="hoverStop('hair_hower')">
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
      <div class="jbm-300">Возраст</div>
    </my-selection-box>
    <!-- Возраст -->

    <!-- Рост -->
    <my-selection-box :shown="shown_growth">
      <div class="jbm-300">Рост</div>
    </my-selection-box>
    <!-- Рост -->

    <!-- Вес -->
    <my-selection-box :shown="shown_weight">
      <div class="jbm-300">Вес</div>
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
      :class="{ active_eyes: shown_eyes_color || shown_hair_color }"
      :style="{
        height: `${calcImg()}`,
        'background-image': `${getCharImg('hair', hair_hower)}, ${getCharImg(
          'eyes', eyes_hower)}, ${getCharImg('skin', skin_hower)}`,
          'transition-property': 'all',
          'transition-duration': '0s',
          'transition-delay': '.05s',
          'transition-timing-function': 'ease-in',
      }"
    ></div>

    <div class="size" v-if="hideRuler()">
      <div class="skale_division_top division_off">
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
  </div>

  <!-- sidebar_right -->
  <div v-if="shown_home" class="sidebar_right">
    <!-- attributes_main -->
    <div class="feature jbm-300">
      <my-attribute
        v-for="item in attributes_main"
        :key="item"
        :title="item.name"
        :type="item.type"
        plus
        :numb="item.value"
        :icon="item.icon"
      >
      </my-attribute>
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
        v-for="item in attributes_travel"
        :key="item"
        :title="item.name"
        :type="item.type"
        :numb="item.value"
        feet
        :icon="item.icon"
      ></my-attribute>
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

export default {
  name: "App",
  components: {
    Genders,
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
          icon: "agility",
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
          icon: "intellect",
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

      // attributes_main: {
      //   strength: 0,
      //   agility: 2,
      //   constitution: 0,
      //   intellect: 0,
      //   wisdom: 1,
      //   charisma: 0,
      // },

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
          icon: "dark_vision",
        },
      ],

      // attributes_travel: {
      //   speed: 25,
      //   dark_vision: 120,
      // },

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

      // inventory: {
      //   weapon: "Боевые топоры, Ручные топоры, Легкие молоты, Боевые молоты",
      //   armor: null,
      //   tools: "Кузнеца, Пивовара, Каменщика",
      //   languages: "Всеобщий, Дварфийский, Подземный",
      // },

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
      this.close();
      this[name] = true;
      this.shown_home = false;
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
      return `url(${require(`@/assets/img/characters/${race}/${ethnos}/${sex}/${vale}/${img}.png`)})`;
    },

    calcImg() {
      if (this.shown_skin_color ||
        this.shown_eyes_color ||
        this.shown_hair_color) {
        return `100%`;
      } else {
        return `calc((100% - 40px) / 696 * 300 + (((100% - 64px) * 96 / 30 / 7 / 96) * 30))`;
      }
    },
  },
  computed: {
    // getColorsArr() {
    //   let arr = [];
    //   for (let i in this.color) {
    //     for (let j in this.color[i]) {
    //       arr.push(this.color[i][j]);
    //     }
    //   }
    //   return arr;
    // },

    getColor() {
      let arr = [];
      for (let i in this.color) {
        for (let j in this.color[i]) {
          arr.push(this.color[i][j]);
        }
      }
      return arr;
    },
  },

  created() {
    // this.default_MY.race = this.race.halfling
    // this.default_MY.ethnos = this.race.halfling.settings.ethnos.lightfoot
    this.MY = this.default_MY;
    console.log();
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
  align-items: flex-end;
  position: relative;
  height: 100%;
}

.character {
  flex: 1 1 auto;
  width: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
}

.active_eyes {
  align-items: flex-start;
  background-position: top;
  background-size: auto 200%;
}

.size {
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
  height: 100%;
  background-color: transparent;
}

.skale {
  height: 100%;
  display: flex;
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
  /* min-height: 96px; */
  flex: 1 1 auto;
}

.skale_division_top {
  width: 1px;
  height: 36px;
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
  height: calc((100% * 96 / 30 / 96) * 30);
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

</style>
