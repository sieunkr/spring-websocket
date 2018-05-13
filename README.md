#문서 작성 중

  
# Spring WebSocket 통신  
  
HTML5 WebSocket 는 웹브라우저와 웹서버가 실시간 양방향 통신 환경을 제공해주는 기술이다. 스프링 프레임워크에서는 4.X 버전부터 WebSocket 기술이 포함되었다.  이 글에서는 스프링 환경에서 WebSocket 구현 방법을 스터디 및 공유하는 글이다.   
  
  
## 관련연구  
  
  
#### Polling(폴링)  
예를 들어서, 자바스크립트는 setInterval 구현  
스프링에서는 @Schedule  
  
#### Long Polling(롱 폴링)  
  
#### HTTP Streaming  
dd  
  
#### HTML5 WebSocket  
WebSocket 프로토콜은 80, 443 포트를 사용한다. 오직 브라우저 통신이 아니다. 모바일에서도 가능하고, 서버와서버 간의 통신도 가능하다.   
  
#### Spring WebSocket  
ㅇㅇ  
  
#### STOMP  
메시지 기반 아키텍처에서 사용한다.  
  
SimpleBroker 는 인메모리 기반에서 동작하는 브로커이다. 외부 브로커, 예를 들어서 RabbitMQ 나 Kafka, ActiveMQ 를 STOMP BrokerRelay 로 적용할 수 있다. 물론, 기본 인메모리 브로커보다 장점이 많다.   
  
  
## 서버 구현  
Config 설정    
  
## Client 구현  
  
#### Sockjs, Stomp Client 라이브러리 추가 
1.  Install SockJS  `npm install sockjs-client`
2.  Install STOMP  `npm install webstomp-client`
  
 
 
  
  
  
  
  
  
  
  
  
  
## Spring Web Flux, Spring 5  
  
https://www.youtube.com/watch?v=GlvyHIqT3K4  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
## 레퍼런스  
https://spring.io/guides/gs/messaging-stomp-websocket/  
https://www.youtube.com/watch?v=nxakp15CACY