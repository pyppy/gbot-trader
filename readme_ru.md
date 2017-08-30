# GBot Trader

[![Dependency Status](https://david-dm.org/steeply/gbot-trader.svg)](https://david-dm.org/steeply/gbot-trader)

Это приложение работает на стороне сервера и управляется через Telegram.

## Интегрированные биржи

* BTC-E
* Poloniex
* Bittrex
* Exmo
* Bitfinex

## FAQ
Перед тем как задавать вопросы, прочитайте [FAQ](faq_ru.md). Большинство ответов вы найдете в нем.

## Установка

### Установка на локальный компьютер или VDS на Windows

1. Установите [git](https://git-scm.com/downloads) если у вас он не установлен. Откройте консоль и введите ваш e-mail и никнейм:
    ```
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    ```
 
2. Установите [node.js](https://nodejs.org/en/download/current).
3. На своем компьютере создайте любую папку (например `gbot`) и сохраните туда данный репозиторий. Чтобы директория `build` и остальные файлы были в корне дириктории `gbot`.
4. Перейдите в папку и установите пакеты зависимостей командой `npm i`. <br>
    Установка через **Download ZIP**:
    ```
    cd D:\gbot   (Если папка находится в корне диска D)
    npm i
    ```
    Установка через **git**:

    ```
    cd D:\gbot   (Если папка находится в корне диска D)
    git clone https://github.com/steeply/gbot-trader.git
    cd gbot-trader
    npm i
    ```

5. Дальше приступайте к настройке конфигурации и запускайте бота.

### Установка на Heroku

1. На своем компьютере создайте любую папку (например `gbot`) и сохраните туда данный репозиторий. Чтобы директория `build` и остальные файлы были в корне дириктории `gbot`.
    ```
    cd D:\gbot   (Если папка находится в корне диска D)
    git clone https://github.com/steeply/gbot-trader.git
    cd gbot-trader
    ```

2. Зарегистрируйтесь на сайте [heroku](https://signup.heroku.com/login).

    Скачайте [heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) и установите его.
    
    Откройте консоль и **перейдите в ней в папку с ботом** и выполняйте следующие команды:
    
    Выполните команду: **heroku login** и введите свой e-mail и пароль под которым вы зарегистрировались на Heroku (Во время ввода пароля символы не отображаются).
    
    Если если сохранили репозиторий через кнопку `Download ZIP` выполните следующие действия (если через git clone пропустите это):
    ```
    git init
    git add . 
    git commit -m "first commit"
    ```
    
    Затем создайте новое приложение на heroku:
    ```
    heroku create
    git push heroku master
    heroku ps:scale web=0
    ```

3. В приложении на [heroku](https://dashboard.heroku.com/apps) зайдите в Settings -> Reveal Config Vars (вводим параметры приложения из документации (ключи от биржи и телеграма, настройки и стратегию)).
    <br>Или можно сделать через консоль:
    ```
    heroku config:set PARAM=VALUE  - установить параметр
    heroku config:unset PARAM      - удалить параметр
    heroku config                  - показать все установленные параметры
    ```

4. Чтобы включить бота, в разделе Resources -> **WORKER** - Включить. 
    <br>Или консольная команда:
    ```
    heroku ps:scale worker=1        - включить
    heroku ps:scale worker=0        - выключить
    ```

5. Чтобы **обновить бота** на heroku на новую версию:
    
    a) Если устанавливали через `Download ZIP` скачайте новое приложение с текущего репозитория в свою папку, **где распологается прошлая версия бота** и замените в ней файлы.
    
    Дальше выполните команды:
    ```
    git add . 
    git commit -m "update bot"
    git push heroku master
    ```
    
    б) Если устанавливали через git clone выполните команды:
    ```
    git pull origin master
    git push heroku master
    ```
    
    При необходимости обновите параметры конфигурации (см. п. 3)



## Настройка

### Создание бота Telegram.

Если используете опцию **TELEGRAM_OFF**, тогда в этом пункте нет необходимости.

[@BotFather](https://core.telegram.org/bots#6-botfather) - это бот для управления ботами в Telegram

Напишите команду **/newbot**, чтобы создать нового робота. BotFather спросит у вас имя нового бота и предложит придумать username.<br>
Имя (name) будет отображаться в контактах и чатах.<br>
**Username** — короткое имя на латинице, которое используется для упоминаний бота и в ссылках на профиль в telegram.me. Username должен состоять из букв латинского алфавита, подчёркиваний и цифр и быть длиной от 5 до 32 символов. Также имя пользователя обязательно должно заканчиваться на «bot», например: «trade_bot» или «TradeBot».<br>
Ключ (**токен**) это набор символов вида `110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`, который нужен, чтобы получать и отправлять сообщения с помощью Bot API.

#### Получение Telegram ID

1. Установите параметры API биржи `KEY`, `SECRET` и `TELEGRAM_TOKEN`.
2. Запустите GBot Trader.
3. Напишите вашему Telegram боту (которого вы создали ранее через [@BotFather](https://core.telegram.org/bots#6-botfather)) любое сообщение, в ответе получите ваш id номер.
4. Выключите GBot Trader.
5. Установите `TELEGRAM_ID`.


### Параметры переменного окружения:

#### Обязательные параметры

 Option | Description
----------------|----------------------
**KEY**                 | API key
**SECRET**              | API secret
**NAME_COIN**           | Торговая валюта (Например: ltc)
**NAME_COIN_TWO**       | Торговая валюта (Например: usd)
EXCHANGE                | Выбор биржи: (default: btc-e)<br> **btc-e** <br> **poloniex**<br> **bittrex**<br> **exmo**<br> **bitfinex**
EXCHANGE_HOST           | Адрес API биржи. Если основной адрес недоступен.
TELEGRAM_TOKEN          | Ваш токен для Telegram
TELEGRAM_ID             | ID вашего пользователя в Telegram
TELEGRAM_OFF            | Отключить Telegram. (default: false)

> Опция **TELEGRAM_OFF** отключает возможность использовать Telegram в боте. Всё управление и все уведомления посылаемые через Telegram будут так же отключены!


По умолчанию бот запустится на дефолтных настройках. Вы можете их изменить используя следующие параметры.

#### Торговые параметры

 Option | Description
----------------|----------------------
TIME_UPDATE_AUTO_SETTINGS           | Время обновления авто параметров (в минутах) (default: 2)
DEPOSIT_LIMIT_PERCENT               | Процент использования депозита (default: 100)
DEPOSIT_LIMIT_CURRENCY              | Размер использования депозита в валюте параметра **NAME_COIN_TWO** (default: false)
COUNT_ORDERS                        | Количество ордеров.<br> Сколько всего будет установлено. (default: рассчитывается на основе размера депозита)
QUANTITY_ORDERS_IN_BLOCKS           | Количество ордеров в блоке.<br> Сколько ордеров будет одномоментно на рынке. (default: false)
SIZE_FIRST_ORDERS_CURRENCY          | Размер первого ордера (default: false)
SIZE_FIRST_ORDERS_PERCENT           | Размер первого ордера в процентах (default: false)
SIZE_ORDERS_MARTINGALE              | Размер ордеров по Мартингейл<br> (для Экспоненты - проценты, для Линейного - абсолютное число) (default: false)
MARTINGALE_TYPE                     | Тип Мартингейла (1 - экспоненциальный, 2 - линейный) (default: 1)
CONTINUE_MARTINGALE_GRID            | Продолжать сетку Мартингейл при перезапуске бота (default: false)
NOTIFICATION_PAIR                   | Пары для уведомления о скачках курса (Например: btc/usd, ltc/usd или **all/all** для всех пар)
NOTIFICATION_DEVIATION_PERCENT      | Насколько процентов должен увеличиться спред чтобы сработало уведомление (default: 600)

#### Смещение ордеров

Варианты возможных отступов ордеров. Выберите один из предложенных.

 Option | Description
----------------|----------------------
OFFSET_ORDERS_POINTS                | Отступ между ордерами в пунктах  (default: 10)
OFFSET_ORDERS_PERCENT               | Отступ между ордерами в процентах (default: false)
OFFSET_ORDERS_EXPONENTIAL           | Отступ между ордерами по экспоненте в % (default: false)
RANGE_OFFSET                        | Диапазон смещения ордеров (default: false)
OFFSET_FIRST_ORDERS_PERCENT         | Отступ первого ордера в процентах (default: false)

> Параметр **OFFSET_FIRST_ORDERS_PERCENT** можно использовать совместно с любым из выбранных вариантов.

> Чтобы установить первый ордер в стакане цен самым первым, используйте `OFFSET_FIRST_ORDERS_PERCENT=-1`

#### Модули автоконфигурации
Данные модули зависят от размера спреда и модифицируют конфигурацию если спред превышает нормальные значения в 3 раза и более.

 Option | Description
----------------|----------------------
DANGER_PRICE_STOP                   | Остановка бота при большом скачке цены (default: false)
DYNAMIC_SETTINGS_TIME               | Динамическое время обновления авто параметров (default: false)
DYNAMIC_OFFSET_ORDERS               | Динамическое распределение ордеров (default: false)
TREND_DEFINITION                    | Определение тренда (Эксперементально) (default: false)
ABRUPT_CHANGE_TREND                 | Быстрый разворот тренда (Эксперементально) (default: false)
OFF_MODULES_AUTO_SETTINGS           | Отключение всех модулей авто настройки (default: false)

> Опции **TREND_DEFINITION** и **ABRUPT_CHANGE_TREND** только для стратегии **Scalper**.

> Опция **OFF_MODULES_AUTO_SETTINGS** контролирует DANGER_PRICE_STOP, DYNAMIC_SETTINGS_TIME, DYNAMIC_OFFSET_ORDERS, TREND_DEFINITION, ABRUPT_CHANGE_TREND



## Индивидуальные параметры стратегий

**Все стратегии взаимоисключающие. Если ни одна стратегия не выбрана используется стратегия "Скальпер".**

### Стратегия "Скальпер" и "Линии Боллинджера"
 Option | Description
----------------|----------------------
TIME_CLOSE_ORDERS                   | Время закрытия неиспользованных ордеров (в минутах) (default: 5)
TIME_CLOSE_ORDERS_INACTIVITY        | Время закрытия ордеров при бездействии (в минутах) (default: 15)
STEP_BREAKEVEN_PERCENT              | Процент отступа от безубытка между bid и ask (default: 50)


### Стратегия "Линии Боллинджера"

 Option | Description
----------------|----------------------
BBANDS                              | Линии Боллинджера (Трендовая стратегия) (default: false)
BBANDS_DEVIATION                    | Отклонение (default: 20)
BBANDS_INTERVAL                     | Таймфрейм (в минутах) (default: 1)


### Набор стратегий "One Orders"
При запуске Стратегии "One Sell a lot Buy" начальное состояние баланса **основной** валюты в паре **игнорируется**!<br>
При запуске Стратегии "One Buy a lot Sell" начальное состояние баланса **второстепенной** валюты в паре **игнорируется**!

 Option | Description
----------------|----------------------
ONE_ORDERS_SELL                     | Стратегия "One Sell a lot Buy" (default: false)
ONE_ORDERS_BUY                      | Стратегия "One Buy a lot Sell" (default: false)
ONE_ORDERS_OFFSET                   | Разница между ценой LastPrice и первым ордером в стеке ордеров в %.<br> Будет подтягивать ордера вслед за ценой, если это значение будет превышено. (default: 2)
ONE_ORDERS_PROFIT_PERCENT           | Задает процент желаемой прибыли (default: 1)
INTEGRITY_CONTROL_ORDERS            | Контроль целостности ордеров (**soft** - мягкий, **hard** - жесткий) (default: soft)
TYPE_DATA_USED                      | Откуда брать информацию об исполненных ордерах (**active** - активные ордера, **history** - история) (default: active)
FIRST_LOADING_HISTORY               | Загрузка истории при старте бота (default: false)
CYCLES_AUTO_EXIT                    | Через сколько циклов совершить автовыход (default: false)

> Если параметр **INTEGRITY_CONTROL_ORDERS** в режиме `hard`, то ордер будет установлен только если объемы установленных и исполненных  ордеров будут совпадать (если ни один ордер не потеряется).

> При использовании **TYPE_DATA_USED=history** параметр **INTEGRITY_CONTROL_ORDERS=hard** смысла не имеет, ввиду того что в истории данные могут быть не корректны, из-за того что биржа исполнена не все ордера которые были установлены (т.е. часть ордеров просто могли быть отменены).

> Если параметр **FIRST_LOADING_HISTORY** включен, будет загружены в кэш первые 100 исполненных ордеров до первого SELL/BUY ордера на выбранной паре и выставится SELL/BUY ордер исходя из этих данных.

## Дополнительные опции

 Option | Description
----------------|----------------------
EMAIL_REPORT_ADDRESS        | Email адрес для уведомлениях о падениях и ошибках сети
HOST_SMTP                   | Адрес почтового сервера (default: smtp.yandex.ru)
EMAIL_AUTH_USER             | Логин авторизации на почтовом сервере
EMAIL_AUTH_PASS             | Пароль почтового сервера
TIME_ZONE                   | Временная зона (Например: Europe/Moscow) [Database Time Zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
LOG                         | Вывод лога расчета авто параметров (default: false)
LOG_DEBUG                   | Вывод дебаг лога (default: false)
LOG_TRANSPORTS              | Куда писать лог (0 - консоль, 1 - файл, 2 - консоль и файл) (default: 0)
LOG_PATH                    | Пользовательский путь до директории с логом (default: Папка с ботом)
RESTART_TRADER_TIME         | Через сколько секунд перезапрашивать данные после сетевых ошибок (default: 5)
NOTIFICATION_ERROR_COUNT    | Количество ошибок за 5 минут для уведомления через telegram (default: false)
EXCHANGE_FEE                | Комиссия на сделки биржи (default: 0.25)
DELAY_REQUEST_API           | Задержка при выполнении запросов к api<br> в миллисекундах (default: 500)
DELAY_BETWEEN_MODULES       | Задержка в секундах между выполнением последовательных модулей (default: 3). 
TITLE                       | Заголовок окна консоли. (Работает не на всех системах).
LANGUAGE                    | Язык интерфейса (`ru` или `en`) (default: ru)
NODE_ENV                    | Значение **production** включает:<br>  1. уведомление о старте бота в Telegram.<br> 2. уведомления об ошибках на E-mail.<br> 3. запрещает использовать conf-dev.js.<br> 4. отключает колоризацию в логе.<br> 5. отключает TITLE

**Важно:**

* Если вы изменили LANGUAGE, отправте команду `/start` в telegram бота для инициализации нового языка в telegram.


#### Опции для разработчиков. Данные параметры зависят от биржи.
Эти опции необходимы для создания [middleware exchange api](middleware_exchange_api.md)

 Option | Description
----------------|----------------------
DIRECTION_CURRENCY          | Направление валюты (straight или inverse)
MINIMUM_ORDER_SIZE_IN_BTC   | Минимально допустимый размер ордера в базовой валюте (обычно это BTC) (default: 0.0005). Только для `DIRECTION_CURRENCY=inverse`


## Запуск
 
### На хостинге
Смотрите инструкцию к хостингу.

### На локальном компьютере

```
npm start
```
или
```
TELEGRAM_TOKEN=110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw TELEGRAM_ID=12345678 node ./build/server
```

Для Windows

```
SET TELEGRAM_TOKEN=110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw 
SET TELEGRAM_ID=12345678
npm start
```


Для запуска панели управления в Telegram, отправьте сообщение:
```
/start
```

Дополнительные команды:
```
/info - список всех команд

/version            - Версия бота
/params             - Параметры которые можно менять через Telegram
/config             - Возможные параметры конфигурации через конфигурационный файл
/martin [cache]     - Теоретический расчет ордеров Мартингейла (параметры берутся из конфига). 
                      (cache - необязательный параметр, указывающий включить в расчет сетки 
                      данные ордеров из кэша истории)
/ticker coin_name   - Показывает котировку пары coin_name
/stop [codeExit]    - Завершение работы приложения. codeExit - необязательный код выхода.
/sell_all           - Продать по рынку немедленно. (Внимание: Продажа будет без потверждения!)
/restart            - Горячая перезагрузка GBot Trader
/stats              - Статистика торговли
```

## Donate

```
BTC: 1AMmeM2ERD6nd1K1y5Zta2BvfugHt5UjPo
```