import * as races from './races.js';

export const langs = {
  common: "суспільна",

  common_details: "Торгова мова людей. Майже всі розумні істоти можуть розуміти і говорити Суспільною мовою, хоча вони і можуть вдавати, що не розуміють його.",

  halfling: "напівросликова",

  halfling_details: "Луйрік. Не є секретним, але напіврослики не поспішають ділитися ним з іншими. Пишуть вони мало, і майже не створили власної літератури, але усні перекази серед напівросликів дуже поширені. Використовує символи із Суспільного.",

  gnome: "гномська",

  gnome_details: "Гнім. Добре відома завдяки технічним трактатам та каталогам знань про навколишній світ. Люди ботаніки, натуралісти та інженери, дуже часто вивчають гномську мову, для того щоб потім можна було прочитати безліч приголомшливих книг технічних тематик (механіка, самоцвіти), де гноми досягли високого рівня розвитку.",

  dwarf: "дворфська",

  dwarf_details: "Детек. Складається з твердих приголосних і гортанних звуків, і цей акцент буде присутній у будь-якій мові, якою дворф говоритиме. Літерами є руни. У літературі зібрано велику історію королівств дворфів та їх війн протягом тисячоліть.",

  tiefling: "інфернальна",

  tiefling_details: "Мова дияволів, якою користуються тифлінґи. Діалект божественного.",

  elf: "ельфійська",

  elf_details: "Еспуар. Плинна, з витонченими інтонаціями та складною граматикою. Ельфійська література багата та різноманітна, а вірші та пісні відомі серед представників інших рас. Багато бардів вивчають ельфійську мову, щоб додати пісні до свого репертуару. Самі ельфи іноді називають її Істинна Мова.",

  orc: "оркська",

  orc_details: "Дарактан. Орки, що не мають свого власного алфавіту, використовують символи дворфів лише в окремих випадках, щоб написати щось на орочій. Дуже часто писемність орків нагадує якісь грубі написи.",

  dragon: "драконова",

  dragon_details: "Драконик. Вважається однією із найстаріших і часто використовується під час вивчення магії. Ця мова звучить грубо для більшості інших істот, і містить багато твердих приголосних і шиплячих звуків.",

  giant: "велетова",

  giant_details: "Йотун. Мова, що об'єднує велетнів, є одним із небагатьох залишків від їхньої колись великої імперії. За можливості діалектів, велетні різних типів можуть розуміти один одного." +
  "\n\nБудь-який не-велетень, який вивчив мову велетнів, може розмовляти з усіма типами велетнів, але велетням іноді важко почути тихі голоси істот людського розміру, а деякі голосні звуки практично неможливо відтворити без легких розміром з пивні бочки.",

  goblin: "ґоблінська",
  goblin_details: "Гукляк. Гортанна, складається з рохкання та схлипувань. Єдина з основних мов, яка не має власного письма, що відображає грубу та варварську природу ґоблінської раси.",

  undercommon: "підтемна",
  undercommon_details: "Використовується глибинними гномами, темними ельфами та іншими розумними підземними жителями.",

  sylvan: "сильван",
  sylvan_details: "Мова всіх дріад, піксі, добрих та нейтральних фей, тримається в секреті від більшості не-фей. Використовує ельфійський алфавіт.",

  animal: "звірьків",
  animal_details: "Таємне знання лісових гномів, що дозволяє їм комунікувати зі звірятами, отримувати та передавати попередження про небезпеку та інші найпростіші сигнали.",

  druid: "друїдська",
  druid_details: "Друедан. Таємна мова друїдів. Нею можна говорити та залишати таємні послання. Ті, хто знають цю мову, автоматично помічають ці послання. Інші помічають присутність послання при успішній перевірці на Сприйняття (складність 15), але без допомоги магії не можуть розшифрувати його. Вона секретна, і нею володіють лише друїди, навчання не друїдів заборонено під страхом смерті.",

  deep: "глибинна",
  deep_details: "Чужорідна мова спілкування Далекої Межі, що використовується істотами, які торкнулися енергією цього місця поза миром і планами. Глибинна мова використовує лист Реланік, тому що дроу були першими, хто спробував її записувати, тому що вони ділять Підзем'я з цими спотвореними істотами.",

  primordial: "первісна",
  primordial_details: "Першородна. Гортанна мова, заповнена різкими складами та твердими приголосними. Включає діалекти Акван, Ауран, Ігнан, і Терран, по одному на кожен із чотирьох стихійних планів. Істоти, що говорять на різних діалектах однієї мови, можуть спілкуватися між собою.",

  sky: "небесна",
  sky_details: "Мова ангелів та божеств. Діалект первинної мови.",

  demonic: "безоднева",
  demonic_details: "Мова Безодні. Форма Первинного, спотворена та викривлена злом у серці Безодні. Включає в себе слова сили, чиї склади містять первородне зло. Розумні істоти можуть вивчити основи спілкування мовою Безодні, але не зможуть освоїти ці могутні звуки. Тексти, що містять такі слова, можуть мати потужні ефекти — і томи або сувої з ними можуть бути артефактами самі по собі.",

  thieves: "крадійський жаргон",
  thieves_details:"Таємна суміш діалекту, жаргону та шифру, який дозволяє приховувати повідомлення в, здавалося б, звичайній розмові. Тільки інша істота, яка знає крадійський жаргон, розуміє такі повідомлення. Це займає вчетверо більше часу, ніж передача тих самих слів прямим текстом." +
  "\n\nТакож в нього входить набір секретних знаків та символів, що використовується для передачі коротких та простих повідомлень. Наприклад, чи є область небезпечною або територією гільдії крадіїв, чи поблизу здобич, чи простодушні люди в окрузі, і чи надають тут безпечний притулок для злодіїв у бігах.",

  dambratan: "дамбратан",
  dambratan_details: "Мова народу Аркаюн: " + races.arkayun_human,

  midani: "мідані",
  midani_details: "Мова народу Бедін: " + races.bedin_human,

  guran: "гуран",
  guran_details: "Мова народу Гур: " + races.gur_human,

  damarian: "дамарська",
  damarian_details: "Мова народу Дамарців: " + races.damarian_human + "\n\n Мова народу Нар: " + races.nar_human,

  illuskian: "іллюскіанська",
  illuskian_details: "Мова народу Іллюскіанців: " + races.illuskian_human,

  rushum: "рушум",
  rushum_details: "Мова народу Імаскарі: " + races.imaskari_human,

  alzhedo: "алжедо",
  alzhedo_details: "Мова народу Калішит: " + races.kalishit_human,

  chessent: "чессент",
  chessent_details: "Мова народу Мулан: " + races.mulan_human,

  rashemian: "рашемійська",
  rashemian_details: "Мова народу Рашемі: " + races.rashemi_human,

  chondatanian: "чондатанська",
  chondatanian_details: "Мова народу Тетірців: " + races.tetirian_human + "\n\n Мова народу Чондатанців: " + races.chondatan_human,

  tuiganian: "туйганська",
  tuiganian_details: "Мова народу Туйган: " + races.tuigan_human,

  teramian: "терамийська",
  teramian_details: "Мова народу Терамі: " + races.terami_human,

  uluik: "улуік",
  uluik_details: "Мова народу Улутіун: " + races.ulutiune_human,

  vaelan: "ваелан",
  vaelan_details: "Мова народу Ффолк: " + races.ffolk_human,

  halruanian: "халруанська",
  halruanian_details: "Мова народу Халруан: " + races.halruanian_human,

  chult: "чультська",
  chult_details: "Мова народу Чульт: " + races.chult_human,

  shaarian: "шаарська",
  shaarian_details: "Мова народу Шаар: " + races.shaarian_human,

  shu: "шу",
  shu_details: "Мова народу Шу: " + races.shu_human,
};
