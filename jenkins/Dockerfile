FROM resin/raspberry-pi-openjdk:8u40-jdk

ENV JENKINS_HOME /var/jenkins_home
VOLUME /var/jenkins_home
EXPOSE 8080

ADD http://mirrors.jenkins.io/war-stable/latest/jenkins.war /usr/share/jenkins/jenkins.war
COPY ./ssh /root/.ssh

CMD java -jar /usr/share/jenkins/jenkins.war