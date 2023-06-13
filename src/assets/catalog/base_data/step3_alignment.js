export default {
  back: {
    name: "bayraktar",

    settings: [
      {
        type: "alignment",
        position: 2,
      },
      {
        type: "custom",
        position: 2,
        name: "main_feature",
        select: 1,
        list: [
          { name: "feature_taler" }, // рассказчик
          { name: "feature_gossip" }, // сплетник
          { name: "feature_flatterer" }, // льстец
          { name: "feature_witty" }, // остроумний
          { name: "feature_boastful" }, // хвастливьій
          { name: "feature_sarcastic" }, // саркастичний
          { name: "feature_vulgar" }, // пошлий
          { name: "feature_obscene" }, // похабний
          { name: "feature_toxic" }, // токсичний
          { name: "feature_coldblooded" }, // хладнокровний
          { name: "feature_schemer" }, // махинатор
          { name: "feature_conspirator" }, // конспиролог
          { name: "feature_fatalist" }, // фаталист
          { name: "feature_philosopher" }, // философ
          { name: "feature_erudite" }, // єрудированний
          { name: "feature_wise" }, // мудрий
          { name: "feature_industrious" }, // трудолюбивий
          { name: "feature_thoughtful" }, // задумчивий
          { name: "feature_silent" }, // молчаливий
          { name: "feature_closed" }, // замкнутьій
          { name: "feature_unsociable" }, // нелюдимий
          { name: "feature_injured" }, // травмированний
          { name: "feature_anxious" }, // тревожний
          { name: "feature_incredulous" }, // недоверчивий
          { name: "feature_vindictive" }, // злопамятний
          { name: "feature_vengeful" }, // мстительний
          { name: "feature_irascible" }, // вспильчивий
          { name: "feature_harmful" }, // вредний
          { name: "feature_cunning" }, // хитрий
          { name: "feature_approach" }, // підступний
          { name: "feature_cruel" }, // жорстокий
          { name: "feature_pitiless" }, // безжальний
          { name: "feature_rectilinear" }, // прямолинейний
          { name: "feature_rude" }, // грубий
          { name: "feature_high" }, // високомерний
          { name: "feature_haughty" }, // надменний
          { name: "feature_snob" }, // сноб
          { name: "feature_perfectionist" }, // перфекционист
          { name: "feature_neat" }, // чистюля
          { name: "feature_polite" }, // вежливий
          { name: "feature_peaceful" }, // миролюбний
          { name: "feature_generous" }, // щедрий
          { name: "feature_compassionate" }, // сердобольний
          { name: "feature_inquisitive" }, // любопитний
          { name: "feature_curious" }, // любознательний
          { name: "feature_serene" }, // безмятежний
          { name: "feature_clumsy" }, // неуклюжий
          { name: "feature_careless" }, // небрежний
          { name: "feature_fickle" }, // переменчивий
          { name: "feature_active" }, // активний
          { name: "feature_stubborn" }, // упорний
          { name: "feature_braver" }, // завзятий
          { name: "feature_competitive" }, // соревновательний
          { name: "feature_brave" }, // храбрий
          { name: "feature_adventurer" }, // авантюрист
          { name: "feature_rebel" }, // бунтарь
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "ideals",
        select: 1,
        list: [
          { name: "ideal_justice" }, // справедливість
          { name: "ideal_equality" }, // рівність
          { name: "ideal_independence" }, // незалежність
          { name: "ideal_liberty" }, // свобода
          { name: "ideal_freedom" }, // воля
          { name: "ideal_respect" }, // повага
          { name: "ideal_society" }, // суспільство
          { name: "ideal_thrive" }, // процвітання
          { name: "ideal_development" }, // розвиток
          { name: "ideal_knowledge" }, // знання
          { name: "ideal_logics" }, // логіка
          { name: "ideal_truth" }, // правда
          { name: "ideal_creativity" }, // творчість
          { name: "ideal_beauty" }, // краса
          { name: "ideal_nature" }, // природа
          { name: "ideal_harmony" }, // лагода
          { name: "ideal_family" }, // сімʼя
          { name: "ideal_friendship" }, // дружба
          { name: "ideal_team" }, // команда
          { name: "ideal_homeland" }, // батьківщина
          { name: "ideal_altruism" }, // альтруїзм
          { name: "ideal_mercy" }, // милосердя
          { name: "ideal_destiry" }, // доля
          { name: "ideal_faith" }, // віра
          { name: "ideal_traditions" }, // традиції
          { name: "ideal_duty" }, // обовʼязок
          { name: "ideal_honor" }, // честь
          { name: "ideal_revenge" }, // помста
          { name: "ideal_strength" }, // сила
          { name: "ideal_authority" }, // авторітет
          { name: "ideal_power" }, // влада
          { name: "ideal_glory" }, // слава
          { name: "ideal_career" }, // карʼєра
          { name: "ideal_melancholy" }, // користь
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "commitment",
        select: 1,
        list: [
          { name: "attachment_tool" }, // інструмент
          { name: "attachment_talisman" }, // талісман
          { name: "attachment_thing" }, // памʼятна річ
          { name: "attachment_pet" }, // памʼятна річ
          { name: "attachment_vehicle" }, // корабель або кінь або брічка
          { name: "attachment_corner" }, // свій куточок (майстерня)
          { name: "attachment_childhood" }, // дитинство
          { name: "attachment_school" }, // школа
          { name: "attachment_offender" }, // кривдник
          { name: "attachment_loss" }, // втрата
          { name: "attachment_savior" }, // рятівник
          { name: "attachment_leader" }, // лідер
          { name: "attachment_mentor" }, // наставник
          { name: "attachment_legacy" }, // спадок
          { name: "attachment_child" }, // дитина
          { name: "attachment_family" }, // сімʼя
          { name: "attachment_home" }, // дім
          { name: "attachment_bonds" }, // звʼязки
          { name: "attachment_friends" }, // друзі
          { name: "attachment_team" }, // команда
          { name: "attachment_organization" }, // організація
          { name: "attachment_homeland" }, // батьківщина
          { name: "attachment_nature" }, // природа
          { name: "attachment_love" }, // кохання
          { name: "attachment_gift" }, // подарунок
          { name: "attachment_fans" }, // прихильники
          { name: "attachment_students" }, // учні
          { name: "attachment_product" }, // плід праці
          { name: "attachment_title" }, // титул
          { name: "attachment_mistery" }, // загадка
          { name: "attachment_idol" }, // кумир
          { name: "attachment_artifact" }, // артефакт
          { name: "attachment_structure" }, // сакральна споруда
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "secret",
        select: 1,
        list: [
          { name: "secret_mistake" }, // жахлива помилка
          { name: "secret_setup" }, // підстава
          { name: "secret_crime" }, // злочин
          { name: "secret_trait" }, // зрада
          { name: "secret_owe" }, // борг
          { name: "secret_shame" }, // ганьба
          { name: "secret_exile" }, // вигнання
          { name: "secret_follower" }, // переслідувач
          { name: "secret_sick" }, // хвороба
          { name: "secret_pact" }, // угода
          { name: "secret_target" }, // мішень
          { name: "secret_plans" }, // коварні плани
          { name: "secret_prophesy" }, // пророцтво
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "weakness",
        select: 1,
        list: [
          { name: "weakness_greed" }, // жадность
          { name: "weakness_cleptomany" }, // жадность
          { name: "weakness_lust" }, // похоть
          { name: "weakness_passion" }, // азарт
          { name: "weakness_dependance" }, // залежність
          { name: "weakness_spender" }, // транжира
          { name: "weakness_unreliability" }, // ненадежность
          { name: "weakness_cowardice" }, // трусость
          { name: "weakness_fobia" }, // фобія
          { name: "weakness_submissiveness" }, // покорність
          { name: "weakness_envy" }, // заздрість
          { name: "weakness_wrath" }, // гнів
          { name: "weakness_audacity" }, // дерзость
          { name: "weakness_uncompromise" }, // бескомпромісний
          { name: "weakness_pride" }, // гординя
          { name: "weakness_laziness" }, // лень
          { name: "weakness_belief" }, // доверчивость
          { name: "weakness_poormemory" }, // забивчівость
          { name: "weakness_carelessness" }, // беспечность
          { name: "weakness_recklessness" }, // безрассудство
          { name: "weakness_obsession" }, // одержимость
        ],
      },
    ],
  },
};
