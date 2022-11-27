export const once_a_day = 
'Можно использовать один раз в день.';

export const once_a_day_expanded = 
'Вы можете активировать это заклинание один раз в день. Это означает, что вы должны окончить продолжительный отдых, прежде чем сможете наложить это заклинание еще раз.\n\n';

export const thaumaturgy = 
"Чудотворство";

export const thaumaturgy_details = 
'• Сделать свой голос в три раза громче\n' +
'• Изменить свои глаза\n' +
'• Заставить пламя мерцать / ярче-тусклее / менять цвет\n' +
'• Вызвать безвредную дрожь в полу\n' +
'• Создать зловещий звук из выбранной точки\n' +
'• Распахнуть или захлопнуть незапертое окно\n' + 
'• или любое другое такого же рода';

export const thaumaturgy_expanded = 
'Вы создаете небольшое чудо, знак сверхъестественной силы. Вы создаете один из следующих магических эффектов в пределах дистанции:\n\n' +
'• Ваш голос в течение 1 минуты звучит в три раза громче.\n' +
'• Вы заставляете пламя в течение 1 минуты мерцать, светить ярче или тусклее, или изменять цвет.\n' +
'• Вы вызываете безвредную дрожь в полу в течение 1 минуты.\n' +
'• Вы создаете мгновенный звук, исходящий из выбранной вами точки в пределах дистанции, такой как раскат грома, крик ворона или зловещий шепот.\n' +
'• Вы мгновенно заставляете незапертое окно или дверь распахнуться или захлопнуться.\n' +
'• Вы на 1 минуту изменяете внешний вид своих глаз.\n\n' +
'Если вы накладываете это заклинание несколько раз, у вас может быть до трех активных эффектов с длительностью в 1 минуту, и вы можете оканчивать такие эффекты действием.'

// --------------------

export const hellish_rebuke = 
"Адское возмездие";

export const hellish_rebuke_details = 
"Окружает пламенем выбранное существо, причинившее вам урон.";

export const hellish_rebuke_expanded = 
'Вы указываете пальцем, и существо, причинившее вам урон, мгновенно окружается пламенем. Существо должно совершить спасбросок Ловкости. Оно получает урон огнем 2к10 при провале, или половину этого урона при успехе.' +
'На более высоких уровнях: Если вы накладываете это заклинание, используя ячейку 2 уровня или выше, урон увеличивается на 1к10 за каждый уровень ячейки выше первого.'

// --------------------

export const hellish_rebuke_tiefling_details = 
"Окружает пламенем выбранное существо, причинившее вам урон. " + once_a_day;

export const hellish_rebuke_tiefling_expanded = 
'Вы указываете пальцем, и существо, причинившее вам урон, мгновенно окружается пламенем. Существо должно совершить спасбросок Ловкости. Оно получает урон огнем 2к10 при провале, или половину этого урона при успехе.\n\n' + once_a_day_expanded;

// --------------------

export const darkness =
"Тьма";

export const darkness_tiefling_details = 
'Сфера тьмы радиусом 15ф из выбранной точки или предмета. Темное зрение не работает, немагический свет не попадает. Рассеивает магический свет 2- уровня. Если предмет накрыть, тьма будет заблокирована. ' + once_a_day;

export const darkness_tiefling_expanded = 
'Из точки, выбранной вами в пределах дистанции, расползается магическая тьма сферой с радиусом 15 футов. Тьма огибает углы. Существа с темным зрением не могут видеть сквозь эту тьму, и немагический свет не может ее осветить.\n\n' + 
'Если выбранная вами точка находится на объекте, который вы держите или на объекте который не носят или не держат другие существа, то тьма исходит из предмета и перемещается вместе с ним. Если полностью накрыть источник тьмы непрозрачным предметом, например, чашей или шлемом, тьма будет заблокирована.\n\n' +
'Если часть зоны этого заклинания накрывает зону света, созданного заклинанием с уровнем не выше 2, заклинание, создавшее свет, рассеивается.\n\n' + once_a_day_expanded;

// --------------------

export const tinsmith_expanded = 
'Вы можете создать Крошечное механическое устройство (КД 5, 1 хит). Это устройство перестает работать через 24 часа (если вы не потратите 1 час на поддержание его работы). Вы можете Действием разобрать его; в этом случае вы можете получить обратно использованные материалы. Одновременно вы можете иметь не более трех таких устройств.\n\n';

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
'Устройство, которое производит миниатюрный огонек, с помощью которого можно зажечь свечу, факел или костер. Использование этого устройства требует действия.'

export const lighter_expanded =
tinsmith_expanded + 'Это устройство производит миниатюрный огонек, с помощью которого можно за жечь свечу, факел или костер. Использование этого устройства требует Действия.'

// --------------------

export const music_box =
"Создать музыкальную шкатулку";

export const music_box_details = 
'При открытии проигрывает мелодию средней громкости. Перестает играть если мелодия закончилась или если ее закрыли.';

export const music_box_expanded =
tinsmith_expanded + 'При открытии эта шкатулка проигрывает мелодию средней громкости. Шкатулка перестает играть если мелодия закончилась или если шкатулку закрыли.' 

// --------------------

export const small_illusion =
"Малая иллюзия";

export const small_illusion_details =
'Вы создаете звук или образ предмета. Иллюзия оканчивается, если Вы отпустите ее Действием или используете это заклинание еще раз.';

export const small_illusion_expanded =
'Вы создаете звук или образ предмета в пределах дистанции, существующий, пока активно заклинание. Иллюзия также оканчивается, если вы отпустите ее Действием или используете это заклинание еще раз.\n\n' +
'Если вы создаете звук, его громкость может быть как шепотом, так и криком. Это может быть ваш голос, чей-то другой голос, львиный рык, бой барабанов или любой другой звук. Звук звучит всю длительность заклинания, или вы можете создавать отдельные звуки в разное время, пока заклинание активно.\n\n' +
'Если вы создаете образ предмета — например, стул, отпечаток в грязи, или небольшой сундук — он должен помещаться в куб с длиной ребра 5 футов. Образ не может издавать звуки, свет, запах или прочие сенсорные эффекты. Образ нельзя перемещать. Физическое взаимодействие с образом дает понять, что это иллюзия, потому что сквозь него все проходит.\n\n' +
'Если существо действием исследует звук или образ, оно может понять, что это иллюзия, совершив успешную проверку Интеллекта (Анализ) против Сл ваших заклинаний. Если существо распознает иллюзию, она для него становится нечеткой.\n\n' +
'Фокус для создания заклинания можно заменить на кусок овечьей шерсти.';

// --------------------

export const enlargement_self = 
"Увеличение себя";

export const enlargement_self_details = 
'Размер удваиваются по всем измерениям, а вес увеличивается в восемь раз. Проверки и испытания Силы с преимуществом. Дополнительный урон оружием 1к4. ' + once_a_day;

export const enlargement_self_expanded = 
'Вы увеличиваете себя на время действия заклинания. Все, что вы носите и несете, изменяет размер вместе с вами. Все, что вы бросите, тут же обретает свой естественный размер.\n\n' +
'Размеры удваиваются по всем измерениям, а вес увеличивается в восемь раз. Это увеличивает размер на одну категорию — от Среднего до Большого. Если не хватает пространства, приобретается максимально возможный размер. Пока заклинание активно, вы совершаете с преимуществом проверки и спасброски Силы. Оружие тоже увеличивается. Атаки увеличенным оружием причиняют дополнительный урон 1к4.\n\n' +
'Вы не можете накладывать заклинание, находясь под прямыми солнечными лучами, впрочем, солнечные лучи не влияют, если вы ранее наложили заклинание.\n\n' + once_a_day_expanded;

// --------------------

export const invisibility_self = 
"Невидимость";

export const invisibility_self_details = 
'Вы, все, что вы носите и несете, становится невидимым. ' + once_a_day;

export const invisibility_self_expanded =
'Вы становитесь невидимым до окончания действия заклинания. Все, что вы носите и несете, становится невидимым, пока остается у вас. Заклинание оканчивается, если вы совершаете атаку или сотворяете заклинание.\n\n' +
'Вы не можете накладывать заклинание, находясь под прямыми солнечными лучами, впрочем, солнечные лучи не влияют, если вы ранее наложили заклинание.\n\n' + once_a_day_expanded;

// --------------------

export const dancing_lights =
"Пляшущие огоньки";

export const dancing_lights_details =
'Создает до четырех огоньков размером с факел, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся человекоподобную фигуру Среднего размера.';

export const dancing_lights_expanded =
'Вы создаете до четырех огоньков размером с факел в пределах дистанции, делая их похожими на факелы, фонари или светящиеся сферы, парящие в воздухе. Вы можете также объединить четыре огонька в одну светящуюся человекоподобную фигуру Среднего размера. Какую бы форму вы не выбрали, каждый огонек излучает тусклый свет в радиусе 10 футов.\n\n' +
'Вы можете бонусным действием в свой ход переместить огоньки на 60 футов в новое место в пределах дистанции. Каждый огонек должен находиться в пределах 20 футов от другого огонька, созданного этим заклинанием, и огонек тухнет, если оказывается за пределами дистанции заклинания.\n\n' +
'Фокус для создания заклинания можно заменить на кусочек фосфора, гнилушку или светлячка.';

// --------------------

export const faerie_fire =
"Огонь фей";

export const faerie_fire_details =
'Все броски атаки по существам и предметам в выбранном радиусе 20ф совершаются с преимуществом, если атакующий видит их. Эти существа и предметы подсвечиваются синим/зеленым/фиолетовым и не получают преимуществ от невидимости.';

export const faerie_fire_expanded =
'Все предметы в кубе с длиной ребра 20 футов в пределах дистанции подсвечиваются синим, зеленым или фиолетовым цветом (на ваш выбор).\n\n' +
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

export const rage = 
'Ярость';

export const rage_details = 
'<span class="buff">• Преимущество</span> на проверки Силы<br/>'+
'<span class="buff">• Бонусный урон</span> ближним оружием<br/>' +
'<span class="buff">• Сопротивление</span> дробящему, колющему, рубящему урону<br/>' +
'<span class="debuff">• Нельзя</span> использовать заклинания';

export const rage_expanded = 
'В бою вы сражаетесь с первобытной свирепостью. В свой ход вы можете бонусным действием войти в состояние ярости. В состоянии ярости вы получаете следующие преимущества, если не носите тяжелую броню:\n\n' +

'• Вы совершаете с преимуществом проверки и спасброски Силы.\n' +
'• Если вы совершаете атаку ближним оружием, используя Силу, вы получаете бонус к броску урона, соответствующий вашему уровню варвара, как показано в колонке «урон ярости» таблицы «Варвар».\n' +
'• Вы получаете сопротивление дробящему, колющему и рубящему урону.\n' +
'• Если вы были способны использовать заклинания, то вы не можете использовать или концентрироваться на заклинаниях, пока находитесь в состоянии ярости.\n\n' +

'Ваша ярость длится 1 минуту. Она прекращается раньше:\n\n' +

'• Если вы потеряли сознание,\n' +
'• Если вы закончили ход, не атаковав враждебное по отношению к вам существо с момента окончания прошлого хода,\n' +
'• Если вы с момента окончания прошлого хода не получили урон.\n' +
'• Также вы можете прекратить свою ярость бонусным действием.\n\n' +

'Если вы впадали в состояние ярости максимальное для вашего уровня количество раз, то вы должны совершить продолжительный отдых, прежде чем сможете использовать ярость еще раз.';

export const rage_expanded_15 = 
'В бою вы сражаетесь с первобытной свирепостью. В свой ход вы можете бонусным действием войти в состояние ярости. В состоянии ярости вы получаете следующие преимущества, если не носите тяжелую броню:\n\n' +

'• Вы совершаете с преимуществом проверки и спасброски Силы.\n' +
'• Если вы совершаете атаку ближним оружием, используя Силу, вы получаете бонус к броску урона, соответствующий вашему уровню варвара, как показано в колонке «урон ярости» таблицы «Варвар».\n' +
'• Вы получаете сопротивление дробящему, колющему и рубящему урону.\n' +
'• Если вы были способны использовать заклинания, то вы не можете использовать или концентрироваться на заклинаниях, пока находитесь в состоянии ярости.\n\n'

'Ваша ярость длится 1 минуту. Она прекращается раньше, если вы потеряли сознание,\n' +

'Если вы впадали в состояние ярости максимальное для вашего уровня количество раз, то вы должны совершить продолжительный отдых, прежде чем сможете использовать ярость еще раз.';

export const reckless_attack =
'Безрассудная атака';

export const reckless_attack_details =
'<span class="buff">• Преимущество</span> на атаку ближним оружием, использующим Силу\n'+
'<span class="debuff">• Уязвимость</span> к вражеским атакам до следующего хода';

export const reckless_attack_expanded =
'Начиная со 2 уровня вы способны отбросить любую заботу о защите, чтобы атаковать ожесточенно и безрассудно.\n'+
'Когда вы совершаете первую атаку в свой ход, вы можете решить, что будете атаковать безрассудно. Решившись на это, вы в этом ходу совершаете атаки ближним оружием, использующие Силу, с преимуществом, но все броски атаки по вам до вашего следующего хода тоже совершаются с преимуществом.';

export const frenzy = 'Безумие';

export const frenzy_details = 
'<span class="buff">• +1 Атака бонусным действием</span> при активной Ярости\n'+
'<span class="debuff">• +1 Усталость</span> после окончания Ярости';

export const frenzy_expanded =
'Находясь в состоянии Ярости, вы можете впасть в Безумие. В этом случае, пока ваша Ярость не прекратилась, вы можете в каждый свой ход после текущего совершать бонусным действием одну  атаку ближним оружием. После окончания Ярости вы получаете один уровень истощения.';

export const intimidating_presence = 
'Пугающее присутствие';

export const intimidating_presence_details = 
'Испугать существо в 30ф до конца вашего следующего хода.';

export const intimidating_presence_expanded =
'Вы можете Действием пугать других своим ужасающим видом.\n\n'+

'Чтобы сделать это, выберите существо в пределах 30 футов от себя, которое вы можете видеть. Если оно может видеть или слышать вас, оно должно совершить успешный спасбросок Мудрости (Сл равна 8 + ваш бонус мастерства + ваш модификатор Харизмы), иначе станет испуганным вами до конца вашего следующего хода.\n\n'+

'В последующие ходы вы можете Действием поддерживать этот эффект до конца своего следующего хода. Эффект оканчивается, если цель оказалась вне линии обзора, или далее чем в 60 футах от вас. Если существо преуспело в спасброске, вы не можете использовать на нем это умение следующие 24 часа.';

export const retaliation = 'Ответный удар';

export const retaliation_details = 
'Мгновенная ответная атака ближним оружием по существу рядом.';

export const retaliation_expanded = 
'Начиная с 14 уровня, при получении урона от существа, находящегося в пределах 5 футов от вас, вы можете реакцией совершить по нему атаку ближним оружием.';

export const beast_sense = 'Животные чувства';

export const beast_sense_details = 'Переключится на органы чувств согласного животного.';

export const beast_sense_expanded = 'Вы касаетесь согласного зверя. Пока заклинание активно, вы можете действием посмотреть глазами этого зверя и услышать то, что слышит он. Эффект продолжается, пока вы не переключитесь действием обратно на свои чувства.\n\n'+
'Воспринимая чувствами зверя, вы пользуетесь преимуществами всех его особых чувств, хотя для своего окружения вы считаетесь ослепленным и оглохшим.';

export const speak_with_animals = 'Разговор с животными';

export const speak_with_animals_details = 'Возможность понимать зверей и общаться с ними устно, в меру их интеллектуальных спопобностей.';

export const speak_with_animals_expanded = 'Вы получаете на время действия заклинания возможность понимать зверей и общаться с ними устно. Знание и сознание многих зверей ограничено их интеллектом, но они как минимум могут дать информацию о ближайших местах и чудовищах, включая тех, кого они видели за последний день. На усмотрение Мастера, вы можете попытаться убедить зверя оказать вам небольшую помощь.';

export const commune_with_nature = 'Общение с природой';

export const commune_with_nature_details = 'Вы получаете детальное знание об окружающей территории, в пределах 3 миль на поверхности, или 300ф под землей. Не действует в городах или подвалах.';

export const commune_with_nature_expanded = 'Вы ненадолго сливаетесь с природой и получаете знание об окружающей территории. На открытом воздухе заклинание дает вам знание о землях в пределах 3 миль. В пещерах и естественном подземном окружении радиус 300 футов. Заклинание не действует там, где природа заменена конструкциями, например, в городах и подвалах.\n\n'+
'Вы мгновенно получаете знание о трех фактах на ваш выбор о следующих особенностях местности:\n\n'+

'• Местность и водоемы\n'+
'• Преобладающие растения, минералы, животные и разумные существа\n'+
'• Мощные исчадия, небожители, нежить, феи и элементали\n'+
'• Влияние с других планов существования\n'+
'• Строения\n\n'+

'Например, вы можете определить местонахождение мощной нежити, местонахождение чистой воды для питья и местонахождение окрестных поселений.';

export const wolf_knock = 'Удар Волка';

export const wolf_knock_details = 'При Ярости и попадании атакой ближним оружием, сбить с ног существо Большого и менее размера.';

export const elk_knock = 'Проход Лося';

export const elk_knock_details = 'При Ярости, во время движения сбить сног существо Большого и менее размера и нанести урон.';

export const elk_knock_expanded = 'Когда вы находитесь в состоянии ярости, вы можете использовать бонусное действие во время передвижения, чтобы пройти через место, занимаемое существом Большого или меньшего размера. Это существо должно совершить успешный спасбросок Силы (Сложность 8 + ваш бонус Силы + ваш бонус мастерства) или окажется сбитым с ног и получит 1к12 + модификатор Силы дробящего урона.';

export const tiger_strike = 'Прыжок Тигра';

export const tiger_strike_details = 'При Ярости, подбежав к существу Большого и менее размера надести дополнительную атаку ближним оружием.';

export const tiger_strike_expanded = 'Когда вы находитесь в состоянии ярости, при перемещении по прямой как минимум на 20 футов к цели Большого или меньшего размера и до совершения атаки рукопашным оружием, вы можете потратить бонусное действие на совершение дополнительной атаки рукопашным оружием по этому существу.';



