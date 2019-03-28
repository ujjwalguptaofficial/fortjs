import {
    View,
    declareView
} from "eshtml";

// you can give any name but make sure its unique among all other views.
@declareView('controller:default,worker:chat')
export class ChatView extends View {
    render(model: object) {
        return `<!doctype html>
        <html>
          <head>
            <title>Socket.IO chat</title>
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font: 13px Helvetica, Arial; }
              form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
              form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
              form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
              #messages { list-style-type: none; margin: 0; padding: 0; }
              #messages li { padding: 5px 10px; }
              #messages li:nth-child(odd) { background: #eee; }
            </style>
          </head>
          <body>
            <ul id="messages"></ul>
            <form action="">
              <input id="m" autocomplete="off" /><button>Send</button>
            </form>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.dev.js"></script>
            <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
            <script>
            $(function () {
                var socket = io();
                $('form').submit(function(){
                    var msg = $('#m').val();
                 $('#messages').append('<li>'+msg+'</li>')   
                socket.emit('chat message', msg);
                $('#m').val('');
                return false;
                });
            });
            </script>
          </body>
        </html>`;
    }
}