# js-problems

Оттачивай навыки алгоритмики и кодирования.

В этом репозитории собраны задачи, решение которых поможет закрепить навыки программирования и подготовиться к техническим собеседованиям.

Вместе с задачами поставляется система для автоматической проверки решений написанных на JavaScript.

## Предварительные настройки

1. Убедись, что [git](https://git-scm.com/downloads) и [node](https://nodejs.org/en/download/) v10.13.0+ установлены на твоем компьютере
2. Склонируй репозиторий
3. В папке с проектом из терминала выполни `npm install`

Теперь можно приступать к решению задач!

## Задачник

Задачи находятся в папке [/problems](/problems). Каждая задача оформлена в виде отдельного `.js` файла.

Каждый файл имеет следующую структуру:

1. Комментарий с
    - описанием условия задачи
    - примером вызова функции, передаваемых аргументов и ожидаемым результатом
    - JSDoc для параметров и возвращаемого функцией значения
2. Заглушка тела функции. Пиши свое решение здесь
3. Инструкция `module.exports = …` делает функцию доступной для автоматического тестирования

## Тестирование решений

Система автоматичекой проверки решений может быть запущена в одном из трех режимов.

Рекомендуется использовать автоматическую проверку в связке с pre-commit. А каждую решенную задачу оформлять в виде коммита, чтобы не запускать лишние тесты.

### Ручная проверка

Запускается командой

```
npm run test
```

Эта команда проверит правильность решений для всех файлов в которые были внесены изменения и git статус которых `not staged for commit`.

### Автоматическая проверка

Запускается командой

```
npm run test:watch
```

Эта проверка работает по тому же принципу, что и ручная, только тесты запускаются автоматически на каждое сохранение файла.

### Pre-commit проверка

Каждую решенную задачу рекомендуется оформлять в отдельный коммит. Pre-commit проверка автоматически запускается на выполнение команды `git commit`. Тесты выполняются для всех файлов добавленных в содержание коммита.

## Отладка

При решении задач в IDE [Visual Studio Code](https://code.visualstudio.com/Download) подключение отладчика происходит в пару кликов:

1. В меню среды разработки выбрать `View -> Debug`. Слева отобразится панель отладчика
2. Выбрать `Debug js-problems` как конфигурацию отладчика ([видеоверсия](https://youtu.be/KBzhh87jcXA)) ![Демонстрация выбора конфигурации отладчика](/static/configure-debug.gif)
3. Через меню запустить отладчик `Debug -> Start Debugging`. git статус отлаживаемого файла должен быть `not staged for commit`.

## Альтернативы

Данный ресурс создавался, преимущественно, для тех, кто испытывает проблемы с английским языком. Невходящие в их число могут попробовать свои силы на следующих сайтах:

-   [LeetCode](https://leetcode.com/problemset/all/)
-   [Codewars](https://www.codewars.com/?language=javascript)
-   [Hackerrank](https://www.hackerrank.com/dashboard)
-   [CheckIO](https://js.checkio.org/)

Как альтернативный русскоязычный сборник задач можно рассматривать сайт ["Школа программиста"](http://acmp.ru/), но без системы для автоматической проверки JavaScript решений.

## Содействия

Любой желающий может помочь проекту, например:

-   добавлением новых задач в сборник
-   расширением тест-кейсов

Для этого оформляйте свои предложения в виде [задач](https://github.com/mbelsky/js-problems/issues/new).

## Лицензия

Проект разрабатывается под лицензией [MIT](LICENSE).
