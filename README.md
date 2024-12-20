<h1 >Проект автоматизации тестирования для сайта <a href="https://stavka.tv/ ">stavka.tv</a></h1>

## Содержание

* <a href="#annotation">Описание</a>
* <a href="#cases">Реализованные проверки</a>
* <a href="#console">Запуск тестов из терминала</a>
* <a href="#jenkins">Запуск тестов в Jenkins</a>
* <a href="#allure">Отчеты в Allure</a>
* <a href="#testops">Интеграция с Allure TestOps</a>
* <a href="#testops">Интеграция с Jira</a>
* <a href="#telegram">Уведомления в Telegram с использованием бота</a>


<a id="annotation"></a>
## Описание
Тестовый проект состоит из веб-тестов (UI) и тестов API.\
Краткий список интересных фактов о проекте:
- [x] `Page Object` проектирование
- [x] Использовано дев-окружение для минимизации влияния тестовых данных на проект
- [x] Возможность запуска как всех тестов, так и отдельно WEB, API
- [x] Использование `Faker` для генерации данных
- [x] Использование `Axios` для моделей в API тестах
- [x] Для UI тестов добавлена возможность через фикстуры авторизовываться тестовым юзером и отключать промо на уровне запросов
- [x] Интеграция с `Allure TestOps`
- [x] Оповещение о прогоне в Телеграм чат

<a id="cases"></a>
## Реализованные проверки

### Автоматизированные проверки UI
:heavy_check_mark: Создание прогноза 

:heavy_check_mark: Редактирование прогноза сразу после его создания

:heavy_check_mark: Редактирование прогноза со страницы матча

:heavy_check_mark: Регистрация пользователя 

:heavy_check_mark: Авторизация пользователя с корректными данными

### Автоматизированные проверки API
:heavy_check_mark: Проверка токена авторизации на валидность

:heavy_check_mark: Проверка матч-центра на корректность данных

:heavy_check_mark: Проверка матч-центра на корректность данных при фильтрации по видам спорта

:heavy_check_mark: Создание прогноза 

:heavy_check_mark: Редактирование прогноза 

:heavy_check_mark: Создание комментария

:heavy_check_mark: Редактирование комментария

:heavy_check_mark: Удаление комментария

<a id="console"></a>
##  Запуск тестов из терминала
### Локальный запуск тестов
#### WEB

```
npm run ui 
```

#### API

```
npm run api 
```

<a id="jenkins"></a>
# Запуск тестов в Jenkins

> Для прогона тестов на dev окружении был поднят локальный Jenkins сервис, который находится в корпоративной VPN сети
![image](https://github.com/user-attachments/assets/48f34a4f-03b4-469e-bc94-349675c5c792)


<a id="allure"></a>
## Отчеты Allure
### Дашбоард запусков
![image](https://github.com/user-attachments/assets/28a6eb10-5d9d-49cc-b8e0-6dbdad1c89e7)


### Результаты проверок
![2024-12-20_04-54-23](https://github.com/user-attachments/assets/cfc8f452-0786-4e4b-aad9-343f901be8de)


<a id="testops"></a>
## Интеграция с Allure TestOps
### Дашбоард запусков
![2024-12-20_04-51-56](https://github.com/user-attachments/assets/b595d00e-ed6b-4984-b940-1b585d0182f0)

### Созданные тест-кейсы
![2024-12-20_04-51-28](https://github.com/user-attachments/assets/7cad0725-ca1a-4582-a07b-a3ec3edb5363)

<a id="telegram"></a>
### Уведомления в Telegram с использованием бота
![image](https://github.com/user-attachments/assets/b1abcc2b-8f98-4294-b5eb-8a133df7a290)
