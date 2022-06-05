<template>
  <div class="sidebar_left">
    <div class="chapter">
      <div class="main_chapter">
        <div class="logo" @click="showRace()">
          <img alt="logo" src="@/assets/img/logo.svg" />
        </div>

        <my-slider :numb="t(genders.phisiological.male)" :title="t('race')" :arr="t($store.state.races.halfling.name)"></my-slider>

        <div class="delimiter"></div>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_ethnos')"
            :active="shown_ethnos"
            title="Этнос"
            :type="ethnos_select.name"
            :rare="ethnos_select.rare"
          ></my-selection>
          <my-selection
            @click="show('shown_gender')"
            :active="shown_gender"
            title="Пол"
            :type="`${gender_select.phisiological}, ${gender_select.feel}`"
          ></my-selection>
          <my-selection
            @click="show('shown_skin_color')"
            :active="shown_skin_color"
            title="Цвет кожи"
            type="Белый"
          ></my-selection>
          <my-selection
            @click="show('shown_eye_color')"
            :active="shown_eye_color"
            title="Цвет глаз"
            type="Зеленый"
          ></my-selection>
          <my-selection
            @click="show('shown_hair_color')"
            :active="shown_hair_color"
            title="Цвет волос"
            type="Русый"
          ></my-selection>
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
          ></my-controller>
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
          ></my-selection>
          <my-selection
            @click="show('shown_languages')"
            :active="shown_languages"
            title="Языки"
            type="Акван"
          ></my-selection>
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
      <my-selection-card passive>
        <div class="gender_card_title jbm-300">Физиологический</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[0].name)"
              :img="gender.phisiological[0].name"
              :active_link="gender.phisiological[0].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[1].name)"
              :img="gender.phisiological[1].name"
              :active_link="gender.phisiological[1].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[2].name)"
              :img="gender.phisiological[2].name"
              :active_link="gender.phisiological[2].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-2">
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[3].name)"
              :img="gender.phisiological[3].name"
              :active_link="gender.phisiological[3].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[4].name)"
              :img="gender.phisiological[4].name"
              :active_link="gender.phisiological[4].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-3">
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[5].name)"
              :img="gender.phisiological[5].name"
              :active_link="gender.phisiological[5].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[6].name)"
              :img="gender.phisiological[6].name"
              :active_link="gender.phisiological[6].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
            <my-button-gender
              @click="getPhisiologicalName(gender.phisiological[7].name)"
              :img="gender.phisiological[7].name"
              :active_link="gender.phisiological[7].name"
              :select_link="gender_select.phisiological"
            >
            </my-button-gender>
          </div>
        </div>
        <my-card-text
          :title="gender_select.phisiological"
          text="Самоощущение вашего персонажа полностью соответствует его
              физиологическому гендеру."
        >
        </my-card-text>
      </my-selection-card>
      <my-selection-card passive>
        <div class="gender_card_title jbm-300">Cамощущение</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <my-button-gender
              @click="getFeelName(gender.feel[0].name)"
              :img="gender.feel[0].name"
              :active_link="gender.feel[0].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[1].name)"
              :img="gender.feel[1].name"
              :active_link="gender.feel[1].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[2].name)"
              :img="gender.feel[2].name"
              :active_link="gender.feel[2].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-2">
            <my-button-gender
              @click="getFeelName(gender.feel[3].name)"
              :img="gender.feel[3].name"
              :active_link="gender.feel[3].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[4].name)"
              :img="gender.feel[4].name"
              :active_link="gender.feel[4].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-1">
            <my-button-gender
              @click="getFeelName(gender.feel[5].name)"
              :img="gender.feel[5].name"
              :active_link="gender.feel[5].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-2">
            <my-button-gender
              @click="getFeelName(gender.feel[6].name)"
              :img="gender.feel[6].name"
              :active_link="gender.feel[6].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[7].name)"
              :img="gender.feel[7].name"
              :active_link="gender.feel[7].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
          </div>

          <div class="gender__flex-3">
            <my-button-gender
              @click="getFeelName(gender.feel[8].name)"
              :img="gender.feel[8].name"
              :active_link="gender.feel[8].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[9].name)"
              :img="gender.feel[9].name"
              :active_link="gender.feel[9].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
            <my-button-gender
              @click="getFeelName(gender.feel[10].name)"
              :img="gender.feel[10].name"
              :active_link="gender.feel[10].name"
              :select_link="gender_select.feel"
            >
            </my-button-gender>
          </div>
        </div>
        <my-card-text
          :title="gender_select.feel"
          text="Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру."
        >
        </my-card-text>
      </my-selection-card>
      <my-selection-card
        v-if="gender_select.feel !== gender.feel[5].name"
        passive
      >
        <div class="gender_card_title jbm-300">Внешний вид</div>
        <div class="gender__flex">
          <div class="gender__flex-3">
            <my-button-gender
              @click="getLookName(gender.look[0].name)"
              :img="gender.look[0].name"
              :active_link="gender.look[0].name"
              :select_link="gender_select.look"
            ></my-button-gender>
            <my-button-gender
              @click="getLookName(gender.look[1].name)"
              :img="gender.look[1].name"
              :active_link="gender.look[1].name"
              :select_link="gender_select.look"
            ></my-button-gender>
            <my-button-gender
              @click="getLookName(gender.look[2].name)"
              :img="gender.look[2].name"
              :active_link="gender.look[2].name"
              :select_link="gender_select.look"
            ></my-button-gender>
          </div>
        </div>
        <my-card-text title="Соответствует физиологическому полу">
        </my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="shown_skin_color">
      <div class="jbm-300">Цвет кожи</div>
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="shown_eye_color">
      <div class="jbm-300">Цвет глаз</div>
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="shown_hair_color">
      <div class="jbm-300">Цвет волос</div>
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
    <div class="character jbm-300"></div>

    <div class="size">
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
import { color } from "@/assets/catalog/base_data/colors.js";

import { races } from "@/assets/catalog/base_data/races.js";
import { classes, subclasses } from "@/assets/catalog/base_data/classes.js";
import { pasts } from "@/assets/catalog/base_data/pasts.js";

import { MY } from "@/assets/catalog/MY.js";

import genders from "@/assets/catalog/base_data/genders.js";

export default {
  components: {
    color,
    races,
    classes,
    subclasses,
    pasts,
    MY,
  },
  data() {
    return {
      genders: genders,


      shown_ethnos: false,
      shown_gender: false,
      shown_skin_color: false,
      shown_eye_color: false,
      shown_hair_color: false,
      shown_age: false,
      shown_growth: false,
      shown_weight: false,
      shown_characteristics: false,
      shown_skills: false,
      shown_languages: false,

      shown_home: true,

      active: false,

      ethnos_select: {
        name: "Коренастый",
        rare: "",
      },

      gender_select: {
        phisiological: "male",
        feel: "cisgender",
        look: "as_phisiological",
      },

      gender: {
        phisiological: [
          {
            name: "male",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },

          {
            name: "intersex",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "female",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "demiboy",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "demigirl",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "neutral_gender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "unstable",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "other_gender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
        ],

        feel: [
          {
            name: "androgin",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "pangender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "gender_fluid",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "demigender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "bigender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "cisgender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "undecided",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "queer",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "neutral_gender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "transsexual",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
          {
            name: "other_gender",
            text: "Самоощущение вашего персонажа полностью соответствует его физиологическому гендеру.",
          },
        ],
        look: [
          {
            name: "as_phisiological",
            text: "Соответствует физиологическому полу",
          },
          {
            name: "as_feel",
            text: "Соответствует физиологическому полу",
          },
          {
            name: "as_other_gender",
            text: "Соответствует физиологическому полу",
          },
        ],
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
    ethnosName(name, rare) {
      this.ethnos_select.name = name;
      this.ethnos_select.rare = rare;
    },

    getPhisiologicalName(name) {
      this.gender_select.phisiological = name;
    },

    changeLookName(name) {
      if (name === this.gender.feel[5].name) {
        return (this.gender_select.look = this.gender.look[0].name);
      } else {
        return (this.gender_select.look = this.gender_select.look);
      }
    },

    getFeelName(name) {
      this.changeLookName(name);
      this.gender_select.feel = name;
    },

    getLookName(name) {
      this.gender_select.look = name;
    },

    goTo(route) {
      this.$router.push(route);
    },

    close() {
      this.shown_ethnos = false;
      this.shown_gender = false;
      this.shown_skin_color = false;
      this.shown_eye_color = false;
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

.gender_card {
  padding: 16px;
  width: 394px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
}

.gender_card_title {
  color: rgba(255, 255, 255, 0.2);
}

.gender_item {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* ---------------------characters----------------------*/

.represent {
  padding-bottom: 32px;
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  position: relative;
  height: 100%;
}

.character {
  flex: 1 1 auto;
  width: 250px;
  height: calc(
    (100% - 40px) / 696 * 396 - (((100% - 64px) * 96 / 30 / 7 / 96) * 0)
  );
  background: url("@/assets/img/characters/halfling/halfling_hair_0_6_1.png")
      center/auto 100% no-repeat,
    url("@/assets/img/characters/halfling/halfling_eyes_8_2_1.png") center/auto
      100% no-repeat,
    url("@/assets/img/characters/halfling/halfling_skin_2_0_1.png") center/auto
      100% no-repeat;
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

.gender__flex {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gender__flex-3 {
  display: flex;
  justify-content: space-between;
}

.gender__flex-2 {
  display: flex;
  justify-content: space-evenly;
}

.gender__flex-1 {
  display: flex;
  justify-content: center;
}
</style>
