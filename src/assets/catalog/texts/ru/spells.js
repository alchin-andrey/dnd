export const once_a_day = 
'Можно использовать один раз в день.';

export const once_a_day_expanded = 
'Вы можете активировать это заклинание один раз в день. Это означает, что вы должны окончить продолжительный отдых, прежде чем сможете наложить это заклинание ещё раз.\n\n';

export const thaumaturgy = 
"Чудотворство";

export const thaumaturgy_details = 
'• Сделать свой голос в три раза громче\n' +
'• Изменить свои глаза\n' +
'• Заставить пламя мерцать / ярче-тусклее / менять цвет\n' +
'• Вызвать безвредную дрожь в полу\n' +
'• Создать звук раската грома, крик ворона или зловещий шепот из выбранной точки\n' +
'• Распахнуть или захлопнуть незапертое окно\n' + 
'• или любое другое такого же рода';

export const thaumaturgy_expanded = 
'Вы создаёте небольшое чудо, знак сверхъестественной силы. Вы создаёте один из следующих магических эффектов в пределах дистанции:\n\n' +
'• Ваш голос в течение 1 минуты звучит в три раза громче.\n' +
'• Вы заставляете пламя в течение 1 минуты мерцать, светить ярче или тусклее, или изменять цвет.\n' +
'• Вы вызываете безвредную дрожь в полу в течение 1 минуты.\n' +
'• Вы создаёте мгновенный звук, исходящий из выбранной вами точки в пределах дистанции, такой как раскат грома, крик ворона или зловещий шёпот.\n' +
'• Вы мгновенно заставляете незапертое окно или дверь распахнуться или захлопнуться.\n' +
'• Вы на 1 минуту изменяете внешний вид своих глаз.\n\n' +
'Если вы накладываете это заклинание несколько раз, у вас может быть до трёх активных эффектов с длительностью в 1 минуту, и вы можете оканчивать такие эффекты действием.'

// --------------------

export const hellish_rebuke = 
"Адское возмездие";

export const hellish_rebuke_details = 
"Окружает пламенем выбранное существо, причинившее вам урон.";

export const hellish_rebuke_expanded = 
'Вы указываете пальцем, и существо, причинившее вам урон, мгновенно окружается пламенем. Существо должно совершить спасбросок Ловкости. Оно получает урон огнём 2к10 при провале, или половину этого урона при успехе.' +
'На более высоких уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон увеличивается на 1к10 за каждый уровень ячейки выше первого.'

// --------------------

export const hellish_rebuke_tiefling_details = 
"Окружает пламенем выбранное существо, причинившее вам урон. " + once_a_day;

export const hellish_rebuke_tiefling_expanded = 
'Вы указываете пальцем, и существо, причинившее вам урон, мгновенно окружается пламенем. Существо должно совершить спасбросок Ловкости. Оно получает урон огнём 2к10 при провале, или половину этого урона при успехе.\n\n' + once_a_day_expanded;

// --------------------

export const darkness =
"Тьма";

export const darkness_tiefling_details = 
'Сфера тьмы радиусом 15ф из выбранной точки или предмета. Темное зрение не работает, немагический свет не попадает. Рассеивает магический свет 2- уровня. Если предмет накрыть, тьма будет заблокирована. ' + once_a_day;

export const darkness_tiefling_expanded = 
'Из точки, выбранной вами в пределах дистанции, расползается магическая тьма сферой с радиусом 15 футов. Тьма огибает углы. Существа с тёмным зрением не могут видеть сквозь эту тьму, и немагический свет не может её осветить.\n\n' + 
'Если выбранная вами точка находится на объекте, который вы держите или на объекте который не носят или не держат другие существа, то тьма исходит из предмета и перемещается вместе с ним. Если полностью накрыть источник тьмы непрозрачным предметом, например, чашей или шлемом, тьма будет заблокирована.\n\n' +
'Если часть зоны этого заклинания накрывает зону света, созданного заклинанием с уровнем не выше 2, заклинание, создавшее свет, рассеивается.\n\n' + once_a_day_expanded;

// --------------------

export const tinsmith_expanded = 
'Вы можете создать Крошечное механическое устройство (КД 5, 1 хит). Это устройство перестаёт работать через 24 часа (если вы не потратите 1 час на поддержание его работы). Вы можете Действием разобрать его; в этом случае вы можете получить обратно использованные материалы. Одновременно вы можете иметь не более трёх таких устройств.\n\n';

export const toy =
"Создать заводную игрушку";

export const toy_details =
'Поставленная на землю, она проходит 5 футов в случайном направлении за каждый Ваш ход, издавая звуки, соответствующие изображаемому существу.';

export const toy_expanded = 
tinsmith_expanded + 'Заводная игрушка изображает животное, чудовище или существо, вроде лягушки, мыши, птицы, дракона или солдатика. Поставленная на землю, она проходит 5 футов в случайном направлении за каждый ваш ход, издавая звуки, соответствующие изображаемому существу.'

// --------------------

export const lighter =
"Создать зажигалку";

export const lighter_details =
'Устройство, которое производит миниатюрный огонёк, с помощью которого можно зажечь свечу, факел или костёр. Использование этого устройства требует действия.'

export const lighter_expanded =
tinsmith_expanded + 'Это устройство производит миниатюрный огонёк, с помощью которого можно за жечь свечу, факел или костёр. Использование этого устройства требует Действия.'

// --------------------

export const music_box =
"Создать музыкальную шкатулку";

export const music_box_details = 
'При открытии проигрывает мелодию средней громкости. Перестаёт играть если мелодия закончилась или если ее закрыли.';

export const music_box_expanded =
tinsmith_expanded + 'При открытии эта шкатулка проигрывает мелодию средней громкости. Шкатулка перестаёт играть если мелодия закончилась или если шкатулку закрыли.' 

// --------------------

export const small_illusion =
"Малая иллюзия";

export const small_illusion_details =
'Вы создаете звук или образ предмета. Иллюзия оканчивается, если Вы отпустите ее Действием или используете это заклинание еще раз.';

export const small_illusion_expanded =
'Вы создаёте звук или образ предмета в пределах дистанции, существующий, пока активно заклинание. Иллюзия также оканчивается, если вы отпустите её Действием или используете это заклинание ещё раз.\n\n' +
'Если вы создаёте звук, его громкость может быть как шёпотом, так и криком. Это может быть ваш голос, чей-то другой голос, львиный рык, бой барабанов или любой другой звук. Звук звучит всю длительность заклинания, или вы можете создавать отдельные звуки в разное время, пока заклинание активно.\n\n' +
'Если вы создаёте образ предмета — например, стул, отпечаток в грязи, или небольшой сундук — он должен помещаться в куб с длиной ребра 5 футов. Образ не может издавать звуки, свет, запах или прочие сенсорные эффекты. Образ нельзя перемещать. Физическое взаимодействие с образом даёт понять, что это иллюзия, потому что сквозь него всё проходит.\n\n' +
'Если существо действием исследует звук или образ, оно может понять, что это иллюзия, совершив успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний. Если существо распознаёт иллюзию, она для него становится нечёткой.\n\n' +
'Фокус для создания заклинания можно заменить на кусок овечьей шерсти.';

// --------------------

export const enlargement = 
"Увеличение себя";

export const enlargement_details = 
'Размер удваиваются по всем измерениям, а вес увеличивается в восемь раз. Проверки и испытания Силы с преимуществом. Дополнительный урон оружием 1к4. ' + once_a_day;

export const enlargement_expanded = 
'Вы увеличиваете себя на время действия заклинания. Всё, что вы носите и несёте, изменяет размер вместе с вами. Всё, что вы бросите, тут же обретает свой естественный размер.\n\n' +
'Размеры удваиваются по всем измерениям, а вес увеличивается в восемь раз. Это увеличивает размер на одну категорию — от Среднего до Большого. Если не хватает пространства, приобретается максимально возможный размер. Пока заклинание активно, вы совершаете с преимуществом проверки и спасброски Силы. Оружие тоже увеличивается. Атаки увеличенным оружием причиняют дополнительный урон 1к4.\n\n' +
'Вы не можете накладывать заклинание, находясь под прямыми солнечными лучами, впрочем, солнечные лучи не влияют, если вы ранее наложили заклинание.\n\n' + once_a_day_expanded;

// --------------------

export const invisibility_self = 
"Невидимость";

export const invisibility_self_details = 
'Вы, всё, что вы носите и несёте, становится невидимым. ' + once_a_day;

export const invisibility_self_expanded =
'Вы становитесь невидимым до окончания действия заклинания. Всё, что вы носите и несёте, становится невидимым, пока остается у вас. Заклинание оканчивается, если вы совершаете атаку или сотворяете заклинание.\n\n' +
'Вы не можете накладывать заклинание, находясь под прямыми солнечными лучами, впрочем, солнечные лучи не влияют, если вы ранее наложили заклинание.\n\n' + once_a_day_expanded;

// --------------------

export const dancing_lights =
"Пляшущие огоньки";

export const dancing_lights_details =
'Создает до четырех огоньков размером с факел, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся человекоподобную фигуру Среднего размера.';

export const dancing_lights_expanded =
'Вы создаёте до четырёх огоньков размером с факел в пределах дистанции, делая их похожими на факелы, фонари или светящиеся сферы, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся человекоподобную фигуру Среднего размера. Какую бы форму вы не выбрали, каждый огонёк излучает тусклый свет в радиусе 10 футов.\n\n' +
'Вы можете бонусным действием в свой ход переместить огоньки на 60 футов в новое место в пределах дистанции. Каждый огонёк должен находиться в пределах 20 футов от другого огонька, созданного этим заклинанием, и огонёк тухнет, если оказывается за пределами дистанции заклинания.\n\n' +
'Фокус для создания заклинания можно заменить на кусочек фосфора, гнилушку или светлячка.';

// --------------------

export const faerie_fire =
"Огонь фей";

export const faerie_fire_details =
'Все броски атаки по существам и предметам в выбранном радиусе 20ф совершаются с преимуществом, если атакующий видит их. Эти существа и предметы подсвечиваются синим/зеленым/фиолетовым и не получают преимуществ от невидимости.';

export const faerie_fire_expanded =
'Все предметы в кубе с длиной ребра 20 футов в пределах дистанции подсвечиваются синим, зелёным или фиолетовым цветом (на ваш выбор).\n\n' +
'Все существа в этой области тоже подсвечиваются, если проваливают спасбросок Ловкости. На время длительности заклинания подсвеченные предметы и существа испускают тусклый свет в радиусе 10 футов.\n\n'
'Все броски атаки по затронутым существам и предметам совершаются с преимуществом, если атакующий видит их, и эти существа и предметы не получают преимуществ от невидимости.';

// --------------------

export const fire_breath =
"Дыхание 🔥 Огнем";

export const cold_breath =
"Дыхание ❄️ Холодом";

export const electricity_breath =
"Дыхание ⚡️ Электричеством";

export const acid_breath =
"Дыхание ⚗️ Кислотой";

export const poison_breath =
"Дыхание 🧪 Ядом";

export const breath_details =
'Выдох разрушительной энергии';

export const breath_expanded = 
'Вы можете Действием выдохнуть разрушительную энергию. Ваше наследие драконов определяет размер, форму и вид урона вашего выдоха. Когда вы используете оружие дыхания, все существа в зоне выдоха должны совершить спасбросок, вид которого определяется вашим наследием.' +
'Существа получают 2к6 урона в случае проваленного спасброска, или половину этого урона, если спасбросок был успешен.' +
'Урон повышается до 3к6 на 6 уровне, до 4к6 на 11, и до 5к6 на 16 уровне.' +
'После использования оружия дыхания вы не можете использовать его повторно, пока не завершите короткий либо продолжительный отдых.'

// --------------------

export const fury = 
'Ярость';