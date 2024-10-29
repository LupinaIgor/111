#FROM ubuntu:latest
FROM nginx:latest
LABEL authors="igorl"

#ENTRYPOINT ["top", "-b"]
# Обновляем пакеты и устанавливаем необходимые зависимости
RUN apt update && apt upgrade -y && \
    apt install -y mc nginx && \
    apt clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем рабочую директорию (по желанию)
WORKDIR /app

# Команда по умолчанию при запуске контейнера
CMD ["/bin/bash"]