# Как создать и использовать SSH-ключи для работы с Git

## 1. Создаём директорию .ssh

``` bash
mkdir .ssh
cd .ssh
```

## 2. Генерируем ключ

``` bash
ssh-keygen -t rsa -b 4096 -C "%address%@%domain%"
```

Здесь _%my.address%_ - адрес, _%domain%_ - домен (например, gmail.com).  
Далее файлу ключу необходимо назначить имя и (при желании) пароль.

## 3. Подключаем публичный ключ

Размещаем публичный ключ (имеет расширение _.pub_) в соответствующем разделе GitHub / BitBucket / etc.

## 4. Проверяем соединение с сервером

``` bash
ssh -T -i ~/.ssh/%private-key-filename% git@%hostname%
```

Здесь _%private-key-filename%_ - имя файла приватного ключа, а в качестве _%hostname%_ может быть указан github.com, bitbucket.org и т.п.

## 5. В директории .ssh создадим файл **config** и укажем в нём

``` bash
Host %hostname%
  IdentityFile ~/.ssh/%private-key-filename%
```

## 6. Теперь при проверке соединения с сервером достаточно указать

``` bash
ssh -T git@%hostname%
```
