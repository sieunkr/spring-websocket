<template>
    <div>

        <div id="user-div" class="col-5">
            <form>
                <div class="form-group">
                    <label >이름:</label>
                    <input class="form-control" id="userName"  placeholder="">
                    <small class="form-text text-muted">당신의 이름을 입력하세요.</small>
                </div>
                <button type="submit" class="btn btn-primary" v-on:click="connect()">Submit</button>
            </form>
        </div>

    </div>
</template>

<script>

    import SockJS from "sockjs-client";

    export default {
        data() {
            return {
                username:"",
                stompClient: null,
                sockJS: null
            }
        },
        mounted() {

        },
        computed: {

        },
        methods: {
            connect : function(){
                this.username = document.querySelector('#userName').value.trim();
                this.stompClient = Stomp.over(SockJS('/ws'));
                this.stompClient.connect({}, this.onConnected, this.onError);

            },
            onConnected : function(){

                this.stompClient.subscribe('/topic/public', this.onMessageReceived);

                //사용자 이름을 서버로 전송
                this.stompClient.send("/app/chat.addUser",
                    {},
                    JSON.stringify({sender: this.username, type: 'JOIN'})
                )

            },
            onError : function(){
                alert("에러?");
            },
            onMessageReceived : function() {
                alert("테스트");
            }




        }
    };
</script>