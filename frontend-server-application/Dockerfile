FROM adoptopenjdk/openjdk11:jre-11.0.8_10-alpine
VOLUME /tmp
ARG JAR_FILE

ENV _JAVA_OPTIONS "-Xms256m -Xmx512m -Djava.awt.headless=true"

COPY ${JAR_FILE} /opt/app.jar
RUN addgroup bootapp && adduser -D -S -h /var/cache/bootapp -s /sbin/nologin -G bootapp bootapp

WORKDIR /opt
USER bootapp
ENTRYPOINT ["sh", "-c", "java -Djava.security.egd=file:/dev/./urandom -jar /opt/app.jar --server.port=${0} --spring.profiles.active=${1} --spring.cloud.consul.discovery.instance-zone=${2} ${@}"]